'use server'

import prismaClient from "./prismaClient";
import { Prisma } from '@prisma/client';

/**
 * Function to fetch all playlists from the database
 * @param search 
 * @param sortBy 
 * @param sortOrder 
 * @returns 
 */
export const fetchPlaylists = async (
  search: string = "",
  sortBy: string = "name",
  sortOrder: string = "asc"
) => {
  // Also has sorting options if ever necessary.
  try {
    const where: Prisma.PlaylistWhereInput = {
      name: {
        contains: search,
        mode: Prisma.QueryMode.insensitive,
      },
    };

    const orderBy: Prisma.PlaylistOrderByWithRelationInput = {
      [sortBy]: sortOrder.toLowerCase() === "desc" ? "desc" : "asc",
    };

    return await prismaClient.playlist.findMany({
      where,
      orderBy,
      include: {
        tracks: {
          include: {
            track: {
              include: {
                album: true,
                artists: {
                  include: {
                    artist: true,
                  }
                },
              }
            },
          },
        },
      },
    });
  } catch (error) {
    console.error("Error fetching playlists:", error);
    return [];
  }
};

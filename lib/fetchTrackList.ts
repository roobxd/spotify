'use server'

import prismaClient from "./prismaClient";
import { Prisma } from '@prisma/client';

/**
 * Function to retrieve all tracks
 * @param search 
 * @param artistName 
 * @param albumTitle 
 * @param sortBy 
 * @param sortOrder 
 * @returns 
 */
export const fetchTracks = async (
  search: string = "",
  artistName: string = "",
  albumTitle: string = "",
  sortBy: string = "name",
  sortOrder: string = "asc"
) => {
  // Also has filtering options if ever necessary
  try {
    const where: Prisma.TrackWhereInput = {
      name: {
        contains: search,
        mode: Prisma.QueryMode.insensitive, 
      },
      album: {
        name: {
          contains: albumTitle,
          mode: Prisma.QueryMode.insensitive, 
        }
      },
      artists: {
        some: {
          artist: {
            name: {
              contains: artistName,
              mode: Prisma.QueryMode.insensitive, 
            }
          }
        }
      }
    };

    const orderBy: Prisma.TrackOrderByWithRelationInput = {
      [sortBy]: sortOrder.toLowerCase() === "desc" ? "desc" : "asc",
    };

    return await prismaClient.track.findMany({
      where,
      orderBy,
      include: {
        album: true,
        artists: {
          include: {
            artist: true,
          }
        },
      },
    });
  } catch (error) {
    console.error("Error fetching tracks:", error);
    return [];
  }
};

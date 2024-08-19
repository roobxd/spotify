'use server'

import prismaClient from "./prismaClient";
import { Prisma } from '@prisma/client';

/**
 * Function to fetch all artists from the database
 * @param search 
 * @param sortBy 
 * @param sortOrder 
 * @returns 
 */
export const fetchArtists = async (
  search: string = "",
  sortBy: string = "name",
  sortOrder: string = "asc"
) => {
  // Has sorting options if ever necessary.
  try {
    const where: Prisma.ArtistWhereInput = {
      name: {
        contains: search,
        mode: Prisma.QueryMode.insensitive,
      },
    };

    const orderBy: Prisma.ArtistOrderByWithRelationInput = {
      [sortBy]: sortOrder.toLowerCase() === "desc" ? "desc" : "asc",
    };

    return await prismaClient.artist.findMany({
      where,
      orderBy,
      include: {
        albums: {
          include: {
            tracks: true, // Include tracks for each album
          }
        },
        tracks: { // Direct relation to tracks
          include: {
            track: true,
          }
        },
      },
    });
  } catch (error) {
    console.error("Error fetching artists:", error);
    return [];
  }
};

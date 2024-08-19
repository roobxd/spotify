'use server'

import prismaClient from "./prismaClient";
import { Prisma } from '@prisma/client';

/**
 * Function that allows fetching of all albums.
 * @param search 
 * @param artistName 
 * @param releaseYear 
 * @param sortBy 
 * @param sortOrder 
 * @returns 
 */
export const fetchAlbums = async (
  search: string = "",
  artistName: string = "",
  releaseYear: string = "",
  sortBy: string = "name",
  sortOrder: string = "asc"
) => {
  // Has (untested) sorting and other filters if ever necessary.
  try {
    const where: Prisma.AlbumWhereInput = {
      name: {
        contains: search,
        mode: Prisma.QueryMode.insensitive,
      },
      artist: {
        name: {
          contains: artistName,
          mode: Prisma.QueryMode.insensitive,
        }
      },
      releaseDate: releaseYear ? {
        gte: new Date(`${releaseYear}-01-01`),
        lte: new Date(`${releaseYear}-12-31`),
      } : undefined,
    };

    const orderBy: Prisma.AlbumOrderByWithRelationInput = {
      [sortBy]: sortOrder.toLowerCase() === "desc" ? "desc" : "asc",
    };

    return await prismaClient.album.findMany({
      where,
      orderBy,
      include: {
        artist: true,
        tracks: true,
      },
    });
  } catch (error) {
    console.error("Error fetching albums:", error);
    return [];
  }
};

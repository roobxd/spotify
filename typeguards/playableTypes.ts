import { PlayableTypes } from "@/constants/playableTypes";
import { MainView } from "@/constants/viewTypes";
import { Album, Artist, Playlist } from "@prisma/client";

// Prisma doesn't return classes for their objects, so we have to use type guarding instead.

export const isPlaylist = (item: any): item is Playlist => {
    return 'name' in item && 'description' in item;
}

export const isAlbum = (item: any): item is Album => {
    return 'name' in item && 'artistId' in item && 'releaseDate' in item;
}

export const isArtist = (item: any): item is Artist => {
    return 'name' in item && 'albums' in item && 'tracks' in item;
}

export const returnPlayableType = (item: any): PlayableTypes => {
    if (isPlaylist(item)) {
        return PlayableTypes.PLAYLIST;
    }
    if (isAlbum(item)) {
        return PlayableTypes.ALBUM;
    }
    if (isArtist(item)) {
        return PlayableTypes.ARTIST;
    }

    return PlayableTypes.TRACK
}
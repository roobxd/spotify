import { Artist, Track, Playlist, PlaylistTrack, Album, TrackArtist } from "@prisma/client";

export enum PlayableTypes {
    ARTIST = "ARTIST",
    ALBUM = "ALBUM",
    PLAYLIST = "PLAYLIST",
    TRACK = "TRACK"
}

// Extra types for relational data

export interface ArtistWithRelations extends Artist {
    albums: Album[];
    tracks: (TrackArtist & { track: Track })[];
}

export interface AlbumWithRelations extends Album {
    artist: Artist;
    tracks: Track[];
}

export interface TrackWithRelations extends Track {
    album: Album;
    artists: (TrackArtist & { artist: Artist })[];
}

export interface PlaylistWithTracks extends Playlist {
    tracks: (PlaylistTrack & {
      track: Track & {
        album: Album;
        artists: { artist: Artist }[];
      };
    })[];
  }

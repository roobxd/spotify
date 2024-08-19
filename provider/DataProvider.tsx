'use client';

import { createContext, useState, useContext, FunctionComponent, PropsWithChildren, useEffect } from 'react';
import { Album, Artist, Playlist, Track } from '@prisma/client';
import { LibraryFilter } from '@/constants/libraryFilter';
import { fetchAlbums } from '@/lib/fetchAlbumList';
import { fetchArtists } from '@/lib/fetchArtistList';
import { fetchPlaylists } from '@/lib/fetchPlaylistList';
import { fetchTracks } from '@/lib/fetchTrackList';

interface DataContextType {
  currentlyPlaying: { track: Track; artist: Artist } | null;
  selectedPlayable: Album | Playlist | Artist | null;
  setCurrentlyPlaying: (track: { track: Track; artist: Artist } | null) => void;
  setSelectedPlayable: (playable: Album | Playlist | Artist | null) => void;
  artists: Artist[];
  playlists: Playlist[];
  albums: Album[];
  libraryFilter: LibraryFilter | null;
  setLibraryFilter: (filter: LibraryFilter | null) => void;
  isLoading: boolean;
  searchResults: { albums: Album[], artists: Artist[], playlists: Playlist[], tracks: Track[] } | null;
  performSearch: (query: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps extends PropsWithChildren {
  artistList: Artist[];
  playlistList: Playlist[];
  albumList: Album[];
}

/**
 * DataProvider component - provides all the data to children
 * @param param0 
 * @returns FunctionComponent
 */
const DataProvider: FunctionComponent<DataProviderProps> = ({ children, artistList, playlistList, albumList }) => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<{ track: Track; artist: Artist } | null>(null);
  const [selectedPlayable, setSelectedPlayable] = useState<Album | Playlist | Artist | null>(null);

  const [artists, setArtists] = useState<Artist[]>(artistList);
  const [playlists, setPlayLists] = useState<Playlist[]>(playlistList);
  const [albums, setAlbums] = useState<Album[]>(albumList);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<{
    albums: Album[];
    artists: Artist[];
    playlists: Playlist[];
    tracks: Track[];
  } | null>(null);

  const [libraryFilter, setLibraryFilter] = useState<LibraryFilter | null>(null);

  // Update state when artistList, playlistList, or albumList change
  useEffect(() => {
    setLoading(true);

    setArtists(artistList);
    setPlayLists(playlistList);
    setAlbums(albumList);

    setLoading(false);
  }, [artistList, playlistList, albumList]);

  // Perform a search and update the search results state
  const performSearch = async (query: string) => {
    setLoading(true);
    try {
      const [albums, artists, playlists, tracks] = await Promise.all([
        fetchAlbums(query),
        fetchArtists(query),
        fetchPlaylists(query),
        fetchTracks(query),
      ]);

      // Store the results 
      setSearchResults({ albums, artists, playlists, tracks });
    } catch (error) {
      console.error('Error performing search:', error);
    } finally {
      setLoading(false);
    }
  };

  // Provide the context values
  return (
    <DataContext.Provider value={{ 
      currentlyPlaying, 
      selectedPlayable, 
      setCurrentlyPlaying, 
      setSelectedPlayable, 
      libraryFilter,
      setLibraryFilter,
      artists, 
      playlists, 
      albums, 
      isLoading,
      performSearch,
      searchResults
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider.');
  }
  return context;
};

export default DataProvider;

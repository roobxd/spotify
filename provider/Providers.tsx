'use client';

import { FunctionComponent, PropsWithChildren } from 'react';
import { UIProvider } from './UIProvider';
import { TooltipProvider } from '@/components/ui/tooltip';
import DataProvider from './DataProvider';
import { Album, Artist, Playlist } from '@prisma/client';

interface ProvidersProps extends PropsWithChildren {
  artistList: Artist[];
  playlistList: Playlist[];
  albumList: Album[];
}

/**
 * Simple provider for combining the other providers, as they cannot be created close to the root in a server component, so we have to wrap it in a client one.
 * @param param0 
 * @returns 
 */
const Providers: FunctionComponent<ProvidersProps> = ({ children, artistList, playlistList, albumList }) => {
  return (
    <TooltipProvider>
      <UIProvider>
        <DataProvider
          artistList={artistList}
          playlistList={playlistList}
          albumList={albumList}
        >
          {children}
        </DataProvider>
      </UIProvider>
    </TooltipProvider>
  );
};

export default Providers;

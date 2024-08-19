'use client'
import { FunctionComponent } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import LibraryHeader from "./LibraryHeader";
import LeftBarLibraryItem from "./LeftBarLibraryItem";
import { useData } from "@/provider/DataProvider";
import { LibraryFilter } from "@/constants/libraryFilter";


/**
 * Library Section, responsible for giving a scrollable view of all the library items (in this case, whatever is selected in the filter)
 * @returns FunctionComponent
 */
const LibrarySection: FunctionComponent = () => {
  const { playlists, albums, artists, libraryFilter } = useData();

  // Return what list to show - generally you'd show the library items, but I admittedly had some issues with creating a polymorphic association
  const returnFilterList = () => {
    switch (libraryFilter) {
      case LibraryFilter.ALBUM:
        return albums;
      case LibraryFilter.ARTIST:
        return artists;
      case LibraryFilter.PLAYLIST:
        return playlists
      default:
        return playlists;
    }
  }

  return (
    <div className="flex flex-col h-full w-full bg-spotify-gray-400 rounded-lg overflow-hidden">
      <LibraryHeader />
      <ScrollArea className="flex-grow">
        <div className="p-2">
          {returnFilterList().map((item) => (
            <LeftBarLibraryItem
              item={item}
              key={item.id}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default LibrarySection;
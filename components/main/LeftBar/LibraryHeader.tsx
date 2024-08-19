'use client'
import React, { FunctionComponent } from 'react';
import { Library, PlusIcon, ArrowRight, Search, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@radix-ui/react-tooltip';
import { useUI } from '@/provider/UIProvider';
import { useData } from '@/provider/DataProvider';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { LibraryFilter } from '@/constants/libraryFilter';
import FilterToggleItem from '@/components/basic/FilterToggleItem';

/**
 * Library header - handles all the buttons and such
 * @returns FunctionComponent
 */
const LibraryHeader: FunctionComponent = () => {
    const { isCollapsed, toggleCollapse } = useUI();
    const { setLibraryFilter } = useData();

    return (
        <div className="px-4 pt-4 text-white">
            <div className="flex justify-between items-center mb-4">
                <button onClick={toggleCollapse} className={`flex items-center group justify-center ${isCollapsed ? 'w-full' : ''}`}>
                    <Library size={24} className="text-gray-400 group-hover:text-white ease-in-out transition-colors" />
                    {!isCollapsed && <span className="ml-4 font-semibold text-gray-400 group-hover:text-white transition-colors ease-in-out">Your Library</span>}
                </button>
                {!isCollapsed && (
                    <div className="flex space-x-2">
                        <Tooltip>
                            <TooltipTrigger>
                                <PlusIcon size={24} className='text-gray-400 hover:text-white hover:bg-spotify-gray-200 rounded-full' />
                            </TooltipTrigger>
                            <TooltipContent className="bg-spotify-gray-300 text-white border-none">
                                <div>Create Playlist or Folder</div>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <ArrowRight size={24} className='text-gray-400 hover:text-white hover:bg-spotify-gray-200 rounded-full' />
                            </TooltipTrigger>
                            <TooltipContent className="bg-spotify-gray-300 text-white border-none">
                                <div>Show More</div>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                )}
            </div>
            {!isCollapsed && (
                <>
                    <ScrollArea className="w-full whitespace-nowrap mb-4">
                        <ToggleGroup type="single" className=" justify-start flex flex-row items-start space-x-2">
                            {[LibraryFilter.ALBUM, LibraryFilter.ARTIST, LibraryFilter.PLAYLIST].map((filter, index) => (
                                <FilterToggleItem value={filter} onClick={() => setLibraryFilter(filter)} key={index}> 
                                    {filter}
                                </FilterToggleItem>
                            ))}
                        </ToggleGroup>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                    <div className="flex justify-between items-center">
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-spotify-gray-200">
                            <Search size={20} />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-spo">
                            <span className="mr-2">Recents</span>
                            <List size={16} />
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default LibraryHeader;
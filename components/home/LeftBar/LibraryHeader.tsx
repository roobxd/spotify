import React, { FunctionComponent } from 'react';
import { Library, PlusIcon, ArrowRight, Search, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@radix-ui/react-tooltip';

interface LibraryHeaderProps {
    isCollapsed: boolean;
    toggleCollapse: () => void;
}

const LibraryHeader: FunctionComponent<LibraryHeaderProps> = ({ isCollapsed, toggleCollapse }) => {
    return (
        <div className="p-4 text-white">
            <div className="flex justify-between items-center mb-4">
                <button onClick={toggleCollapse} className={`flex items-center group justify-center ${isCollapsed ? 'w-full' : ''}`}>
                    <Library size={24} className="text-gray-400 group-hover:text-white ease-in-out transition-colors" />
                    {!isCollapsed && <span className="ml-4 font-semibold text-gray-400 group-hover:text-white transition-colors ease-in-out">Your Library</span>}
                </button>
                {!isCollapsed && (
                    <div className="flex space-x-2">
                        <Tooltip>
                            <TooltipTrigger>
                                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-spotify-gray-200">
                                    <PlusIcon size={20} />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-spotify-gray-300 text-white border-none">
                                <div>Create Playlist or Folder</div>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-spotify-gray-200">
                                    <ArrowRight size={20} />
                                </Button>
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
                        <div className="flex space-x-2">
                            {['Playlists', 'Artists', 'Albums', 'Podcasts & Shows'].map((filter) => (
                                <Button key={filter} variant="secondary" size="sm" className="rounded-full bg-spotify-gray-200 text-white">
                                    {filter}
                                </Button>
                            ))}
                        </div>
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
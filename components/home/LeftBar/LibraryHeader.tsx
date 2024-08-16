import React, { ComponentPropsWithoutRef, FunctionComponent, forwardRef } from 'react';
import { Library, PlusIcon, ArrowRight, Search, List } from 'lucide-react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import LabelWithIcon from '@/components/basic/LabelWithIcon';
import FilterToggleItem from '@/components/basic/FilterToggleItem';

const LibraryHeader: React.FC = () => {
    return (
        <div className="flex flex-col space-y-2 text-white">
            <div className="flex justify-between items-center">
        
                <div className="flex items-center ml-2 space-x-2">
                    <LabelWithIcon 
                        text="Your Library"
                        icon={<Library size={24}/>}
                    />
                </div>
                <div className="flex space-x-4">
                    <Button variant="ghost" size="icon" className="hover:bg-[#232323]">
                        <PlusIcon size={20} />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-[#232323]">
                        <ArrowRight size={20} />
                    </Button>
                </div>
            </div>

            <ScrollArea className="w-full whitespace-nowrap overflow">
                <ToggleGroup type="multiple" className="flex space-x-2 scrollbar-hide">
                    <FilterToggleItem value="playlists">Playlists</FilterToggleItem>
                    <FilterToggleItem value="artists">Artists</FilterToggleItem>
                    <FilterToggleItem value="albums">Albums</FilterToggleItem>
                    <FilterToggleItem value="podcasts">Podcasts &amp; Shows</FilterToggleItem>
                </ToggleGroup>
                <ScrollBar orientation="horizontal"/>
            </ScrollArea>

            <div className="flex justify-between items-center">
                <Button variant="ghost" size="icon" className="hover:bg-[#232323]">
                    <Search size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="hover:bg-[#232323] text-sm">
                    <span>Recents</span>
                    <List size={16} className="ml-1" />
                </Button>
            </div>
        </div>
    );
};


export default LibraryHeader;
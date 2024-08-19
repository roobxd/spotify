'use client'

import React from 'react';
import { useData } from '@/provider/DataProvider'; 
import { Input } from '@/components/ui/input';
import { ChevronLeft, ChevronRight, Search, BellIcon } from 'lucide-react';
import { FunctionComponent } from 'react';
import { MainView } from '@/constants/viewTypes';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUI } from '@/provider/UIProvider';

/**
 * Header for the main view, shows chevrons and search bar if necessary.
 * @returns 
 */
const MainHeader: FunctionComponent = () => {
    const { mainView, setMainView } = useUI(); 
    const { performSearch } = useData(); 
    
    const handleSearch = (query: string) => {
        if (query.trim()) {
            performSearch(query.trim());
            setMainView(MainView.SEARCH); // In case for some reason the search bar is visible in a different screen.
        }
    };

    return (
        <div className="flex-row flex w-full">
            <div className="flex flex-row items-center w-1/2 space-x-4">
                <div className="flex flex-row gap-2">
                    <div className="rounded-full bg-spotify-gray-500 p-2 cursor-pointer" onClick={() => setMainView(MainView.HOME)}>
                        <ChevronLeft size={20} />
                    </div>
                    <div className="rounded-full bg-spotify-gray-500 p-2 cursor-pointer">
                        <ChevronRight size={20} />
                    </div>
                </div>
                {mainView === MainView.SEARCH && (
                    <div className="relative flex items-center w-full">
                        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-spotify-gray-100 " />
                        <Input
                            placeholder="What do you want to play?"
                            onChange={(e) => handleSearch(e.target.value)}
                            className="h-12 w-full bg-spotify-gray-200 rounded-3xl border-white p-2 px-8 placeholder:text-spotify-gray-200 placeholder:pl-4"
                        />
                    </div>
                )}
            </div>
            <div className="flex flex-row items-center w-1/2 space-x-6 justify-end">
                <BellIcon size={18} />
                <Avatar className="h-8 w-8">
                    <AvatarImage src="https://picsum.photos/50" />
                    <AvatarFallback>AV</AvatarFallback>
                </Avatar>
            </div>
        </div>
    );
};

export default MainHeader;

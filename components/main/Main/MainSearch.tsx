'use client'
import { cn } from "@/lib/utils";
import { useUI } from "@/provider/UIProvider";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { FunctionComponent } from "react";
import { useData } from "@/provider/DataProvider";
import Image from 'next/image';
import { Album, Artist, Playlist, Track } from "@prisma/client";
import { returnPlayableType } from "@/typeguards/playableTypes";
import Section from "./Home/Section";
import { Play } from "lucide-react";
import LeftBarLibraryItem from "../LeftBar/LeftBarLibraryItem";
import { MainView } from "@/constants/viewTypes";

interface SearchResults {
    artists: Artist[];
    tracks: Track[];
    albums: Album[];
    playlists: Playlist[];
}

/**
 * Search view and it's components - handles all search related data and viewing
 * @returns FunctionComponent
 */
const MainSearch: FunctionComponent = () => {
    const { searchResults } = useData();

    return (
        <ScrollArea className="h-full w-full">
            <div className="flex-col flex p-6 space-y-8">
                {searchResults ? (
                    searchResults.artists.length > 0 ||
                        searchResults.tracks.length > 0 ||
                        searchResults.albums.length > 0 ||
                        searchResults.playlists.length > 0 ? (
                        <>
                            <TopSection results={searchResults} />
                            <Section title={"Albums"} items={searchResults.albums} />
                            <Section title={"Artists"} items={searchResults.artists} />
                            <Section title={"Playlists"} items={searchResults.playlists} />
                            <Section title={"Tracks"} items={searchResults.tracks} />
                        </>
                    ) : (
                        <BrowseAll />
                    )
                ) : (
                    <BrowseAll />
                )}
            </div>
        </ScrollArea>
    );
};

interface TopSectionProps {
    results: SearchResults;
}

/**
 * The top section - shows top track(s)
 * @param param0 
 * @returns 
 */
const TopSection: FunctionComponent<TopSectionProps> = ({ results }) => {
    const {setMainView} = useUI();
    const {setSelectedPlayable} = useData();
    const topResult = results.artists[0] || results.tracks[0] || results.albums[0] || results.playlists[0];

    // Determine the top tracks (max 4 or fewer if there are not enough)
    const topTracks = results.tracks.slice(0, 4);

    const typeOfTopResult = returnPlayableType(topResult);

    return (
        <div className="flex flex-col md:flex-row gap-6">
            <div className="relative flex-1">
                <h2 className="text-2xl font-bold mb-4">Top Result</h2>
                <div className="bg-spotify-gray-600 p-4 group rounded-lg hover:bg-spotify-gray-700 cursor-pointer relative" onClick={() => {
                    setMainView(typeOfTopResult as unknown as MainView)
                    setSelectedPlayable(topResult)
                }}>
                    <div>
                        <Image src={topResult.imageUrl} alt={topResult.name} width={200} height={200} className="rounded-full mb-4" />
                        <h3 className="text-xl font-semibold">{topResult.name}</h3>
                    </div>

                    <div className="absolute bottom-4 right-4 p-2 bg-spotify-green rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100">
                        <Play size={20} color="black" fill="black" />
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Top Tracks</h2>
                <div className="space-y-2">
                    {topTracks.length > 0 ? (
                        topTracks.map((track) => (
                            <LeftBarLibraryItem item={track} key={track.id}/>
                        ))
                    ) : (
                        <p>No top tracks available</p>
                    )}
                </div>
            </div>
        </div>
    );
};



/**
 * Browse section, shown if no search query has been passed yet
 * @returns FunctionComponent
 */
const BrowseAll: FunctionComponent = () => {
    const { isCollapsed, rightBarIsCollapsed } = useUI();


    // Sample data - just for showcasing the UI
    const browseItemList = [
        { text: 'Live Music', color: 'bg-red-500' },
        { text: 'Country', color: 'bg-yellow-500' },
        { text: 'Pop', color: 'bg-pink-500' },
        { text: 'Rock', color: 'bg-gray-700' },
        { text: 'Hip Hop', color: 'bg-purple-500' },
        { text: 'Jazz', color: 'bg-blue-500' },
        { text: 'Classical', color: 'bg-indigo-500' },
        { text: 'Electronic', color: 'bg-teal-500' },
        { text: 'Indie', color: 'bg-green-500' },
        { text: 'Metal', color: 'bg-gray-800' },
        { text: 'R&B', color: 'bg-orange-500' },
        { text: 'Reggae', color: 'bg-lime-500' },
        { text: 'Alternative', color: 'bg-fuchsia-500' },
        { text: 'Blues', color: 'bg-blue-700' },
        { text: 'Dance', color: 'bg-pink-600' },
        { text: 'Soul', color: 'bg-red-600' },
        { text: 'Folk', color: 'bg-green-600' },
        { text: 'World Music', color: 'bg-yellow-600' },
        { text: 'Chill', color: 'bg-teal-600' },
        { text: 'Instrumental', color: 'bg-indigo-600' },
        { text: 'Acoustic', color: 'bg-gray-600' },
        { text: 'K-Pop', color: 'bg-purple-600' },
        { text: 'Latin', color: 'bg-orange-600' },
    ];


    const gridLayout = (): string => {
        if ((isCollapsed || rightBarIsCollapsed) || (rightBarIsCollapsed && isCollapsed)) {
            return "grid-cols-4"
        }
        return "grid-cols-2"
    }

    return (
        <div className="flex-col flex">
            <h2 className="font-bold text-2xl mb-4">Browse All</h2>
            <div className={cn("grid gap-4", gridLayout())}>
                {browseItemList.map((item) => (
                    <BrowseItem key={item.text} text={item.text} color={item.color} />
                ))}
            </div>
        </div>
    )
}

interface BrowseItemProps {
    text: string;
    color: string;
}

/**
 * Simple Browse item - just for show.
 * @param param0 
 * @returns 
 */
const BrowseItem: FunctionComponent<BrowseItemProps> = ({ text, color }) => {
    return (
        <div className={cn("flex w-auto h-[170px] p-4 rounded-2xl cursor-pointer", color)}>
            <h2 className="font-bold text-2xl">{text}</h2>
        </div>
    )
}

export default MainSearch;
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { FunctionComponent } from "react"
import LibraryHeader from "./LibraryHeader"
import Image from "next/image"
import { PlayIcon, Plus } from "lucide-react"
import { Play } from "next/font/google"

const LibrarySection: FunctionComponent = () => {
    return (
        <div className="flex-1 flex flex-col space-y-4 bg-spotify-gray-400 p-4 rounded-md min-h-fit">
                <LibraryHeader/>

                <div className="flex-1 overflow-auto">
                    {
                        // TODO: Look more into fixed heights for ScrollArea.
                    }
                    <ScrollArea className="h-[600px]">
                        <LeftBarLibraryItem title="Liked Songs" subtitle="Playlist - 185 Songs" />
                        <LeftBarLibraryItem title="Your Episodes" subtitle="Saved and downloaded episodes" />
                        <LeftBarLibraryItem title="Ethel Cain" subtitle="Artist" />
                        <LeftBarLibraryItem title="Taylor Swift" subtitle="Artist" />
                        <LeftBarLibraryItem title="Top Hits 2024" subtitle="Album - 15 Songs" />
                        <LeftBarLibraryItem title="Chill Vibes" subtitle="Playlist - 45 Songs" />
                        <LeftBarLibraryItem title="Workout Mix" subtitle="Playlist - 30 Songs" />
                        <LeftBarLibraryItem title="Best of 90s" subtitle="Playlist - 50 Songs" />
                        <LeftBarLibraryItem title="Indie Favorites" subtitle="Playlist - 20 Songs" />
                        <LeftBarLibraryItem title="New Releases" subtitle="Recent Albums and Singles" />
                        <LeftBarLibraryItem title="Summer Hits" subtitle="Playlist - 25 Songs" />
                        <LeftBarLibraryItem title="Relaxing Tunes" subtitle="Playlist - 35 Songs" />
                        <LeftBarLibraryItem title="Classics Rewind" subtitle="Album - 40 Songs" />
                        <LeftBarLibraryItem title="Electronic Beats" subtitle="Playlist - 10 Songs" />
                        <LeftBarLibraryItem title="Jazz Essentials" subtitle="Playlist - 20 Songs" />
                    </ScrollArea>
                </div>
            </div>
    )
}

export default LibrarySection;


interface LeftBarLibraryItemProps {
    title: string;
    subtitle: string;
}


const LeftBarLibraryItem: FunctionComponent<LeftBarLibraryItemProps> = ({ title, subtitle }) => {
    return (
        <div className="flex flex-row justify-start py-4 px-1 gap-4 hover:bg-spotify-gray-200 rounded-md relative group">
            <div className="relative group">
                <Image 
                    src={"https://placehold.co/48"} 
                    alt="image" 
                    className="rounded-md"
                    height={48} 
                    width={48} 
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity rounded-md" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                    <PlayIcon/>
                </div>
            </div>
            
            <div className="flex flex-col">
                <h2 className="text-md font-light">{title}</h2>
                <p className="text-sm text-gray-400">{subtitle}</p>
            </div>
        </div>
    );
}

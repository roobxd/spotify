'use client'

import { FunctionComponent } from "react";
import Image from "next/image";
import { Play, MoreHorizontal, BadgeCheck } from "lucide-react";
import { TableRow, TableBody, TableCell, Table } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useData } from "@/provider/DataProvider";
import { ArtistWithRelations } from "@/constants/playableTypes";

/**
 * The artist showcase in the main viewer
 * @returns FunctionComponent
 */
const MainArtist: FunctionComponent = () => {
    const { selectedPlayable, setCurrentlyPlaying } = useData();
    // Type casting it to a type with access to 'deeper' data
    const artist = selectedPlayable as ArtistWithRelations;

    // Retrieve the 'top tracks'
    const topTracks = [...artist.tracks]
        .sort((a, b) => b.track.duration - a.track.duration)
        .slice(0, 10);


    // Generate a random number for the monthly listeners, normally this would come out of the database.
    const monthlyListeners = Math.floor(Math.random() * (10000000 - 100000) + 100000);

    /**
     * Handle clicks on a track
     * @param track 
     */
    const handleTrackClick = (track: any) => {
        setCurrentlyPlaying({track, artist})
    };

    return (
        <ScrollArea className="h-full w-full">
            <div className="flex flex-col max-w-full">
                <div className="relative h-48 sm:h-64 w-full">
                    <Image
                        src={artist.imageUrl}
                        alt={artist.name}
                        layout="fill"
                        objectFit="cover"
                        className="brightness-50 rounded-md"
                    />
                    <div className="absolute bottom-0 left-0 p-4 sm:p-6 z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <BadgeCheck size={20} fill="#008ABF"/>
                            <span className="text-sm font-semibold text-blue-400">Verified Artist</span>
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-2">{artist.name}</h1>
                        <p className="text-sm text-white">{monthlyListeners.toLocaleString()} monthly listeners</p>
                    </div>
                </div>
                <div className="p-4 sm:p-6 flex flex-wrap items-center gap-4 sm:gap-6">
                    <button className="bg-green-500 text-black rounded-full p-3 hover:scale-105 transition">
                        <Play fill="black" size={32} />
                    </button>
                    <button className="bg-transparent border border-gray-400 text-white rounded-full px-4 py-2 hover:border-white transition">
                        Following
                    </button>
                    <button className="text-gray-400 hover:text-white transition">
                        <MoreHorizontal size={24} />
                    </button>
                </div>
                <div className="px-4 sm:px-6 py-4">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">Popular</h2>
                    <Table>
                        <TableBody>
                            {topTracks.map((trackArtist, index) => {
                                const track = trackArtist.track;
                                // Calculate and format the duration of the track
                                const minutes = Math.floor(track.duration / 60);
                                const seconds = track.duration % 60;
                                const formattedDuration = `${minutes}:${seconds.toString().padStart(2, '0')}`;

                                return (
                                    <TableRow 
                                        key={track.id} 
                                        className="hover:bg-white/10 border-none cursor-pointer"
                                        onClick={() => handleTrackClick(track)}
                                    >
                                        <TableCell className="font-medium text-white">{index + 1}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <Image src={track.imageUrl} alt={track.name} width={40} height={40} />
                                                <div>
                                                    <div className="text-white">{track.name}</div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right text-gray-400">{formattedDuration}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    <button className="text-gray-400 hover:text-white transition mt-4">See more</button>
                </div>
            </div>
        </ScrollArea>
    );
}

export default MainArtist;
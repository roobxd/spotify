'use client'

import { FunctionComponent } from "react";
import Image from "next/image";
import { Play, MoreHorizontal, Clock } from "lucide-react";
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useData } from "@/provider/DataProvider";
import { AlbumWithRelations } from "@/constants/playableTypes";

/**
 * The album showcase in the main viewer 
 * @returns FunctionComponent
 */
const MainAlbum: FunctionComponent = () => {
    const { selectedPlayable, setCurrentlyPlaying } = useData();

    // Allow for access to 'deeper' data by type casting it
    const album = selectedPlayable as AlbumWithRelations;

    // Calculate the total duration and number of tracks
    const trackCount = album.tracks.length;
    const totalDuration = album.tracks.reduce((total, track) => total + track.duration, 0);
    
    // Format the total duration into minutes and seconds
    const minutes = Math.floor(totalDuration / 60);
    const seconds = totalDuration % 60;

    /**
     *  Handles clicking on a track..
     * @param track 
     */
    const handleTrackClick = (track: any) => {
        setCurrentlyPlaying({track, artist: album.artist})
    };

    return (
        <ScrollArea className="h-full w-full">
            <div className="flex flex-col max-w-full p-6">
                <div className="flex flex-col sm:flex-row mt-16 mb-6">
                    <div className="min-h-[232px] min-w-[232px] mx-auto sm:mx-0 mb-6 sm:mb-0">
                        <Image
                            src={album.imageUrl}
                            alt={`${album.name} cover`}
                            height={232}
                            width={232}
                            className="rounded-md"
                        />
                    </div>
                    <div className="flex flex-col justify-end sm:p-6 gap-2 text-center sm:text-left">
                        <h2 className="text-sm font-semibold uppercase">Album</h2>
                        <h1 className="text-4xl sm:text-7xl font-bold text-white mb-4">{album.name}</h1>
                        <div className="flex flex-col sm:flex-row items-center text-sm text-gray-300 mt-2">
                            <Image 
                                src={album.artist.imageUrl} 
                                alt={album.artist.name} 
                                width={24} 
                                height={24} 
                                className="rounded-full mr-2 mb-2 sm:mb-0" 
                            />
                            <span>{album.artist.name} • {album.releaseDate.getFullYear()} • {trackCount} tracks, {minutes} min {seconds} sec</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-6 mb-6">
                    <button className="bg-green-500 text-black rounded-full p-3 hover:scale-105 transition">
                        <Play fill="black" size={32} />
                    </button>
                    <button className="text-gray-400 hover:text-white transition">
                        <MoreHorizontal size={24} />
                    </button>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow className="border-b border-gray-700 hover:bg-transparent">
                            <TableHead className="w-[40px] font-normal text-gray-300">#</TableHead>
                            <TableHead className="font-normal text-gray-300">Title</TableHead>
                            <TableHead className="flex items-center justify-end mr-1 font-normal text-gray-300">
                                <Clock size={16} />
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {album.tracks.map((track, index) => {
                            // Calculate and format length of track in a readable format
                            const minutes = Math.floor(track.duration / 60);
                            const seconds = track.duration % 60;
                            const formattedDuration = `${minutes}:${seconds.toString().padStart(2, '0')}`;

                            return (
                                <TableRow 
                                    key={track.id} 
                                    className="hover:bg-white/10 border-none cursor-pointer"
                                    onClick={() => handleTrackClick(track)}
                                >
                                    <TableCell className="font-medium">{index + 1}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Image src={track.imageUrl} alt={track.name} width={40} height={40} />
                                            <div>
                                                <div className="text-white">{track.name}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right text-gray-300">{formattedDuration}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </ScrollArea>
    );
}

export default MainAlbum;
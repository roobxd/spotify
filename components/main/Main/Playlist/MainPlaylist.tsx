'use client'

import { FunctionComponent } from "react";
import Image from "next/image";
import { Play, Check, MoreHorizontal, Clock } from "lucide-react";
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useData } from "@/provider/DataProvider";
import { PlaylistWithTracks, TrackWithRelations } from "@/constants/playableTypes";
import { Artist, Track } from "@prisma/client";

/**
 * Playlist view - shows all information available for playlists and their tracks
 * @returns FunctionComponent
 */
const MainPlaylist: FunctionComponent = () => {
    const { selectedPlayable, setCurrentlyPlaying } = useData();
    const playlist = selectedPlayable as PlaylistWithTracks;

    // Calculate the total duration and number of tracks
    const trackCount = playlist.tracks.length;
    const totalDuration = playlist.tracks.reduce((total, playlistTrack) => {
        const minutes = Math.floor(playlistTrack.track.duration / 60);
        const seconds = playlistTrack.track.duration % 60;
        return total + minutes * 60 + seconds;
    }, 0);
    
    // Format the total duration into hours and minutes
    const hours = Math.floor(totalDuration / 3600);
    const minutes = Math.floor((totalDuration % 3600) / 60);

    // Handles 'playing' a track
    const handleTrackClick = (track: Track, artist: Artist) => {
        setCurrentlyPlaying({track, artist})
    };

    return (
        <ScrollArea className="h-full w-full">
            <div className="flex flex-col max-w-full">
                <div className="flex flex-col sm:flex-row mt-8 sm:mt-16 p-4 sm:p-6">
                    <div className="min-h-[200px] min-w-[200px] sm:min-h-[232px] sm:min-w-[232px] mx-auto sm:mx-0 mb-4 sm:mb-0">
                        <Image
                            src={playlist.imageUrl}
                            alt={"playlist cover"}
                            height={232}
                            width={232}
                            className="rounded-md"
                        />
                    </div>
                    <div className="flex flex-col justify-end sm:p-6 gap-2 text-center sm:text-left">
                        <h2 className="text-sm font-semibold uppercase">Playlist</h2>
                        <h1 className="text-4xl sm:text-7xl font-bold text-white mb-4">{playlist.name}</h1>
                        <p className="text-sm text-gray-300">{playlist.description}</p>
                        <div className="flex items-center justify-center sm:justify-start text-sm text-gray-300 mt-2">
                            <span>{trackCount} track, about {hours} hr {minutes} min</span>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:p-6 flex items-center gap-4 sm:gap-6">
                    <button className="bg-green-500 text-black rounded-full p-3 hover:scale-105 transition">
                        <Play fill="black" size={32} />
                    </button>
                    <button className="border border-gray-400 text-gray-400 rounded-full p-2 hover:border-white hover:text-white transition">
                        <Check size={8} />
                    </button>
                    <button className="text-gray-400 hover:text-white transition">
                        <MoreHorizontal size={24} />
                    </button>
                </div>
                <div className="px-4 sm:px-6 py-4">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-b border-gray-700 hover:bg-transparent">
                                <TableHead className="w-[40px] font-normal text-gray-300">#</TableHead>
                                <TableHead className="font-normal text-gray-300">Title</TableHead>
                                <TableHead className="hidden sm:table-cell font-normal text-gray-300">Album</TableHead>
                                <TableHead className="hidden sm:table-cell font-normal text-gray-300">Date added</TableHead>
                                <TableHead className="flex items-center justify-end mr-1 font-normal text-gray-300">
                                    <Clock size={16} />
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {playlist.tracks.map((playlistTrack, index) => {

                                const { track } = playlistTrack;
                                // Calculate & format the duration of the track
                                const minutes = Math.floor(track.duration / 60);
                                const seconds = track.duration % 60;
                                const formattedDuration = `${minutes}:${seconds.toString().padStart(2, '0')}`;

                                return (
                                    <TableRow 
                                        key={track.id} 
                                        className="hover:bg-white/10 border-none cursor-pointer"
                                        onClick={() => handleTrackClick(track, track.artists[0].artist)}
                                    >
                                        <TableCell className="font-medium">{index + 1}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <Image src={track.imageUrl} alt="track" width={40} height={40} />
                                                <div>
                                                    <div>{track.name}</div>
                                                    <div className="text-sm text-gray-300">{track.artists[0].artist.name}</div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell text-gray-300">{track.album.name}</TableCell>
                                        <TableCell className="hidden sm:table-cell text-gray-300">Just Now</TableCell>
                                        <TableCell className="text-right text-gray-300">{formattedDuration}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </ScrollArea>
    );
}

export default MainPlaylist;
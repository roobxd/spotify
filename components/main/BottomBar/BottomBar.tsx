'use client'
import { FunctionComponent } from "react";
import Image from "next/image";
import { Heart, MusicIcon, List, Speaker, Volume2, PlusCircle, Repeat, Shuffle, SkipBack, SkipForward, PlayIcon, Play, PlaySquare } from "lucide-react";
import { Slider } from "../../ui/slider";
import { AdditionalView } from "@/constants/viewTypes";
import { useUI } from "@/provider/UIProvider";
import { useData } from "@/provider/DataProvider";

/**
 * The bottom bar component, responsible for handling all the play icons and such.
 * @returns FunctionComponent
 */
const BottomBar: FunctionComponent = () => {
    // Custom hooks for handling the UI Changes and retrieving of data
    const {toggleRightBarCollapse, rightBarIsCollapsed, setAdditionalView} = useUI();
    const {currentlyPlaying} = useData();

    // Should not show the bar if there's no current track.
    if(currentlyPlaying === null) {
        return <></>
    }

    // Calculate track length in viewable format
    const minutes = Math.floor(currentlyPlaying.track.duration / 60);
    const seconds = currentlyPlaying.track.duration % 60;
    const formattedDuration = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    return (
        <div className={`bg-black flex flex-row justify-center md:justify-between items-center h-[90px] px-4 text-white`}>
            <div className="hidden flex-row items-center w-1/3 md:flex">
                <Image
                    src={currentlyPlaying.track.imageUrl}
                    alt="Album cover"
                    className="mr-3"
                    height={56}
                    width={56}
                />
                <div className="flex flex-col mr-4">
                    <h2 className="text-sm font-semibold hover:underline">{currentlyPlaying?.track.name}</h2>
                    <h3 className="text-xs text-gray-400 hover:underline">{currentlyPlaying?.artist.name}</h3>
                </div>
                <Heart size={16} className="mr-4 text-gray-400 hover:text-white cursor-pointer" />
                <PlusCircle size={16} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>

            <div className="flex flex-col items-center w-1/3">
                <div className="flex items-center gap-6 mb-2">
                    <Shuffle size={16} className="text-gray-400 hover:text-white cursor-pointer" />
                    <SkipBack size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                    <div className="flex bg-white rounded-full p-2 shadow-lg cursor-pointer hover:scale-110 transition-all duration-50">
                        <Play size={18} color="black" fill="black" />
                    </div>
                    <SkipForward size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                    <Repeat size={16} className="text-gray-400 hover:text-white cursor-pointer" />
                </div>
                <div className="flex items-center w-full">
                    <span className="text-xs text-gray-400 w-10 text-right">00:00</span>
                    <Slider className="mx-2 flex-grow" />
                    <span className="text-xs text-gray-400 w-10">{formattedDuration}</span>
                </div>
            </div>

            <div className="hidden md:flex items-center justify-end w-1/3">
                <PlaySquare size={16} className={`mx-2 text-gray-400 hover:text-white cursor-pointer ${rightBarIsCollapsed ? "" : "text-spotify-green"}`}
                    onClick={() => { 
                        toggleRightBarCollapse()
                        setAdditionalView(AdditionalView.NOW_PLAYING) 
                    }}
                />
                <MusicIcon size={16} className="mx-2 text-gray-400 hover:text-white cursor-pointer" />
                <List size={16} className="mx-2 text-gray-400 hover:text-white cursor-pointer" />
                <Speaker size={16} className="mx-2 text-gray-400 hover:text-white cursor-pointer" />
                <div className="flex items-center mx-2">
                    <Volume2 size={16} className="text-gray-400 mr-2" />
                    <Slider className="w-24" />
                </div>
            </div>
        </div>
    )
}

export default BottomBar;
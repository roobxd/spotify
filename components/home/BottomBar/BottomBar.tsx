import { FunctionComponent } from "react";
import Image from "next/image";
import { Heart, MusicIcon, List, Speaker, Maximize2, Volume2, PlusCircle, Repeat, Shuffle, SkipBack, SkipForward, PlayIcon, Play, PlaySquare } from "lucide-react";
import { Slider } from "../../ui/slider";
import { AdditionalView } from "@/constants/viewTypes";

interface BottomBarProps {
    setAdditionalView: (additionalView: AdditionalView) => void
    toggleCollapse: () => void
}

const BottomBar: FunctionComponent<BottomBarProps> = ({ toggleCollapse, setAdditionalView }) => {
    return (
        <div className="bg-black flex flex-row justify-between items-center h-[90px] px-4 text-white">
            <div className="flex flex-row items-center w-1/3">
                <Image
                    src={"https://placehold.co/56"}
                    alt="Album cover"
                    className="mr-3"
                    height={56}
                    width={56}
                />
                <div className="flex flex-col mr-4">
                    <h2 className="text-sm font-semibold">willow</h2>
                    <h3 className="text-xs text-gray-400">Taylor Swift</h3>
                </div>
                <Heart size={16} className="mr-4 text-gray-400 hover:text-white cursor-pointer" />
                <PlusCircle size={16} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>

            <div className="flex flex-col items-center w-1/3">
                <div className="flex items-center gap-6 mb-2">
                    <Shuffle size={16} className="text-gray-400 hover:text-white cursor-pointer" />
                    <SkipBack size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                    <div className="flex bg-white rounded-full p-2 shadow-lg">
                        <Play size={18} color="black" fill="black" />
                    </div>
                    <SkipForward size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                    <Repeat size={16} className="text-gray-400 hover:text-white cursor-pointer" />
                </div>
                <div className="flex items-center w-full">
                    <span className="text-xs text-gray-400 w-10 text-right">1:12</span>
                    <Slider className="mx-2 flex-grow" />
                    <span className="text-xs text-gray-400 w-10">2:12</span>
                </div>
            </div>

            <div className="flex items-center justify-end w-1/3">
                <PlaySquare size={16} className="mx-2 text-gray-400 hover:text-white cursor-pointer" 
                    onClick={() => { 
                        toggleCollapse()
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
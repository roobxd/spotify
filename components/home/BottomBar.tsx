import { FunctionComponent } from "react";
import Image from "next/image";
import { Pause, PauseCircle, PlayCircle, PlayIcon, PlusCircle, Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react";
import { Slider } from "../ui/slider";

const BottomBar: FunctionComponent = () => {
    return (
        <div className="bg-black flex flex-row justify-between">
            <div className="flex flex-row justify-start px-4 gap-4 rounded-md w-1/3">
                <Image 
                    src={"https://placehold.co/48"}
                    alt="image"
                    className="ml-2"
                    height={48}
                    width={48}
                />
                <div className="flex flex-col">
                    <h2 className="text-md">willow</h2>
                    <h2 className="text-sm text-gray-400 flex flex-row">Taylor Swift</h2>
                </div>
                <PlusCircle size={16} className=" self-center"/>
            </div>
            <div className="flex flex-col w-1/3 space-y-4">
                <div className="flex flex-row space-x-8 items-center justify-center">
                    <Shuffle className="hover:text-gray-400 text-spotify-gray-100 transition-colors" />
                    <SkipBack className="hover:text-gray-400 text-spotify-gray-100 transition-colors" />
                    <PlayIcon/>
                    <SkipForward className="hover:text-gray-400 text-spotify-gray-100 transition-colors" />
                    <Repeat className="hover:text-gray-400 text-spotify-gray-100 transition-colors" />
                </div>
                <div className="flex-row flex space-x-4">
                    <h2 className="text-sm font-light text-gray-300">01:12</h2>
                    <Slider
                        className="overflow-auto"
                    />
                  <h2 className="text-sm font-light text-gray-300">02:12</h2>
                </div>
            </div>
            <div className="w-1/3">

            </div>
        </div>
    )
}

export default BottomBar;
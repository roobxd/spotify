'use client'
import { ScrollArea } from "@/components/ui/scroll-area";
import { useData } from "@/provider/DataProvider";
import { useUI } from "@/provider/UIProvider";
import { Ellipsis, PlusCircle, X } from "lucide-react";
import Image from "next/image";
import { FunctionComponent } from "react";

/**
 * The only Right Bar child for now, shows your currently playing track.
 * @returns 
 */
const NowPlaying: FunctionComponent = () => {
    const { toggleRightBarCollapse } = useUI();
    const {currentlyPlaying} = useData();

    if(!currentlyPlaying) {
        return <></>
    }

    return (
        <div className="flex w-full flex-col p-6 gap-4">
            <div className="flex flex-row items-center justify-between">
                <h2 className="font-semibold text-sm">{currentlyPlaying.artist.name}</h2>
                <div className="flex flex-row space-x-4">
                    <div className="hover:bg-spotify-gray-600 transition-colors duration-200 p-1 cursor-pointer rounded-full" onClick={() => toggleRightBarCollapse()}>
                        <Ellipsis size={16} />
                    </div>
                    <div className="hover:bg-spotify-gray-600 transition-colors duration-200 p-1 cursor-pointer rounded-full" onClick={() => toggleRightBarCollapse()}>
                        <X size={16} />
                    </div>
                </div>
            </div>
            <ScrollArea className="w-full h-fit gap-8">
                <Image
                    src={currentlyPlaying.track.imageUrl}
                    alt={"title"}
                    height={400}
                    width={400}
                    className="rounded-md"
                />
                <div className="flex flex-row justify-between items-center mt-4">
                    <div>
                        <h2 className="text-2xl font-bold">{currentlyPlaying.track.name}</h2>
                        <h2 className="text-xl font-regular text-gray-400">{currentlyPlaying.artist.name}</h2>
                    </div>
                    <PlusCircle size={16} className="text-gray-400 hover:text-white cursor-pointer" />
                </div>
            </ScrollArea>
        </div>
    )
}

export default NowPlaying;
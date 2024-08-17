import { ScrollArea } from "@/components/ui/scroll-area";
import { Ellipsis, PlusCircle, X } from "lucide-react";
import Image from "next/image";
import { FunctionComponent } from "react";

const NowPlaying: FunctionComponent = () => {
    return (
        <div className="flex w-full flex-col p-6 gap-4">
            <div className="flex flex-row items-center justify-between">
                <h2 className="font-semibold text-sm">Taylor Swift</h2>
                <div className="flex flex-row space-x-4">
                    <Ellipsis size={16} />
                    <X size={16} />
                </div>
            </div>
            <ScrollArea className="w-full h-fit gap-8">
                    <Image
                        src={"https://placehold.co/400x400/gray/white"}
                        alt={"title"}
                        height={400}
                        width={400}
                        className="rounded-md"
                    />
                <div className="flex flex-row justify-between items-center mt-4">
                    <div>
                        <h2 className="text-2xl font-bold">willow</h2>
                        <h2 className="text-xl font-regular text-gray-400">Taylor Swift</h2>
                    </div>
                    <PlusCircle size={16} className="text-gray-400 hover:text-white cursor-pointer" />
                </div>
            </ScrollArea>
        </div>
    )
}

export default NowPlaying;
import React, { FunctionComponent } from 'react';
import Image from "next/image";
import { Play } from "lucide-react";

export interface HomeYourPlayableItemProps {
  imageUrl: string;
  playableTitle: string;
  playableSubtitle: string;
}

const HomeYourPlayableItem: FunctionComponent<HomeYourPlayableItemProps> = ({
    imageUrl,
    playableTitle,
    playableSubtitle
}) => {
    return (
        <div className="group w-[180px] overflow-x-clip p-4 rounded-md hover:bg-spotify-gray-600 transition-all duration-300 cursor-pointer">
            <div className="relative mb-4 aspect-square">
                <img src={imageUrl} alt={playableTitle} className="w-full h-full object-cover rounded-md" />
                <div className="absolute bottom-2 right-2 bg-spotify-green rounded-full p-2 shadow-lg transition-all duration-300 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
                    <Play size={20} color="black" fill="black" />
                </div>
            </div>
            <div className="text-white">
                <h3 className="font-bold text-base mb-1 truncate">{playableTitle}</h3>
                <p className="text-sm text-neutral-400 truncate">{playableSubtitle}</p>
            </div>
        </div>
    );
};

export default HomeYourPlayableItem;
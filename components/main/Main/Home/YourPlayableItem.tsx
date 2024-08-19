import React, { FunctionComponent } from 'react';
import Image from "next/image";
import { Playlist, Artist, Album } from '@prisma/client';
import { Play } from 'lucide-react';
import { returnPlayableType } from '@/typeguards/playableTypes';
import { PlayableTypes } from '@/constants/playableTypes';
import { useUI } from '@/provider/UIProvider';
import { MainView } from '@/constants/viewTypes';
import { useData } from '@/provider/DataProvider';

export interface HomeYourPlayableItemProps {
  item: Playlist | Album | Artist
}

/**
 * The top playable item component - shows bare information + redirects to different component
 * @param param0 
 * @returns 
 */
const HomeYourPlayableItem: FunctionComponent<HomeYourPlayableItemProps> = ({
    item
}) => {
    const {setMainView} = useUI();
    const {setSelectedPlayable} = useData();

    const playableType = returnPlayableType(item);
    const {imageUrl, name} = item;

    const description = playableType === PlayableTypes.PLAYLIST 
    ? (item as Playlist).description 
    : '';

    return (
        <div className="group w-[180px] p-4 rounded-md hover:bg-spotify-gray-600 transition-all duration-300 cursor-pointer" onClick={() => {
            setSelectedPlayable(item)
            setMainView(playableType as unknown as MainView)
        }}>
            <div className="relative mb-4 aspect-square">
                <Image src={imageUrl} alt={name} width={64} height={64} className="w-full h-full object-cover rounded-md" />
                <div className="absolute bottom-2 right-2 bg-spotify-green rounded-full p-2 shadow-lg transition-all duration-300 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
                    <Play size={20} color="black" fill="black" />
                </div>
            </div>

            <div className="text-white">
                <h3 className="font-bold text-base mb-1 truncate">{name}</h3>
                <p className="text-sm text-neutral-400 truncate">{description}</p>
            </div>
        </div>
    );
};

export default HomeYourPlayableItem;
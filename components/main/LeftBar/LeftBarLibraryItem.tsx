import { FunctionComponent } from "react";
import Image from "next/image";
import { PlayIcon } from "lucide-react";
import { useUI } from "@/provider/UIProvider";
import { Album, Artist, Playlist, Track } from "@prisma/client";
import { isArtist, returnPlayableType } from "@/typeguards/playableTypes";
import { PlayableTypes } from "@/constants/playableTypes";
import { useData } from "@/provider/DataProvider";
import { MainView } from "@/constants/viewTypes";

interface LibraryItemProps {
  item: Playlist | Album | Artist | Track;
}


/**
 * Item mainly being used for the left library list - includes hover animations + play button thing.
 * @param param0 
 * @returns FunctionComponent
 */
const LeftBarLibraryItem: FunctionComponent<LibraryItemProps> = ({ item }) => {
  const { isCollapsed, setMainView } = useUI();
  const { setSelectedPlayable } = useData();
  
  // Return enum value of the playable type
  const playableType = returnPlayableType(item);

  const {imageUrl, name} = item;


  return (
    <div className="flex items-center py-2 px-2 hover:bg-spotify-gray-600 rounded-md cursor-pointer group" onClick={() => {
      setSelectedPlayable(item)
      setMainView(playableType as unknown as MainView)
    }}>
      <div className="relative">
        <Image
          src={imageUrl}
          alt={item.id}
          width={48}
          height={48}
          className={`${playableType === PlayableTypes.ARTIST ? "rounded-full" : "rounded-md"} h-[48px] w-[48px]`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity rounded-md flex items-center justify-center">
          <PlayIcon className="text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="white" size={20} />
        </div>
      </div>
      {!isCollapsed && (
        <div className="ml-3 overflow-hidden">
          <h2 className="text-md font-regular text-white truncate">{name}</h2>
          <p className="text-xs text-gray-400 truncate">{item.name}</p>
        </div>
      )}
    </div>
  );
}

export default LeftBarLibraryItem;
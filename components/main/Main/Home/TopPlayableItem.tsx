import { FunctionComponent } from "react";
import Image from "next/image";
import { useUI } from "@/provider/UIProvider";
import { Album, Artist, Playlist } from "@prisma/client";
import { returnPlayableType } from "@/typeguards/playableTypes";
import { useData } from "@/provider/DataProvider";
import { MainView } from "@/constants/viewTypes";
import { Play } from "lucide-react";

export interface HomeTopPlayableItemProps {
  item: Album | Playlist | Artist;
}

/**
 * Top Playable Item - visible in the grid on the home screen
 * @param param0 
 * @returns FunctionComponent
 */
const HomeTopPlayableItem: FunctionComponent<HomeTopPlayableItemProps> = ({ item }) => {
  const { setRandomGradient, setMainView } = useUI();
  const { setSelectedPlayable } = useData();

  // Type of playable
  const playableType = returnPlayableType(item);

  return (
    <div
      className="flex items-center pr-2 justify-between group bg-spotify-gray-600 w-auto min-h-[48px] max-h-[64px] rounded-md hover:bg-spotify-gray-600 transition-colors ease-in-out cursor-pointer"
      onMouseEnter={() => setRandomGradient()}
      onClick={() => {
        setSelectedPlayable(item);
        setMainView(playableType as unknown as MainView);
      }}
    >
      <div className="flex items-center">
        <Image
          src={item.imageUrl}
          alt={item.name}
          width={48}
          height={48}
          className="rounded-l-md object-cover min-h-[48px] max-h-[64px]"
        />
        <div className="flex-grow px-4 font-bold text-sm truncate">{item.name}</div>
      </div>
      <div className="bg-spotify-green rounded-full p-2 transition-all opacity-0 duration-50 group-hover:opacity-100">
        <Play size={20} color="black" fill="black" />
      </div>
    </div>
  );
}

export default HomeTopPlayableItem;

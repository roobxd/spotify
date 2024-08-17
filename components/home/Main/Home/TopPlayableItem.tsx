import { FunctionComponent } from "react";
import Image from "next/image";

export interface HomeTopPlayableItemProps {
  hoverBackgroundGradientColor: string;
  playableTitle: string;
  imageUrl: string;
  onHover: (gradient: string | null) => void;
}

const HomeTopPlayableItem: FunctionComponent<HomeTopPlayableItemProps> = ({
  playableTitle,
  imageUrl,
  hoverBackgroundGradientColor,
  onHover
}) => {
  return (
    <div
      className="flex items-center bg-spotify-gray-500 w-auto h-14 rounded-md hover:bg-spotify-gray-600 transition-colors ease-in-out cursor-pointer"
      onMouseEnter={() => onHover(hoverBackgroundGradientColor)}
      onMouseLeave={() => onHover(null)}
    >
      <Image
        src={imageUrl}
        alt={playableTitle}
        width={50}
        height={50}
        className="rounded-l-md object-cover"
      />
      <div className="flex-grow px-4 font-bold text-sm truncate">{playableTitle}</div>
    </div>
  );
}

export default HomeTopPlayableItem;

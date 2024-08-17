import { FunctionComponent } from "react";
import Image from "next/image";
import { PlayIcon } from "lucide-react";

interface LeftBarLibraryItemProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  isCollapsed: boolean;
}

const LeftBarLibraryItem: FunctionComponent<LeftBarLibraryItemProps> = ({ title, subtitle, imageUrl, isCollapsed }) => {
  return (
    <div className={`flex items-center py-2 px-2 hover:bg-[#232323] rounded-md cursor-pointer group`}>
      <div className="relative">
        <Image
          src={imageUrl}
          alt={title}
          width={48}
          height={48}
          className="rounded-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity rounded-md flex items-center justify-center">
          <PlayIcon className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
        </div>
      </div>
      {!isCollapsed && (
        <div className="ml-3 overflow-hidden">
          <h2 className="text-sm font-medium text-white truncate">{title}</h2>
          <p className="text-xs text-gray-400 truncate">{subtitle}</p>
        </div>
      )}
    </div>
  );
}

export default LeftBarLibraryItem;
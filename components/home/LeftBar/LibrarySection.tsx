import { FunctionComponent } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import LibraryHeader from "./LibraryHeader";
import LeftBarLibraryItem from "./LeftBarLibraryItem";

interface LibrarySectionProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

const libraryItems = [
  { title: "Liked Songs", subtitle: "Playlist • 261 songs", imageUrl: "https://placehold.co/40x40/purple/white" },
  { title: "Your Episodes", subtitle: "Saved & downloaded episodes", imageUrl: "https://placehold.co/40x40/green/white" },
  { title: "Taylor Swift", subtitle: "Artist", imageUrl: "https://placehold.co/40x40/gray/white" },
];

const LibrarySection: FunctionComponent<LibrarySectionProps> = ({ isCollapsed, toggleCollapse }) => {
  return (
    <div className="flex-1 w-full h-full bg-spotify-gray-400 rounded-lg overflow-hidden">
      <LibraryHeader isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
      <ScrollArea className="h-[calc(100%-56px)]">
        <div className="p-2">
          {libraryItems.map((item, index) => (
            <LeftBarLibraryItem
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              imageUrl={item.imageUrl}
              isCollapsed={isCollapsed}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default LibrarySection;
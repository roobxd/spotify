import FilterToggleItem from "@/components/basic/FilterToggleItem";
import { ToggleGroup } from "@radix-ui/react-toggle-group";
import { FunctionComponent } from "react";
import HomeTopPlayableItem, { HomeTopPlayableItemProps } from "./TopPlayableItem";
import HomeYourPlayableItem, { HomeYourPlayableItemProps } from "./YourPlayableItem";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface MainHomeProps {
    onItemHover: (gradient: string | null) => void;
}

const MainHome: FunctionComponent<MainHomeProps> = ({ onItemHover }) => {
    const playableList: Omit<HomeTopPlayableItemProps, "onHover">[] = [
        { hoverBackgroundGradientColor: "from-blue-500", playableTitle: "Top Hits 2024", imageUrl: "https://placehold.co/100x100" },
        { hoverBackgroundGradientColor: "from-pink-500", playableTitle: "Indie Vibes", imageUrl: "https://placehold.co/100x100" },
        { hoverBackgroundGradientColor: "from-purple-500", playableTitle: "Chill Beats", imageUrl: "https://placehold.co/100x100" },
        { hoverBackgroundGradientColor: "from-green-500", playableTitle: "Workout Mix", imageUrl: "https://placehold.co/100x100" },
        { hoverBackgroundGradientColor: "from-yellow-500", playableTitle: "Rock Classics", imageUrl: "https://placehold.co/100x100" },
        { hoverBackgroundGradientColor: "from-teal-500", playableTitle: "Jazz Essentials", imageUrl: "https://placehold.co/100x100" },
        { hoverBackgroundGradientColor: "from-orange-500", playableTitle: "Electronic Beats", imageUrl: "https://placehold.co/100x100" },
        { hoverBackgroundGradientColor: "from-gray-500", playableTitle: "Ambient Sounds", imageUrl: "https://placehold.co/100x100" },
    ];

    const madeForList: HomeYourPlayableItemProps[] = [
        { imageUrl: "https://placehold.co/100x100", playableTitle: "Chill Vibes", playableSubtitle: "Relaxing music for your downtime" },
        { imageUrl: "https://placehold.co/100x100", playableTitle: "Summer Hits", playableSubtitle: "Perfect for sunny days" },
        { imageUrl: "https://placehold.co/100x100", playableTitle: "Acoustic Favorites", playableSubtitle: "Beautiful acoustic tracks" },
        { imageUrl: "https://placehold.co/100x100", playableTitle: "Electronic Essentials", playableSubtitle: "Top electronic tracks" },
        { imageUrl: "https://placehold.co/100x100", playableTitle: "Electronic Essentials", playableSubtitle: "Top electronic tracks" },
        { imageUrl: "https://placehold.co/100x100", playableTitle: "Electronic Essentials", playableSubtitle: "Top electronic tracks" }
    ];

    const yourTopMixesList: HomeYourPlayableItemProps[] = [
        { imageUrl: "https://placehold.co/100x100", playableTitle: "Rock Classics", playableSubtitle: "Timeless rock anthems" },
        { imageUrl: "https://placehold.co/100x100", playableTitle: "Hip-Hop Beats", playableSubtitle: "The best in hip-hop" },
        { imageUrl: "https://placehold.co/100x100", playableTitle: "Jazz Standards", playableSubtitle: "Smooth jazz tunes" },
        { imageUrl: "https://placehold.co/100x100", playableTitle: "Indie Discoveries", playableSubtitle: "Up-and-coming indie artists" },
        { imageUrl: "https://placehold.co/100x100", playableTitle: "Discoveries", playableSubtitle: "Up-and-coming indie artists" },
        { imageUrl: "https://placehold.co/100x100", playableTitle: "Indie Discoveries", playableSubtitle: "Up-and-coming indie artists" }
    ];

    return (
        <div className="h-full w-full flex flex-col overflow-x-clip">
            <div className="sticky top-0 pt-4 pb-2 z-10">
                <ToggleGroup type="multiple" className="flex space-x-2">
                    <FilterToggleItem value="playlists">All</FilterToggleItem>
                    <FilterToggleItem value="artists">Music</FilterToggleItem>
                    <FilterToggleItem value="albums">Podcasts</FilterToggleItem>
                </ToggleGroup>
            </div>
            <ScrollArea className="flex-grow">
                <div>
                    {
                        // TODO: Figure out how to dynamically change the grid columns depending on how much width the parent has
                        // Might have to use collapse hook values?
                    }
                    <div className="grid grid-cols-2 gap-4 p-4">
                        {playableList.map((item, index) => (
                            <div key={index}>
                                <HomeTopPlayableItem {...item} onHover={onItemHover} />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <Section title="Your Top Mixes" items={yourTopMixesList} />
                    <Section title="Made For You" items={madeForList} />
                    <Section title="Your Top Mixes" items={yourTopMixesList} />
                </div>
                <ScrollBar orientation="vertical" />
            </ScrollArea>
        </div>
    );
}

interface SectionProps {
    title: string;
    items: HomeYourPlayableItemProps[];
}

const Section: FunctionComponent<SectionProps> = ({ title, items }) => (
    <div className="my-4 overflow-x-clip">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl ml-4 font-bold">{title}</h2>
            <span className="text-sm font-bold text-neutral-400 hover:underline cursor-pointer">Show all</span>
        </div>
        <div className="flex flex-row overflow-x-clip gap-4">
            {items.map((item, index) => (
                <HomeYourPlayableItem
                    key={index}
                    imageUrl={item.imageUrl}
                    playableTitle={item.playableTitle}
                    playableSubtitle={item.playableSubtitle}
                />
            ))}
        </div>
    </div>
);

export default MainHome;

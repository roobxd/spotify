import FilterToggleItem from "@/components/basic/FilterToggleItem";
import { ToggleGroup } from "@radix-ui/react-toggle-group";
import { FunctionComponent } from "react";
import HomeTopPlayableItem, { HomeTopPlayableItemProps } from "./TopPlayableItem";
import HomeYourPlayableItem, { HomeYourPlayableItemProps } from "./YourPlayableItem";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useUI } from "@/provider/UIProvider";
import { useData } from "@/provider/DataProvider";
import Section from "./Section";


/**
 * The Main 'home' component - shows the startig screen
 * @returns FunctionComponent
 */
const MainHome: FunctionComponent = () => {
    const { isCollapsed, rightBarIsCollapsed } = useUI();
    const { playlists, albums, artists } = useData();

    // Returns valid grid layout depending on the collapse values of each bar.
    const gridLayout = () => {
        if ((isCollapsed || rightBarIsCollapsed) || (rightBarIsCollapsed && isCollapsed)) {
            return "grid-cols-4 grid-rows-2"
        }
        return "grid-cols-2 grid-rows-4"
    }

    return (
        <div className="h-full w-full flex flex-col max-w-full">
            <div className="sticky top-0 pt-4 pb-2 z-10">
                <ToggleGroup type="multiple" className="flex space-x-2">
                    <FilterToggleItem value="playlists">All</FilterToggleItem>
                    <FilterToggleItem value="artists">Music</FilterToggleItem>
                    <FilterToggleItem value="albums">Podcasts</FilterToggleItem>
                </ToggleGroup>
            </div>
            <ScrollArea className="flex-grow mt-4">
                <div className="pr-4">
                    <div className={`${gridLayout()} grid gap-4 mb-8 w-full max-w-full`}>
                        {albums.slice(0, 8).map((item, index) => (
                            <HomeTopPlayableItem key={index} item={item}/>
                        ))}
                    </div>
                    <Section title="Recently played" items={playlists} />
                    <Section title="Your albums" items={albums} />
                    <Section title="Your artists" items={artists} />
                </div>
            </ScrollArea>
        </div>
    );
}




export default MainHome;

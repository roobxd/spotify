import { Playlist, Artist, Track, Album } from "@prisma/client";
import { FunctionComponent } from "react";
import HomeYourPlayableItem from "./YourPlayableItem";

interface SectionProps {
    title: string;
    items: (Playlist | Artist | Album | Track)[];
}

/**
 * Section Component - displays items in a row
 * @param param0 
 * @returns FunctionComponent
 */
const Section: FunctionComponent<SectionProps> = ({ title, items }) => {
    if (items.length === 0) {
        return <></>
    }

    return (
        <div className="mb-8 max-w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{title}</h2>
                <a href="#" className="text-sm font-bold text-gray-400 hover:underline">Show all</a>
            </div>
            <div className="flex space-x-4 pb-4 min-w-max">
                {items.map((item, index) => {
                    return (
                        <div key={index} className="w-[180px] flex-shrink-0">
                            <HomeYourPlayableItem
                                item={item}
                            />
                        </div>
                    )

                })}
            </div>
        </div>
    )

};

export default Section;
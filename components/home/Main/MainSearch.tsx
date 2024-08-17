import { cn } from "@/lib/utils";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { FunctionComponent } from "react";

const MainSearch: FunctionComponent = () => {

    const browseItemList = [
        { text: 'Live Music', color: 'bg-red-500' },
        { text: 'Country', color: 'bg-yellow-500' },
        { text: 'Pop', color: 'bg-pink-500' },
        { text: 'Rock', color: 'bg-gray-700' },
        { text: 'Hip Hop', color: 'bg-purple-500' },
        { text: 'Jazz', color: 'bg-blue-500' },
        { text: 'Classical', color: 'bg-indigo-500' },
        { text: 'Electronic', color: 'bg-teal-500' },
        { text: 'Indie', color: 'bg-green-500' },
        { text: 'Metal', color: 'bg-gray-800' },
        { text: 'R&B', color: 'bg-orange-500' },
        { text: 'Reggae', color: 'bg-lime-500' },
        { text: 'Alternative', color: 'bg-fuchsia-500' },
        { text: 'Blues', color: 'bg-blue-700' },
        { text: 'Dance', color: 'bg-pink-600' },
        { text: 'Soul', color: 'bg-red-600' },
        { text: 'Folk', color: 'bg-green-600' },
        { text: 'World Music', color: 'bg-yellow-600' },
        { text: 'Chill', color: 'bg-teal-600' },
        { text: 'Instrumental', color: 'bg-indigo-600' },
        { text: 'Acoustic', color: 'bg-gray-600' },
        { text: 'K-Pop', color: 'bg-purple-600' },
        { text: 'Latin', color: 'bg-orange-600' },
    ];

    return (
        <div className="flex-col flex">
            <h2 className="font-bold text-2xl mb-4">Browse All</h2>
            <div className="flex-col flex">
                <ScrollArea className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    {browseItemList.map((item) => <BrowseItem key={item.text} text={item.text} color={item.color} />)}
                </ScrollArea>
            </div>
        </div>
    )
}

export default MainSearch;

interface BrowseItemProps {
    text: string;
    color: string;
}

const BrowseItem: FunctionComponent<BrowseItemProps> = ({ text, color }) => {
    return (
        <div className={cn("flex w-[300px] h-[170px] p-4 rounded-2xl", color)}>
            <h2 className="font-bold text-2xl">{text}</h2>
        </div>
    )
}
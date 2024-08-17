import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Search, BellIcon } from "lucide-react";
import { FunctionComponent } from "react";
import { MainView } from "./Main";

interface MainHeaderProps {
    mainView: MainView
}

const MainHeader: FunctionComponent<MainHeaderProps> = ({ mainView }) => {
    return (
        <div className="flex-row flex w-full">
            <div className="flex flex-row items-center w-1/2 space-x-4">
                <div className="flex flex-row">
                    <ChevronLeft />
                    <ChevronRight />
                </div>
                {
                    mainView === MainView.HOME ?
                        null :
                        (
                            <div className="relative flex items-center w-full">
                                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-spotify-gray-100 " />
                                <Input
                                    placeholder="What do you want to play?"
                                    className=" h-12  w-full bg-spotify-gray-200 rounded-3xl border-white p-2 px-8 placeholder:text-spotify-gray-200 placeholder:pl-4"
                                />
                            </div>
                        )
                }

            </div>
            <div className="flex flex-row items-center w-1/2 space-x-6 justify-end">
                <BellIcon size={18} />
                <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>AV</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default MainHeader;
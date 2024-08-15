import { ArrowRight, Home, Library, LibrarySquare, PlusIcon, Search } from "lucide-react";
import { FunctionComponent, ReactNode } from "react";
import LabelWithIcon from "../basic/LabelWithIcon";

const LeftBar: FunctionComponent = () => {
    return (
        <div className="w-84 p-2 flex flex-col space-y-6">

            <div className="flex-2 bg-spotify-gray-300 p-4 rounded-md">
                <div className="space-y-4">
                    <LabelWithIcon
                        icon={<Home/>}
                        text="Home"
                    />
                    <LabelWithIcon 
                        icon={<Search/>}
                        text="Search"
                    />
                </div>
            </div>

            <div className="flex-1 bg-spotify-gray-300 p-4 rounded-md min-h-fit">
                <div className="flex flex-row justify-between">
                    <LabelWithIcon 
                        icon={<LibrarySquare/>}
                        text="Your Library"
                    />
                    <div className="flex flex-row space-x-4">
                        <PlusIcon className="text-gray-300 hover:text-white"/>
                        <ArrowRight className="text-gray-300 hover:text-white"/>                    
                    </div>

                </div>
                
            </div>
      </div>
    )
}

export default LeftBar;



// Album Item Component
import { FunctionComponent, ReactNode } from "react";
import MainHeader from "./MainHeader";
import { cn } from "@/lib/utils";
import MainHome from "./MainHome";

const Main: FunctionComponent = () => {
    
    return (
        <div className="flex flex-col justify-between bg-spotify-gray-400 p-6 rounded-md space-y-16">
            <MainHeader/>

            <MainHome/>

        </div>
    )
}

export default Main;





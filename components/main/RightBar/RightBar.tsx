'use client'
import { FunctionComponent } from "react";
import NowPlaying from "./NowPlaying";
import { useUI } from "@/provider/UIProvider";
import { useData } from "@/provider/DataProvider";


/**
 * The right bar, shows currently only one component.
 * @returns 
 */
const RightBar: FunctionComponent = () => {
    const {rightBarIsCollapsed } = useUI();
    const {currentlyPlaying} = useData();

    if(!currentlyPlaying) {
        return <></>
    }

    
    return (
        <div className={`flex-shrink-0 hidden md:flex ${rightBarIsCollapsed ?  " w-0" : "w-1/3"}  max-w-md bg-spotify-gray-300 rounded-md`}>
            <NowPlaying />
        </div>
    );
};

export default RightBar;
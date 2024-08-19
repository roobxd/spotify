'use client'
import { FunctionComponent } from "react";
import NavigationSection from "./NavigationSection";
import LibrarySection from "./LibrarySection";
import { useUI } from "@/provider/UIProvider";


/**
 * Left Bar Container - handles collapsing mainly and houses the other components
 * @returns FunctionComponent
 */
const LeftBar: FunctionComponent = () => {
    const { isCollapsed } = useUI();

    return (
        <div className={`flex-shrink-0 h-full hidden md:block ${isCollapsed ? 'w-[88px]' : 'w-1/4'}`}>
            <NavigationSection/>
            <LibrarySection/>
        </div>
    );
};

export default LeftBar;
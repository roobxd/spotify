'use client'
import { FunctionComponent } from "react";
import NavigationSection from "./NavigationSection";
import LibrarySection from "./LibrarySection";
import { MainView } from "@/components/home/Main/Main";
import { useCollapse } from "@/hooks/useCollapse";

interface LeftBarProps {
    setMainView: (mainView: MainView) => void;
}

const LeftBar: FunctionComponent<LeftBarProps> = ({ setMainView }) => {
    const { isCollapsed, toggleCollapse } = useCollapse();

    return (
        <div className={`flex-shrink-0 h-full ${isCollapsed ? 'w-[88px]' : 'w-1/4'}`}>
            <NavigationSection setMainView={setMainView} isCollapsed={isCollapsed} />
            <LibrarySection isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
        </div>
    );
};

export default LeftBar;
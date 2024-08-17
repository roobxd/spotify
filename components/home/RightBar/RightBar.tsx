import { FunctionComponent } from "react";
import NowPlaying from "./NowPlaying";

interface RightBarProps {
    isCollapsed: boolean;
}

const RightBar: FunctionComponent<RightBarProps> = ({ isCollapsed }) => {
    if (isCollapsed) {
        return null;
    }
    return (
        <div className="flex-shrink-0 w-1/3 max-w-md bg-spotify-gray-300 rounded-md">
            <NowPlaying />
        </div>
    );
};

export default RightBar;
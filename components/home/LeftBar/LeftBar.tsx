import { FunctionComponent } from "react";
import NavigationSection from "./NavigationSection";
import LibrarySection from "./LibrarySection";

const LeftBar: FunctionComponent = () => {
    
    return (
        <div className="p-2 flex flex-col space-y-2">
            <NavigationSection/>
            <LibrarySection/>
      </div>
    )
}

export default LeftBar;


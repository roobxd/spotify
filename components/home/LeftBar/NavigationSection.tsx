import { FunctionComponent } from "react";
import { Home, Search } from "lucide-react";
import { MainView } from "@/components/home/Main/Main";

interface NavigationSectionProps {
  setMainView: (mainView: MainView) => void;
  isCollapsed: boolean;
}

const NavigationSection: FunctionComponent<NavigationSectionProps> = ({ setMainView, isCollapsed }) => {
  return (
    <div className="bg-spotify-gray-400 p-2 rounded-lg mb-2 w-full">
      <button 
        onClick={() => setMainView(MainView.HOME)}
        className="flex items-center w-full p-3 text-gray-400 hover:text-white transition-colors ease-in-out"
      >
        <Home size={26} />
        {!isCollapsed && <span className="ml-4 text-sm font-bold">Home</span>}
      </button>
      <button 
        onClick={() => setMainView(MainView.SEARCH)}
        className="flex items-center w-full p-3 text-gray-400 hover:text-white transition-colors ease-in-out"
      >
        <Search size={26} />
        {!isCollapsed && <span className="ml-4 text-sm font-bold">Search</span>}
      </button>
    </div>
  );
};

export default NavigationSection;
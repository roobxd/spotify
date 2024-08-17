'use client'
import { FunctionComponent, useState, useCallback } from "react";
import MainHeader from "./MainHeader";
import { cn } from "@/lib/utils";
import MainHome from "./Home/MainHome";
import MainSearch from "./MainSearch";

export enum MainView {
  HOME = "HOME",
  SEARCH = "SEARCH",
}

interface MainProps {
  mainView: MainView;
}

const Main: FunctionComponent<MainProps> = ({ mainView }) => {
  const [hoveredGradient, setHoveredGradient] = useState<string | null>(null);
  const defaultGradient = "from-red-500";

  const handleItemHover = useCallback((gradient: string | null) => {
    setHoveredGradient(gradient);
  }, []);

  const renderMainView = (view: MainView) => {
    switch(view) {
      case MainView.HOME:
        return <MainHome onItemHover={handleItemHover} />;
      case MainView.SEARCH:
        return <MainSearch />;
      default:
        return <MainHome onItemHover={handleItemHover} />;
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col flex-grow p-4",
        "rounded-md space-y-8 transition-gradient bg-spotify-gray-300",
        "bg-gradient-to-b",
        `${mainView === MainView.HOME && (hoveredGradient || defaultGradient)} via-spotify-gray-300 via-[30%] to-spotify-gray-300`
      )}
    >
      <MainHeader mainView={mainView} />
        {renderMainView(mainView)}
    </div>
  );
};

export default Main;

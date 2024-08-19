'use client'
import { FunctionComponent, useCallback } from "react";
import MainHeader from "./MainHeader";
import { cn } from "@/lib/utils";
import MainHome from "./Home/MainHome";
import MainSearch from "./MainSearch";
import { useUI } from "@/provider/UIProvider";
import { MainView } from "@/constants/viewTypes";
import MainAlbum from "./Album/MainAlbum";
import MainArtist from "./Artist/MainArtist";
import MainPlaylist from "./Playlist/MainPlaylist";

/**
 * The main view, shows different views depending on the current mainView
 * @returns FunctionComponent
 */
const Main: FunctionComponent = () => {
  const { mainView, gradient } = useUI();

  // Determines which component to render
  const renderMainView = (view: MainView) => {
    switch (view) {
      case MainView.HOME:
        return <MainHome />;
      case MainView.SEARCH:
        return <MainSearch />;
      case MainView.ALBUM:
        return <MainAlbum />;
      case MainView.ARTIST:
        return <MainArtist />;
      case MainView.PLAYLIST:
        return <MainPlaylist />;
      default:
        return <MainHome />;
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col h-full w-full p-4",
        "rounded-md bg-spotify-gray-300",
        "bg-gradient-to-b",
        mainView !== MainView.SEARCH ? gradient : "",
        "via-spotify-gray-300 via-[35%] to-spotify-gray-300",
        "transition-all duration-500 ease-in-out"
      )}
    >
      <MainHeader />
      <div className="flex-grow overflow-hidden">
        {renderMainView(mainView)}
      </div>
    </div>
  );
};

export default Main;
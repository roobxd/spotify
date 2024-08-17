'use client'
import React, { FunctionComponent } from "react";
import LeftBar from "@/components/home/LeftBar/LeftBar";
import Main from "@/components/home/Main/Main";
import RightBar from "@/components/home/RightBar/RightBar";
import BottomBar from "@/components/home/BottomBar/BottomBar";
import { useMainView } from "@/hooks/useMainView";
import { useCollapse } from "@/hooks/useCollapse";
import { useAdditionalView } from "@/hooks/useAdditionalView";
import { TooltipProvider } from "@/components/ui/tooltip";

const Home: FunctionComponent = () => {
  const { mainView, setMainView } = useMainView();
  const { additionalView, setAdditionalView } = useAdditionalView();
  const { isCollapsed, toggleCollapse } = useCollapse();

  return (
    <TooltipProvider>
      <div className="h-screen w-screen flex flex-col bg-black text-white p-2">
        <div className="flex flex-1 gap-2 overflow-hidden">
          <LeftBar setMainView={setMainView} />
          <div className="flex-grow overflow-x-clip">
            <Main mainView={mainView} />
          </div>
          <RightBar isCollapsed={isCollapsed} />
        </div>
        <div className="h-[88px]">
          <BottomBar setAdditionalView={setAdditionalView} toggleCollapse={toggleCollapse} />
        </div>
      </div>
    </TooltipProvider>
  );
}

export default Home;


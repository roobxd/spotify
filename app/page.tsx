import React, { FunctionComponent } from "react";
import LeftBar from "@/components/home/LeftBar";
import Main from "@/components/home/Main";
import RightBar from "@/components/home/RightBar";
import BottomBar from "@/components/home/BottomBar";

const Home: FunctionComponent = () => {
  return (
    <div className="h-screen flex flex-col bg-black text-white">
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/4 min-w-[240px] max-w-[400px] overflow-y-auto">
          <LeftBar />
        </div>
        <div className="flex-1 flex p-2 overflow-hidden">
          <div className="flex-1 overflow-y-auto pr-2">
            <Main />
          </div>
          <div className="w-1/4 min-w-[280px] max-w-[420px] overflow-y-auto">
            <RightBar />
          </div>
        </div>
      </div>
      <div className="h-20 mt-1">
        <BottomBar />
      </div>
    </div>
  );
}

export default Home;
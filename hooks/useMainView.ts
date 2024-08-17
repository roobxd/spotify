import { MainView } from "@/constants/viewTypes";
import { useState } from "react";

export const useMainView = () => {
    const [mainView, setMainView] = useState<MainView>(MainView.HOME);
  
    return { mainView, setMainView };
  };
  
'use client'
import { MainView } from "@/constants/viewTypes";
import { useState } from "react";

/**
 * A simple hook for the main view.
 * @returns 
 */
export const useMainView = () => {
    const [mainView, setMainViewHook] = useState<MainView>(MainView.HOME);

    const setMainView = (view: MainView) => {
        setMainViewHook(view);
    }
  
    return { mainView, setMainView };
  };
  
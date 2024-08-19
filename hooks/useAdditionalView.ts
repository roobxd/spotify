'use client'
import { AdditionalView } from "@/constants/viewTypes";
import { useState } from "react";

/**
 * Custom hook for simplifying the setting of the additional view (right bar)
 * @returns 
 */
export const useAdditionalView = () => {
    const [additionalView, setAdditionalViewHook] = useState<AdditionalView | null>(AdditionalView.NOW_PLAYING);
  
    const setAdditionalView = (additionalView: AdditionalView | null) => {
        setAdditionalViewHook(additionalView);
    }
    
    return { additionalView, setAdditionalView };
  };
  
import { AdditionalView, MainView } from "@/constants/viewTypes";
import { useState } from "react";

export const useAdditionalView = () => {
    const [additionalView, setAdditionalView] = useState<AdditionalView>(AdditionalView.NOW_PLAYING);
  
    return { additionalView, setAdditionalView };
  };
  
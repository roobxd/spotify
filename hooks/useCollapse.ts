import { useState } from "react";

export const useCollapse = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
  
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  
    return { isCollapsed, toggleCollapse };
  };
  
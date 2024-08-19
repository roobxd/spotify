'use client'
import { useState } from "react";

/**
 * Simple hook to simplifying the useCollapse state
 * @returns 
 */
export const useCollapse = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
  
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  
    return { isCollapsed, toggleCollapse };
  };
  
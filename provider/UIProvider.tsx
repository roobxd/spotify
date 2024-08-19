'use client';

import { AdditionalView, MainView } from '@/constants/viewTypes';
import { useAdditionalView } from '@/hooks/useAdditionalView';
import { useCollapse } from '@/hooks/useCollapse';
import { useMainView } from '@/hooks/useMainView';
import { createContext, useContext, FunctionComponent, PropsWithChildren, useState } from 'react';

interface UIContextType {
  isCollapsed: boolean;
  rightBarIsCollapsed: boolean;
  toggleCollapse: () => void;
  toggleRightBarCollapse: () => void;
  mainView: MainView;
  setMainView: (view: MainView) => void;
  additionalView: AdditionalView | null;
  setAdditionalView: (view: AdditionalView | null) => void;
  gradient: string;
  setRandomGradient: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

const gradientColors = [
  'from-red-700',
  'from-blue-700',
  'from-green-700',
  'from-yellow-700',
  'from-pink-700',
  'from-purple-700',
  'from-indigo-700',
  'from-teal-700',
  'from-gray-700'
];

/**
 * UiProvider - simply handles all UI logic where necessary.
 * @param param0 
 * @returns 
 */
export const UIProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const { isCollapsed, toggleCollapse } = useCollapse();
  const { isCollapsed: rightBarIsCollapsed, toggleCollapse: toggleRightBarCollapse } = useCollapse();
  const { mainView, setMainView } = useMainView();
  const { additionalView, setAdditionalView } = useAdditionalView();

  // State to manage gradient background color
  const [gradient, setGradient] = useState<string>(gradientColors[0]);

  /**
   * Sets random gradient colour
   */
  const setRandomGradient = () => {
    const randomIndex = Math.floor(Math.random() * gradientColors.length);
    setGradient(gradientColors[randomIndex]);
  };

  return (
    <UIContext.Provider
      value={{
        isCollapsed,
        rightBarIsCollapsed,
        toggleCollapse,
        toggleRightBarCollapse,
        mainView,
        setMainView,
        additionalView,
        setAdditionalView,
        gradient,
        setRandomGradient,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider.');
  }
  return context;
};

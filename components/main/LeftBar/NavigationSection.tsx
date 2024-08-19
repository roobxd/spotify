import { FunctionComponent } from "react";
import { Home, Search } from "lucide-react";
import { useUI } from "@/provider/UIProvider";
import { MainView } from "@/constants/viewTypes";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

/**
 * Section to handle all navigation logic - pretty straightforward
 * @returns FunctionComponent
 */
const NavigationSection: FunctionComponent = () => {
  const { setMainView, isCollapsed } = useUI();

  return (
    <ToggleGroup
      type="single"
      className="bg-spotify-gray-400 p-2 rounded-lg mb-2 w-full flex flex-col"
    >
      <NavigationItem
        onClick={() => setMainView(MainView.HOME)}
        icon={<Home size={26} />}
        label="Home"
        value={MainView.HOME}
        isCollapsed={isCollapsed}
      />
      <NavigationItem
        onClick={() => setMainView(MainView.SEARCH)}
        icon={<Search size={26} />}
        label="Search"
        value={MainView.SEARCH}
        isCollapsed={isCollapsed}
      />
    </ToggleGroup>
  );
};

export default NavigationSection;

interface NavigationItemProps {
  onClick: () => void;
  icon: JSX.Element;
  label: string;
  value: string;
  isCollapsed: boolean;
}

const NavigationItem: FunctionComponent<NavigationItemProps> = ({
  onClick,
  icon,
  label,
  value,
  isCollapsed
}) => {
  const {mainView} = useUI();
  return (
    <ToggleGroupItem
      onClick={onClick}
      className={cn(
        "flex items-center w-full p-3 text-gray-400 hover:text-white transition-colors ease-in-out",
        `${value === mainView ? "text-white" : ""}`,
        `${isCollapsed ? "justify-center" : "justify-start"}`
        
      )}
      value={value}
    >
      {icon}
      {!isCollapsed && <span className="ml-4 text-sm font-bold">{label}</span>}
    </ToggleGroupItem>
  );
};


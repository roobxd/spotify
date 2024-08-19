import { ComponentPropsWithoutRef, FunctionComponent, ReactNode } from "react";
import { ToggleGroupItem } from "../ui/toggle-group";

interface FilterToggleItemProps extends ComponentPropsWithoutRef<typeof ToggleGroupItem> {
    children: ReactNode;
}

/**
 * Mostly visual component for toggling of filter items
 * @param param0 
 * @returns FunctionComponent
 */
export const FilterToggleItem: FunctionComponent<FilterToggleItemProps> = ({ children, ...props }) => (
    <ToggleGroupItem
        {...props}
        className="px-3 py-1 text-sm rounded-full bg-spotify-gray-200 data-[state=on]:bg-white data-[state=on]:text-black hover:bg-spotify-gray-300 transition-colors"
    >
        {children}
    </ToggleGroupItem>
);

export default FilterToggleItem;
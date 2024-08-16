import { ComponentPropsWithoutRef, FunctionComponent } from "react";
import { ToggleGroupItem } from "../ui/toggle-group";

interface FilterToggleItemProps extends ComponentPropsWithoutRef<typeof ToggleGroupItem> {
    children: React.ReactNode;
}

export const FilterToggleItem: FunctionComponent<FilterToggleItemProps> = ({ children, ...props }) => (
    <ToggleGroupItem
        {...props}
        className="px-3 py-1 text-sm rounded-full bg-[#232323] data-[state=on]:bg-white data-[state=on]:text-black hover:bg-[#2a2a2a] transition-colors"
    >
        {children}
    </ToggleGroupItem>
);

export default FilterToggleItem;
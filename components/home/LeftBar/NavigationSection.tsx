'use client'

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Home, Search } from "lucide-react";
import { FunctionComponent, useState } from "react"

const NavigationSection: FunctionComponent = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    return (
        <div className="flex-2 bg-spotify-gray-400 p-3 rounded-md">
            <ToggleGroup
                type="single" 
                className="space-y-2 flex flex-col justify-start items-start"
                onValueChange={(value) => setSelectedOption(value)}
            >
                <ToggleGroupItem className="!justify-start text-gray-300 gap-4 font-semibold" value="Home">
                    <Home />
                    Home
                </ToggleGroupItem>
                <ToggleGroupItem className="!justify-start text-gray-300 gap-4 font-semibold" value="Search">
                    <Search/>
                    Search
                </ToggleGroupItem>
            </ToggleGroup>
        </div>
    )
}

export default NavigationSection;

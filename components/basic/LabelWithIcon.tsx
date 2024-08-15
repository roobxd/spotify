import { FunctionComponent, ReactNode } from "react";

interface LabelWithIconProps {
    icon: ReactNode;
    text: string
}

const LabelWithIcon: FunctionComponent<LabelWithIconProps> = ({icon, text}) => {
    return (
        <div className="flex flex-row gap-2 text-gray-300 transition-colors ease-in-out hover:text-white">
        {icon} {text}
        </div>
    )
}

export default LabelWithIcon;
import { FunctionComponent, ReactNode } from "react";

interface LabelWithIconProps {
    icon: ReactNode;
    text: string;
    reverse?: boolean;
    className?: string
}

const LabelWithIcon: FunctionComponent<LabelWithIconProps> = ({icon, text, className, reverse}) => {
    return (
        <div className={`flex flex-row gap-3 text-gray-300 transition-colors ease-in-out hover:text-white font-semibold ${className}`}>
            { reverse ? (<>{text} {icon}</>) : (<>{icon} {text}</>)}
        </div>
    )
}

export default LabelWithIcon;
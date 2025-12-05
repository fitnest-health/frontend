import React from "react";
import { Button } from "./button";

interface ButtonLinkProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ children, className = "", onClick, }) => {
    return (
        <Button
            onClick={onClick}
            className={`
        w-full sm:max-w-[175px] md:max-w-[301px] h-10 md:h-[60px] bg-linear-to-b
        from-[#0B0909]
        to-[#091120]
        shadow-[inset_0_-2px_20px_0_#134BCD,inset_0_0_13px_0_rgba(0,180,204,0.5),inset_0_-10px_40px_0_rgba(0,180,204,0.25)]
        hover:shadow-[inset_0_-2px_4px_0_#134BCD,inset_0_0_4px_0_rgba(0,180,204,0.5),inset_0_-10px_40px_0_rgba(0,180,204,0.25)]
        transition-shadow
        duration-300
        ${className}
      `}
        >
            {children}
        </Button>
    );
};

export default ButtonLink;

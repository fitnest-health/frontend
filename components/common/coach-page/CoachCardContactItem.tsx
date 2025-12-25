import React from "react";
import { memo } from "react";

interface CoachCardContactItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CoachCardContactItem: React.FC<CoachCardContactItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="space-y-1">
      <div className="text-primary-700 flex items-center gap-1 text-b3 leading-b3 md:text-b2 md:leading-b2 font-medium">
        {" "}
        {icon}
        <span>{title}</span>
      </div>
      <p className="text-neutral-50 text-b3 leading-b3 font-medium">
        {description}
      </p>
    </div>
  );
};

export default memo(CoachCardContactItem);

"use client";

import { Dumbbell, Utensils } from "lucide-react";
import { useI18n } from "@/lib/i18n/provider";

const BmiTipsSection = () => {
  const { t } = useI18n();
  const tips = [
    {
      ...t.bmi.tips[0],
      icon: <Dumbbell className="size-[18px] text-[#00B4CC]" />,
    },
    {
      ...t.bmi.tips[1],
      icon: <Utensils className="size-[18px] text-[#FACC15]" />,
    },
  ];

  return (
    <div className="mt-[67px] grid grid-cols-1 gap-7 xl:grid-cols-2 xl:gap-7">
      {tips.map((tip) => (
        <div
          key={tip.title}
          className="rounded-3xl border border-[#C6A7F5] p-4 xl:h-[122px]"
        >
          <p className="flex items-center gap-3 text-lg leading-7 font-semibold text-white">
            <span className="flex size-[38px] items-center justify-center rounded-[20.5px] bg-[rgba(14,41,61,0.3)]">
              {tip.icon}
            </span>
            {tip.title}
          </p>
          <p className="mt-4 text-base leading-6 text-white">
            {tip.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BmiTipsSection;

"use client";

import { BadgeCheck, CircleAlert, HeartPulse } from "lucide-react";
import { useI18n } from "@/lib/i18n/provider";

const BmiFactsSidebar = () => {
  const { t } = useI18n();
  const infoItems = [
    { ...t.bmi.infoItems[0], icon: <BadgeCheck className="size-6 text-[#FACC15]" /> },
    { ...t.bmi.infoItems[1], icon: <CircleAlert className="size-6 text-[#F43F5E]" /> },
    { ...t.bmi.infoItems[2], icon: <HeartPulse className="size-6 text-[#22C55E]" /> },
  ];

  return (
    <aside className="rounded-4xl bg-[#111729] p-6 xl:h-[539px]">
      <h3 className="text-h6 leading-h6 font-medium text-white">
        {t.bmi.facts}
      </h3>
      <div className="mt-[31px] space-y-5">
        {infoItems.map((item) => (
          <div
            key={item.title}
            className="h-[122px] rounded-3xl border border-[#C6A7F5] px-4 py-3"
          >
            <p className="flex items-center gap-3 text-lg leading-7 font-semibold text-white">
              {item.icon}
              {item.title}
            </p>
            <p className="mt-2 text-base leading-6 text-white">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default BmiFactsSidebar;

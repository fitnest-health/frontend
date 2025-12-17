import { memo } from "react";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { COACH_CATEGORIES } from "@/config/constants";



const ButtonSection: React.FC = () => {
  return (
    <div className="flex items-center gap-4 mb-10">
      {COACH_CATEGORIES.map((item) => (
        <Button
          asChild
          className="py-3.5 px-7 text-b2 leading-b2 font-medium text-neutral-50"
          variant={"outline"}
          key={item.slug}
        >
          <Link href={`/coaches?category=${item.slug}`}>{item.name}</Link>
        </Button>
      ))}
    </div>
  );
};

export default memo(ButtonSection);

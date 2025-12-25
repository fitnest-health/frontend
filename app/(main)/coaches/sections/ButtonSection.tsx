import { memo } from "react";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { COACH_CATEGORIES } from "@/config/constants";
import { Input } from "@/components/ui/input";
import SearchIcon from '@/public/icons/search.svg'



const ButtonSection: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-10 w-full">
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
      <Input placeholder="Axtarış" className="w-60! text-white" leftIcon={SearchIcon} />
    </div>
  );
};

export default memo(ButtonSection);

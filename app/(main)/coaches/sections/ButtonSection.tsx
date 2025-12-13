import { Button } from "@/components/ui/button";
import React from "react";

const mockCoachCategories = [
  {
    name: "All",
    slug: "all",
  },
  {
    name: "Kişi məşqçi",
    slug: "man-coach",
  },
  {
    name: "Qadın məşqçisi",
    slug: "woman-coach",
  },
  {
    name: "CrossFit",
    slug: "balance-coach",
  },
  {
    name: "Fitness",
    slug: "fitness-coach",
  },
  {
    name: "Performance",
    slug: "performance-coach",
  },
  {
    name: "Yoga",
    slug: "yoga-coach",
  },
  {
    name: "Pilates",
    slug: "pilates-coach",
  },
  {
    name: "Wellness Coach",
    slug: "wellness-coach",
  },
];

const ButtonSection = () => {
  return (
    <div className="flex items-center gap-4 mb-10">
      {mockCoachCategories.map((item) => (
        <Button className="py-3.5 px-7 text-b2 leading-b2 font-medium text-neutral-50" variant={"outline"} key={item.slug}>
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default ButtonSection;

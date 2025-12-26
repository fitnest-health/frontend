"use client";
import Container from "@/components/common/Container";
import CoachDiscoverCard from "@/components/common/discover/CoachDiscoverCard";
import { useState } from "react";

const DiscoverList = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <Container>
      <div className={`grid gap-2 transition-all duration-700 ${
        hoveredIndex !== null 
          ? "grid-cols-1 sm:grid-cols-5 md:grid-cols-6" 
          : "grid-cols-1 sm:grid-cols-3 md:grid-cols-4"
      }`}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`transition-all duration-700 ${
              hoveredIndex === index 
                ? "col-span-1 sm:col-span-2" 
                : "col-span-1"
            }`}
          >
            <CoachDiscoverCard isHovered={hoveredIndex === index} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default DiscoverList;
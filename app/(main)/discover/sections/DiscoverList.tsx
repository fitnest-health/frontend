"use client";
import Container from "@/components/common/Container";
import CoachDiscoverCard from "@/components/common/discover/CoachDiscoverCard";
import { useState } from "react";

const DiscoverList = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {Array.from({ length: 12 }).map((_, index) => (
            <CoachDiscoverCard key={index} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default DiscoverList;

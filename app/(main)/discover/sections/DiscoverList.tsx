"use client";
import Container from "@/components/common/Container";
import CoachDiscoverCard from "@/components/common/discover/CoachDiscoverCard";
import { useState } from "react";

const DiscoverList = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  

  // api data goes here
  const cards = Array.from({ length: 12 });
  const rows = [];
  
  // Group cards into rows of 4
  for (let i = 0; i < cards.length; i += 4) {
    rows.push(cards.slice(i, i + 4));
  }
  
  return (
    <Container>
      <div className="flex flex-col gap-10">
        {rows.map((row, rowIndex) => {
          const rowStartIndex = rowIndex * 4;
          const hasExpandedCard = row.some((_, cardIndex) => 
            expandedIndex === rowStartIndex + cardIndex
          );
          
          return (
            <div 
              key={rowIndex}
              className={`flex flex-wrap transition-all duration-700 ${
                hasExpandedCard ? "gap-[10px]" : "gap-6"
              }`}
            >
              {row.map((_, cardIndex) => {
                const globalIndex = rowStartIndex + cardIndex;
                const isExpanded = expandedIndex === globalIndex;
                
                return (
                  <div
                    key={globalIndex}
                    className={`transition-all duration-700 ${
                      isExpanded 
                        ? "w-full sm:w-[calc(40%-7.5px)]" 
                        : hasExpandedCard
                        ? "w-full sm:w-[calc(20%-7.5px)]"
                        : "w-full sm:w-[calc(25%-18px)]"
                    }`}
                  >
                    <CoachDiscoverCard 
                      isExpanded={isExpanded}
                      onClick={() => handleCardClick(globalIndex)}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default DiscoverList;
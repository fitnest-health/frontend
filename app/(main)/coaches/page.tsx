import React from "react";
import CoachBanner from "./sections/CoachBanner";
import Container from "@/components/common/Container";
import ButtonSection from "./sections/ButtonSection";
import CoachList from "./sections/CoachList";

const Coaches: React.FC = () => {
  return (
    <div>
      <CoachBanner />
      <Container className="py-20">
        <ButtonSection />
        <CoachList />
      </Container>
    </div>
  );
};

export default Coaches;

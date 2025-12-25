import React from "react";
import CoachBannerSection from "./sections/CoachBanner";
import Container from "@/components/common/Container";
import ButtonSection from "./sections/ButtonSection";
import CoachList from "./sections/CoachList";

const Coaches: React.FC = () => {
  return (
    <div>
      <CoachBannerSection />
      <Container className="py-20">
        {/* <ButtonSection /> */}
        <CoachList />
      </Container>
    </div>
  );
};

export default Coaches;

import Image from "next/image";
import React from "react";
import CoachDetailPageHeroImage from "@/public/images/coach-about-hero.webp";
import Container from "@/components/common/Container";
import CoachAboutSection from "./sections/CoachAboutSection";
import { CoachVideoSection } from "./sections/CoachVideoSection";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const CoachDetailPage = async({ params }: PageProps) => {

  const { slug } = await params;
  return (
    <>
      <Container className="py-20 mt-5 md:mt-30">
        <Image
          src={CoachDetailPageHeroImage}
          width={1288}
          height={520}
          alt="coach-detail"
          className="object-cover w-full h-72 md:h-[520px] rounded-[20px] md:rounded-3xl"
        />
        <div>
          

          <CoachAboutSection slug={slug} />
          <CoachVideoSection />
        </div>
      </Container>
    </>
  );
};

export default CoachDetailPage;

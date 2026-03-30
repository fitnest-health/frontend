import Container from "@/components/common/Container";
import FitnessCentersHeroSection from "./sections/FitnessCentersHeroSection";
import FiltersSection from "./sections/FiltersSection";
import FitnessCentersListSection from "./sections/FitnessCentersListSection";

const FitnessCentersPage = () => {
  return (
    <div className="relative overflow-hidden bg-[#0D0F1C] mt-10 md:mt-0">
      <div className="pointer-events-none absolute left-1/2 top-[90px] h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,139,255,0.24),rgba(0,139,255,0.08)_35%,rgba(13,15,28,0)_75%)]" />

      <Container className="pb-16 pt-12 md:pb-24 md:pt-50">
        <section className="space-y-10 md:space-y-12">
          <FitnessCentersHeroSection />
          <FiltersSection />
          <FitnessCentersListSection />
        </section>
      </Container>
    </div>
  );
};

export default FitnessCentersPage;

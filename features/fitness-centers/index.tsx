import Container from "@/components/common/Container";
import FitnessCentersHeroSection from "./sections/FitnessCentersHeroSection";
import FiltersSection from "./sections/FiltersSection";
import FitnessCentersListSection from "./sections/FitnessCentersListSection";

const FitnessCentersPage = () => {
  return (
    <Container className="pb-16 pt-12 md:pb-24 md:pt-50">
      <section className="space-y-10 md:space-y-12">
        <FitnessCentersHeroSection />
        <FiltersSection />
        <FitnessCentersListSection />
      </section>
    </Container>
  );
};

export default FitnessCentersPage;

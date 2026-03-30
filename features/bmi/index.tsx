import Container from "@/components/common/Container";
import BmiCalculatorSection from "./sections/BmiCalculatorSection";
import BmiHeroSection from "./sections/BmiHeroSection";
import BmiTipsSection from "./sections/BmiTipsSection";

const BmiPage = () => {
  return (
    <div className="relative overflow-hidden bg-[#0D0F1C] mt-10 md:mt-0">
      <div className="pointer-events-none absolute left-1/2 top-[90px] h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,139,255,0.24),rgba(0,139,255,0.08)_35%,rgba(13,15,28,0)_75%)]" />

      <Container className="pb-16 pt-12 md:pb-24 md:pt-[200px]">
        <section className="mx-auto w-full max-w-7xl">
          <BmiHeroSection />
          <BmiCalculatorSection />
          <BmiTipsSection />
        </section>
      </Container>
    </div>
  );
};

export default BmiPage;

import Container from "@/components/common/Container";
import { OffersHero } from "@/components/common/offer-page/OffersHero";
import  OffersPricingSection  from "@/components/common/offer-page/OffersPricingSection";

const OffersPage = () => {
  return (
    <Container className="pt-10 md:pt-50 space-y-10 md:space-y-20">
      <OffersHero />
      <OffersPricingSection />
    </Container>
  );
};

export default OffersPage;

import { OffersHero } from "@/components/common/offer-page/OffersHero";
import { OffersPricingSection } from "@/components/common/offer-page/OffersPricingSection";

const OffersPage = () => {
  return (
    <main className="relative min-h-screen bg-[#0D0F1C] text-neutral-50">
      <OffersHero />
      <OffersPricingSection />
    </main>
  );
};

export default OffersPage;

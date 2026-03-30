import Container from "@/components/common/Container";
import { OffersHero } from "@/features/offers/components/OffersHero";
import OffersPricingSection from "@/features/offers/components/OffersPricingSection";

type OffersPageProps = {
    searchParams: Promise<{
        type?: string | string[];
        month?: string | string[];
    }>;
};

const OffersPage = async ({ searchParams }: OffersPageProps) => {
    const search = await searchParams;
    const selectedType = Array.isArray(search.type) ? search.type[0] : search.type;
    const selectedMonth = Array.isArray(search.month)
        ? search.month[0]
        : search.month;

    return (
        <div className="relative overflow-hidden bg-[#0D0F1C] mt-5 md:mt-0">
            <div className="pointer-events-none absolute left-1/2 top-[90px] h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,139,255,0.24),rgba(0,139,255,0.08)_35%,rgba(13,15,28,0)_75%)]" />

            <Container className="pt-10 md:pt-50 space-y-10 md:space-y-20">
                <OffersHero />
                <OffersPricingSection
                    selectedType={selectedType}
                    selectedMonth={selectedMonth}
                />
            </Container>
        </div>
    );
};

export default OffersPage;

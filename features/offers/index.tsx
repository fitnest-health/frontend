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
        <Container className="pt-10 md:pt-50 space-y-10 md:space-y-20">
            <OffersHero />
            <OffersPricingSection
                selectedType={selectedType}
                selectedMonth={selectedMonth}
            />
        </Container>
    );
};

export default OffersPage;

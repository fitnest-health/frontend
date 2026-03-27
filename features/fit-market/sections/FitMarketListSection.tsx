import Container from "@/components/common/Container";
import FitMarketCard from "../components/FitMarketCard";
import type { Store } from "../api/types";

interface FitMarketListSectionProps {
  stores: Store[];
}

const FitMarketListSection = ({ stores }: FitMarketListSectionProps) => {
  return (
    <Container className="mt-8 space-y-5 md:mt-12 md:space-y-8">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {stores.map((store) => (
          <FitMarketCard key={store.storeId} store={store} />
        ))}
      </div>
    </Container>
  );
};

export default FitMarketListSection;

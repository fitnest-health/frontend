import type { Store } from "./api/types";
import FitMarketHeroSection from "./sections/FitMarketHeroSection";
import FitMarketListSection from "./sections/FitMarketListSection";

interface FitMarketPageProps {
  stores: Store[];
}

const FitMarketPage = ({ stores }: FitMarketPageProps) => {
  return (
    <div className="pb-12 md:pb-20">
      <FitMarketHeroSection />
      <FitMarketListSection stores={stores} />
    </div>
  );
};

export default FitMarketPage;

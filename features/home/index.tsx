import type { SubscriptionPackage } from "@/features/offers/api/types";
import HeroSection from "./sections/HeroSection";
import HowItWorks from "./sections/HowItWorks";
import MobileAppSection from "./sections/MobileAppSection";
import SubscriptionSection from "./sections/SubscriptionSection";

interface HomePageProps {
  packages: SubscriptionPackage[];
}

export default function HomePage({ packages }: HomePageProps) {
  return (
    <div className="text-gray-50">
      <HeroSection />
      {/* <DownloadAppSection /> */}
      <HowItWorks />
      <SubscriptionSection packages={packages} />
      <MobileAppSection />
      {/* <BalancedLifeSection /> */}
    </div>
  );
}

'use client'
import BalancedLifeSection from "../sections/BalancedLifeSection ";
import DownloadAppSection from "../sections/DownloadAppSection ";
import HeroSection from "../sections/HeroSection";
import HowItWorks from "../sections/HowItWorks";
import MobileAppSection from "../sections/MobileAppSection";
import OffersSection from "../sections/OffersSection";
import SubscriptionSection from "../sections/SubscriptionSection";

export default function Home() {
  return (
    <div className="text-gray-50">
      <HeroSection />
      {/* <DownloadAppSection /> */}
      <HowItWorks />
      <SubscriptionSection />
      <MobileAppSection />
      {/* <BalancedLifeSection /> */}
      {/* <OffersSection /> */}
    </div>
  );
}

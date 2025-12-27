'use client'
import BalancedLifeSection from "../sections/BalancedLifeSection ";
import DownloadAppSection from "../sections/DownloadAppSection ";
import HeroSection from "../sections/HeroSection";
import OffersSection from "../sections/OffersSection";

export default function Home() {
  return (
    <div className="text-gray-50">
      <HeroSection />
      <DownloadAppSection />
      <BalancedLifeSection />
      <OffersSection />
    </div>
  );
}

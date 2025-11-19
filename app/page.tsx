import BalancedLifeSection from "./sections/BalancedLifeSection ";
import DownloadAppSection from "./sections/DownloadAppSection ";
import HeroSection from "./sections/HeroSection";
import OffersSection from "./sections/OffersSection";

export default function Home() {
  return (
    <div className="text-white mx-auto w-fit">
      <HeroSection />
      <DownloadAppSection />
      <BalancedLifeSection />
      <OffersSection />
    </div>
  );
}

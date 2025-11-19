import BalancedLifeSection from "@/components/home/BalancedLifeSection ";
import DownloadAppSection from "@/components/home/DownloadAppSection ";
import HeroSection from "@/components/home/HeroSection";
import OffersSection from "@/components/home/OffersSection";

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

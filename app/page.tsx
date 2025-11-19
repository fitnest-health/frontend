import BalancedLifeSection from "./sections/BalancedLifeSection ";
import DownloadAppSection from "./sections/DownloadAppSection ";
import HeroSection from "./sections/HeroSection";
import OffersSection from "./sections/OffersSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="text-white mx-auto w-fit">
      <HeroSection />
      <DownloadAppSection />
      <BalancedLifeSection />
      <OffersSection />

      <div className="testing flex gap-4">
        <Button className="text-h4-size" variant={"default"} size={"sm"}>
          Button
        </Button>
        <Button disabled  variant={"default"} size={"default"}>
          Button
        </Button>
        <Button variant={"default"} size={"lg"}>
          Button
        </Button>
        <Button variant={"outline"} size={"sm"}>
          Button
        </Button>
        <Button variant={"outline"} size={"default"}>
          Button
        </Button>
        <Button variant={"outline"} size={"lg"}>
          Button
        </Button>

        <Button variant={"ghost"} size={"sm"}>
          Button
        </Button>
        <Button variant={"ghost"} size={"default"}>
          Button
        </Button>
        <Button variant={"ghost"} size={"lg"}>
          Button
        </Button>

        <Button variant={"link"}>Button</Button>
      </div>
    </div>
  );
}

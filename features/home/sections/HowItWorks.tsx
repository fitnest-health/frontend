"use client"
import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import firstImg from "@/public/images/qr.webp";
import secImg from "@/public/images/abunelik.webp";
import thirdImg from "@/public/images/main-page.webp";
import fourthImg from '@/public/images/splash.png'
import phoneWindow from "@/public/images/phone-window.webp";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useI18n } from "@/lib/i18n/provider";

const HowItWorks = () => {
  const { t } = useI18n();
  const mockData = [
    { ...t.home.howItems[0], image: firstImg, alt: "qr code" },
    { ...t.home.howItems[1], image: secImg, alt: "qr code" },
    { ...t.home.howItems[2], image: fourthImg, alt: "qr code" },
    { ...t.home.howItems[3], image: thirdImg, alt: "qr code" },
  ];

  return (
    <Container className="py-7 md:py-15">
      <Heading title={t.home.howTitle} number={1} />

      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {mockData.map((item, index) => (
            <CarouselItem key={index}>
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="space-y-7 md:max-w-1/2">
                  <h2 className="font-bold text-white text-h6 leading-h6">
                    {item.title}
                  </h2>
                  <p className="font-semibold text-t1 leading-t1">
                    {item.desc}
                  </p>
                </div>

                <div className="relative">
                  {/* Phone frame */}
                  <Image
                    src={phoneWindow}
                    alt="phone window"
                    className="aspect-9/16 h-[450px] md:h-[900px] w-auto relative z-10"
                  />

                  {/* Screen area */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden aspect-9/16 h-[430px] md:h-[850px] z-0 rounded-[55px]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full "
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
};

export default HowItWorks;

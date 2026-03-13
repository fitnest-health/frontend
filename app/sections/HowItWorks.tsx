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

const mockData = [
  {
    title: "QR kodu oxudun və məşqə başlayın.",
    desc: "Zallarımızda yerləşdirilmiş xüsusi QR kodları Fitnest mobil tətbiqində oxudaraq gedişinizi təsdiqləyin və budur,artıq məşqə başalaya bilərsiz.",
    image: firstImg,
    alt: "qr code",
  },
  {
    title: "Fitnest necə işləyir?",
    desc: "Fitnest tətbiq ilə fitness məqsədinizə başlamaq asandır. Üzvlüyünüzü aktivləşdirdikdən sonra dərhal məşqə başlaya bilərsiniz.",
    image: secImg,
    alt: "qr code",
  },

  {
    title: "Sizə ən rahat qeydiyyat üsulunu seçin.",
    desc: "Fitnest tətbiqini yükləyin və hədəfinizə doğru ilk addımı atın.",
    image: fourthImg,
    alt: "qr code",
  },
  {
    title:
      "Məşq etmək və sağlamlığınızı qorumaq üçün istədiyiniz zalı və mərkəzi tapın",
    desc: "Bütün zallarımızda məşq edə edə bilərsiniz. Sizi maraqlandıran zalları görmək üçün tətbiqdəki filtrdən istifadə edin.",
    image: thirdImg,
    alt: "qr code",
  },
];

const HowItWorks = () => {
  return (
    <Container className="py-7 md:py-15">
      <Heading
        title=" <span class='text-primary-700'>FitNest</span>  Necə İşləyir?"
        number={1}
      />

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
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
                <div className="space-y-4 md:space-y-7 md:max-w-1/2 text-center md:text-left">
                  <h2 className="font-bold text-white text-s1 leading-s1 md:text-h6 md:leading-h6">
                    {item.title}
                  </h2>
                  <p className="font-semibold text-b1 leading-b1 md:text-t1 md:leading-t1">
                    {item.desc}
                  </p>
                </div>

                <div className="relative flex-shrink-0">
                  {/* Phone frame */}
                  <Image
                    src={phoneWindow}
                    alt="phone window"
                    className="aspect-9/16 h-[320px] sm:h-[400px] md:h-[600px] w-auto relative z-10"
                  />

                  {/* Screen area */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden aspect-9/16 h-[305px] sm:h-[380px] md:h-[570px] z-0 rounded-[35px] md:rounded-[45px]">
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

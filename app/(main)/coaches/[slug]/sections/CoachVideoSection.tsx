import CarouselPlaceholderImage from "@/public/images/carousel-placeholder.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export function CoachVideoSection() {
  return (
    <div className="py-5 space-y-16">
      <h2 className="text-primary-700 text-h3 leading-h3 font-semibold">
        Videolar
      </h2>
      <Carousel className="w-full ">
        <CarouselContent className="-ml-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-6 w-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-5 space-y-3 bg-softblue-950 rounded-4xl text-neutral-50">
                <Image
                  src={CarouselPlaceholderImage}
                  width={371}
                  height={294}
                  alt="video-placeholder"
                  className="object-cover w-full h-[290px] rounded-3xl"
                />
                <div className=" ">
                  <h3 className="text-h6 leading-h6 font-medium">
                    Çiyin Əzələsi
                  </h3>
                  <p className="text-b1 leading-b1 font-medium">
                    Bu məşqlər çiyinlərin ön, yan və arxa hissəsini gücləndirir.
                    Deltoid əzələlərini tonlaşdır və çiyinlərini formalaşdır!
                  </p>
                  <div className="flex gap-2 items-center">
                    <Link
                      href="#"
                      className="text-primary-700 text-b1 leading-b1"
                    >
                      Ətraflı
                    </Link>
                    <Image
                      src="/icons/arrow-narrow-up-right-blue.svg"
                      alt="arrow-right"
                      width={16}
                      height={16}
                      className="w-4 h-4 text-primary-700"
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
    </div>
  );
}

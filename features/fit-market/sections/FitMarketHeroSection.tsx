import Container from "@/components/common/Container";
import Image from "next/image";
import { getMessages } from "@/lib/i18n/server";

const FitMarketHeroSection = async () => {
  const { messages } = await getMessages();

  return (
    <section className="relative h-[520px] md:h-[680px]">
      <Image
        src="/images/wellness.png"
        alt="fit market hero"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(33,50,52,0.26)] to-black" />
      <Container className="relative z-10 h-full">
        <div className="absolute bottom-12 max-w-3xl space-y-4 md:bottom-16 md:space-y-5">
          <h1 className="text-3xl font-bold leading-tight text-white md:text-h3 md:leading-h3">
            {messages.fitMarket.heroTitle}
          </h1>
          <p className="max-w-[848px] text-sm font-normal leading-6 text-[#FAFAFA] md:text-2xl md:leading-9">
            {messages.fitMarket.heroDescription}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default FitMarketHeroSection;

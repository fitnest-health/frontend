import Container from "@/components/common/Container";
import { getMessages } from "@/lib/i18n/server";
// import ButtonLink from "@/components/ui/button-link";

const HeroSection = async () => {
  const { messages } = await getMessages();

  return (
    <section className="relative flex lg:items-center pt-[153px] sm:items-center text-gray-50 w-full aspect-video overflow-hidden">
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="lg:hidden aspect-video absolute inset-0 w-full h-full object-cover brightness-50"
      >
        <source src="/videos/HeroSectionVideo.mp4" type="video/mp4" />
      </video> */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" aspect-video lg:block absolute inset-0 w-full h-full object-cover brightness-80"
      >
        <source src="/videos/FitNest.mp4" type="video/mp4" />
      </video>
      {/* <div className="absolute top-0 left-0 w-full h-full bg-[#00000033]"></div> */}

      <Container className="mb-5 xs:mb-0 z-10">
        <div className="sm:bg-transparent sm:block flex flex-col items-center lg:w-1/2 w-full sm:mt-0 mt-[179px] lg:pr-0 sm:pr-[84px]  sm:pt-0 pt-4">
          <h1 className="sm:mb-8 mb-4 font-semibold lg:text-h5 lg:leading-h5 sm:text-h6 sm:leading-h6 text-s2 leading-s2">
            {messages.home.heroTitle} —{" "}
            <span className="text-primary-700">FitNest</span>
          </h1>

          <p className="lg:mb-16 sm:mb-9 mb-[30px] lg:text-t2 lg:leading-t2 sm:text-s2 sm:leading-s2 text-b3 leading-b3">
            {messages.home.heroDescription}
          </p>

          {/* <ButtonLink>İndi başla</ButtonLink> */}
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;

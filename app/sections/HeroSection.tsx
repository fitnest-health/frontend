import Container from "@/components/common/Container";
// import ButtonLink from "@/components/ui/button-link";

const HeroSection = () => {
  return (
    <section className="relative flex lg:items-center pt-[80px] sm:items-center text-gray-50 w-full min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="lg:hidden aspect-video absolute inset-0 w-full h-full object-cover brightness-90"
      >
        <source src="/videos/HeroSectionVideo.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden aspect-video lg:block absolute inset-0 w-full h-full object-cover brightness-90"
      >
        <source src="/videos/ScreenRecording.mp4" type="video/mp4" />
      </video>
      {/* <div className="absolute top-0 left-0 w-full h-full bg-[#00000033]"></div> */}

      <Container className="mb-5 xs:mb-0 z-10">
        <div className="sm:bg-transparent sm:block flex flex-col items-center lg:w-1/2 w-full sm:mt-0 mt-[179px] lg:pr-0 sm:pr-[84px]  sm:pt-0 pt-4">
          <h1 className="sm:mb-8 mb-4 font-semibold lg:text-h5 lg:leading-h5 sm:text-h6 sm:leading-h6 text-s2 leading-s2">
            Sağlamlığa gedən yol —{" "}
            <span className="text-primary-700">FitNest</span>
          </h1>

          <p className="lg:mb-16 sm:mb-9 mb-[30px] lg:text-t2 lg:leading-t2 sm:text-s2 sm:leading-s2 text-b3 leading-b3">
            FitNest istifadəçilərə yaxınlıqdakı fitness mərkəzlərini tapmaq,
            uyğun abunə seçmək və QR sistemi ilə məşqə başlamaq imkanı yaradır.
          </p>

          {/* <ButtonLink>İndi başla</ButtonLink> */}
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;

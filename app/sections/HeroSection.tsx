import Container from "@/components/common/Container";
import ButtonLink from "@/components/ui/button-link";

const HeroSection = () => {
  return (
    <section className="relative flex lg:items-center pt-[153px] sm:items-center text-gray-50 w-screen left-0 lg:h-screen md:h-[474px] sm:h-[528px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="lg:hidden absolute inset-0 w-screen h-full object-cover brightness-90"
      >
        <source src="/videos/HeroSectionVideo.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden lg:block absolute inset-0 w-screen h-full object-cover brightness-90"
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
            Sağlam və balanslı yaşamaq artıq daha asandır. Fərdi məşq planları,
            düzgün qidalanma və yaxın fitness mərkəzləri — hamısı FitNest-də,
            sənin gündəlik motivasiyan üçün bir aradadır.
          </p>

          <ButtonLink>İndi başla</ButtonLink>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;

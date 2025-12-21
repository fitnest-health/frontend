import Container from "@/components/common/Container";
import ButtonLink from "@/components/ui/button-link";

const HeroSection = () => {
  return (
    <Container className="mb-5 xs:mb-0">
      <section className="flex lg:items-center pt-[153px] sm:items-center  max-w-screen lg:m-auto text-gray-50 lg:h-[calc(100vh-152px)] md:h-[474px] sm:h-[528px]">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="lg:hidden absolute lg:h-screen sm:h-[587px] h-[239px] w-screen top-0 left-0 object-cover brightness-90"
        >
          <source src="/videos/HeroSectionVideo.mp4" type="video/mp4" />
        </video>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden lg:block absolute w-screen lg:h-screen sm:h-[587px] h-[239px] top-0 left-0 object-cover brightness-90"
        >
          <source src="/videos/ScreenRecording.mp4" type="video/mp4" />
        </video>
        {/* <div className="absolute top-0 left-0 w-full h-full bg-[#00000033]"></div> */}

        <div className="sm:bg-transparent z-10 sm:block flex flex-col items-center lg:w-1/2 w-full sm:mt-0 mt-[179px] lg:pr-0 sm:pr-[84px]  sm:pt-0 pt-4">
          <h1 className="sm:mb-8 mb-4 font-semibold lg:text-h5 lg:leading-h5 sm:text-h6 sm:leading-h6 text-s2 leading-s2">
            Sağlamlığa gedən yol — <span className="text-primary-700">FitNest</span>
          </h1>

          <p className="lg:mb-16 sm:mb-9 mb-[30px] lg:text-t2 lg:leading-t2 sm:text-s2 sm:leading-s2 text-b3 leading-b3">
            Sağlam və balanslı yaşamaq artıq daha asandır. Fərdi məşq planları,
            düzgün qidalanma və yaxın fitness mərkəzləri — hamısı FitNest-də,
            sənin gündəlik motivasiyan üçün bir aradadır.
          </p>

          <ButtonLink>İndi başla</ButtonLink>

        </div>

      </section>
    </Container>

  )
}

export default HeroSection
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <Container className="mb-5 xs:mb-0">
      <section className="flex lg:items-center sm:items-center  max-w-screen lg:m-auto text-gray-50 lg:h-[calc(100vh-152px)] md:h-[474px] sm:h-[528px]">

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

          <Button
            className="w-full sm:max-w-[175px] md:max-w-[301px] h-10 md:h-[60px]  bg-linear-to-b
                    from-[#0B0909]
                    to-[#091120]
                    shadow-[inset_0_-2px_20px_0_#134BCD,inset_0_0_13px_0_rgba(0,180,204,0.5),inset_0_-10px_40px_0_rgba(0,180,204,0.25)]
                    hover:shadow-[inset_0_-2px_4px_0_#134BCD,inset_0_0_4px_0_rgba(0,180,204,0.5),inset_0_-10px_40px_0_rgba(0,180,204,0.25)]
                    transition-shadow
                    duration-300
                   ">
            İndi Başla
          </Button>

          {/* <button className="z-40 w-full mb-4 sm:w-auto sm:px-[60px]  py-4 lg:text-s1 lg:leading-s1 sm:text-b1 sm:leading-b1 text-b2 leading-b2 font-semibold gradient-border rounded-[52px] text-white 
          bg-[linear-gradient(180deg,#0B0909_0%,#091120_100%)] transitoin-shadow duration-300"
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow =
                "inset 0 -10px 40px rgba(0, 180, 204, 0.25), inset 0 0 13px rgba(0, 180, 204, 0.5), inset 0 -2px 20px #134BCD";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >          İndi Başla
          </button> */}
        </div>

      </section>
    </Container>

  )
}

export default HeroSection
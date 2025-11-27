
const HeroSection = () => {
  return (
    <section className="flex lg:max-w-7xl ">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="lg:hidden absolute lg:h-screen sm:h-[587px] h-[239px] w-screen top-0 left-0 object-cover"
      >
        <source src="/videos/HeroSectionVideo.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden lg:block absolute w-screen lg:h-screen sm:h-[587px] h-[239px] top-0 left-0 object-cover"
      >
        <source src="/videos/ScreenRecording.mp4" type="video/mp4" />
      </video>

      <div className="z-10 sm:bg-transparent bg-softblue-1000 sm:block flex flex-col items-center lg:w-1/2 lg:mt-[228px] sm:mt-56 mt-[239px] lg:pr-0 sm:pr-[84px]">
        <h1 className="sm:mb-8 mb-4 font-semibold lg:text-h5 lg:leading-h5 sm:text-h6 sm:leading-h6 text-s1 leading-s1">
          Sağlamlığa gedən yol — <span className="text-primary-700">FitNest</span>
        </h1>

        <p className="lg:mb-16 sm:mb-9 mb-[30px] lg:text-t2 lg:leading-t2 sm:text-s2 sm:leading-s2 text-b3 leading-b3">
          Sağlam və balanslı yaşamaq artıq daha asandır. Fərdi məşq planları,
          düzgün qidalanma və yaxın fitness mərkəzləri — hamısı FitNest-də,
          sənin gündəlik motivasiyan üçün bir aradadır.
        </p>

        <button className="z-40 w-full sm:w-auto px-[60px] py-4 lg:text-s1 lg:leading-s1 sm:text-b1 sm:leading-b1 text-b2 leading-b2 font-semibold gradient-border rounded-[52px] text-white bg-linerar-to-b from-[#0B0909] to-[#091120]">
          İndi Başla
        </button>
      </div>

    </section>
  )
}

export default HeroSection
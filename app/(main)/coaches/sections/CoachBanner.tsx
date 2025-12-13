
import Image from "next/image";
import BannerImg from "@/public/images/coach-banner.jpg";
import ButtonLink from "@/components/ui/button-link";

const CoachBanner = () => {
  return (
    <>
      <div className="relative h-[670px]">
        <Image
          src={BannerImg}
          alt="Coaches"
          fill
          className="object-cover object-top brightness-75"
          priority
        />

        <div className="relative z-10 flex flex-col md:flex-row justify-end  md:justify-between gap-5 md:items-end h-full text-white py-[50px] w-[90%] md:w-5/6 mx-auto">
          <div>
            <h1 className=" font-bold mb-4 text-t2 leading-t2 md:text-h5 md:leading-h5">
             <span className="text-primary-700 ">FitNest</span>  məşqçiləri ilə güclən və balans tap
            </h1>
            <p className="max-w-4xl text-s2 leading-s2 md:text-t2 md:leading-t2">
              Komandamız sənin üçün fərdi proqramlar qurur, məşqçilərin
              tövsiyələri isə motivasiyanı, rahatlığını və nəticələrini
              gücləndirir.
            </p>
          </div>

          <ButtonLink className="w-2/4 md:w-full">Kəşf et!</ButtonLink>
        </div>
      </div>
    </>
  );
};

export default CoachBanner;

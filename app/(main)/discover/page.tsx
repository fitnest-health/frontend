import HeroBanner from "@/components/common/HeroBanner";
import DiscoverList from "./sections/DiscoverList";
import BannerImg from "@/public/images/coach-banner.jpg";

const DiscoverPage = () => {
  return (
    <>
      <HeroBanner
        subTitle={<h1 className=" font-bold mb-4 text-t2 leading-t2 md:text-h5 md:leading-h5">
          <span className="text-primary-700 ">FitNest</span> məşqçiləri ilə
          güclən və balans tap
        </h1>}
        title="Komandamız sənin üçün fərdi proqramlar qurur, məşqçilərin
              tövsiyələri isə motivasiyanı, rahatlığını və nəticələrini
              gücləndirir."
        buttonHref="/discover"
        buttonText="Kəşf et!"
        withButton={false}
        imageUrl={BannerImg}
      />
      <div className="mt-40">
        <DiscoverList />
      </div>
    </>
  );
};

export default DiscoverPage;

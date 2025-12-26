import CoachBanner from "../coaches/sections/CoachBanner";
import DiscoverList from "./sections/DiscoverList";

const DiscoverPage = () => {
  return (
    <>
      <CoachBanner withButton={false} />
      <div className="mt-40">
        <DiscoverList />
      </div>
    </>
  );
};

export default DiscoverPage;

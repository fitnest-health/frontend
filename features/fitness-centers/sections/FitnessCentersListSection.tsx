import FitnessCenterCard from "../components/FitnessCenterCard";
import { fitnessCenters } from "../lib/fitness-centers-data";

const FitnessCentersListSection = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {fitnessCenters.map((center) => (
        <FitnessCenterCard
          key={center.id}
          name={center.name}
          location={center.location}
          phone={center.phone}
          workHours={center.workHours}
          image={center.image}
          category={center.category}
          membership={center.membership}
          href={center.href}
        />
      ))}
    </div>
  );
};

export default FitnessCentersListSection;

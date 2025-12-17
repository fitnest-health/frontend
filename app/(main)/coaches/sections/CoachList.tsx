import CoachCard from "@/components/common/coach-page/CoachCard";
import { COACH_LIST } from "@/config/constants";
import { memo } from "react";

const CoachList = () => {
  return (
    <div className="bg-softblue-950 rounded-4xl grid grid-cols-2 md:grid-cols-3 gap-6 p-5">
      {COACH_LIST.map((coach) => (
        <CoachCard
          key={coach.slug}
          imageSrc={coach.imageSrc}
          slug={coach.slug}
          name={coach.name}
          jobTitle={coach.jobTitle}
        />
      ))}
    </div>
  );
};

export default memo(CoachList);

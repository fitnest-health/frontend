import CoachCard from "@/components/common/coach-page/CoachCard";
import React from "react";
import placeholderCoach from "@/public/images/woman-coach-placeholder.webp";

const mockCoachList = [
  {
    imageSrc: placeholderCoach,
    slug: "mia-brown",
    name: "Mia Brown",
    jobTitle: "Gym Coach",
  },
  {
    imageSrc: placeholderCoach,
    slug: "john-smith",
    name: "John Smith",
    jobTitle: "Fitness Trainer",
  },
  {
    imageSrc: placeholderCoach,
    slug: "emma-johnson",
    name: "Emma Johnson",
    jobTitle: "Yoga Instructor",
  },
  {
    imageSrc: placeholderCoach,
    slug: "liam-wilson",
    name: "Liam Wilson",
    jobTitle: "Personal Trainer",
  },
  {
    imageSrc: placeholderCoach,
    slug: "olivia-martin",
    name: "Olivia Martin",
    jobTitle: "Pilates Coach",
  },
  {
    imageSrc: placeholderCoach,
    slug: "noah-anderson",
    name: "Noah Anderson",
    jobTitle: "Strength Coach",
  },
  {
    imageSrc: placeholderCoach,
    slug: "ava-thomas",
    name: "Ava Thomas",
    jobTitle: "Cardio Trainer",
  },
  {
    imageSrc: placeholderCoach,
    slug: "ethan-moore",
    name: "Ethan Moore",
    jobTitle: "CrossFit Coach",
  },
  {
    imageSrc: placeholderCoach,
    slug: "sophia-taylor",
    name: "Sophia Taylor",
    jobTitle: "Wellness Coach",
  },
  {
    imageSrc: placeholderCoach,
    slug: "james-lee",
    name: "James Lee",
    jobTitle: "Bodybuilding Coach",
  },
  {
    imageSrc: placeholderCoach,
    slug: "isabella-harris",
    name: "Isabella Harris",
    jobTitle: "Dance Fitness Coach",
  },
  {
    imageSrc: placeholderCoach,
    slug: "lucas-clark",
    name: "Lucas Clark",
    jobTitle: "HIIT Trainer",
  },
];


const CoachList = () => {
  return (
    <div className="bg-softblue-950 rounded-4xl grid grid-cols-2 md:grid-cols-3 gap-6 p-5">
      {mockCoachList.map((coach) => (
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

export default CoachList;

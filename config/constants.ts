import placeholderCoach from "@/public/images/woman-coach-placeholder.webp";

export const COACH_LIST = [
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
] as const;

export const COACH_CATEGORIES = [
  { name: "All", slug: "all" },
  { name: "Kişi məşqçi", slug: "man-coach" },
  { name: "Qadın məşqçisi", slug: "woman-coach" },
  { name: "CrossFit", slug: "balance-coach" },
  { name: "Fitness", slug: "fitness-coach" },
  { name: "Performance", slug: "performance-coach" },
  { name: "Yoga", slug: "yoga-coach" },
  { name: "Pilates", slug: "pilates-coach" },
  { name: "Wellness Coach", slug: "wellness-coach" },
] as const;

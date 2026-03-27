export type Membership = "bronze" | "silver" | "gold" | "platinum";

export type FitnessCenterItem = {
  id: string;
  name: string;
  location: string;
  phone: string;
  workHours: string;
  image: string;
  category: string;
  membership: Membership;
  href: string;
};

export const fitnessCenters: FitnessCenterItem[] = [
  {
    id: "fitnest-gateway",
    name: "FitNest Gateway Club",
    location: "Nəsimi r., Bakı",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/mesqZaliSecHeroImg.jpg",
    category: "Cardio & Ağırlıq",
    membership: "platinum",
    href: "/fitness-centers/power-gym",
  },
  {
    id: "pulse-lounge",
    name: "Power Gym",
    location: "Bakı, Nizami 123",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/GymBanner.jpg",
    category: "Cardio & Ağırlıq",
    membership: "bronze",
    href: "/fitness-centers/power-gym",
  },
  {
    id: "omega-performance",
    name: "Power Gym",
    location: "Bakı, Nizami 123",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/coaches.jpg",
    category: "Cardio & Ağırlıq",
    membership: "silver",
    href: "/fitness-centers/power-gym",
  },
  {
    id: "urban-motion",
    name: "Power Gym",
    location: "Bakı, Nizami 123",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/main-page.webp",
    category: "Cardio & Ağırlıq",
    membership: "gold",
    href: "/fitness-centers/power-gym",
  },
  {
    id: "nova-athletics",
    name: "Power Gym",
    location: "Bakı, Nizami 123",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/startChanging.jpg",
    category: "Cardio & Ağırlıq",
    membership: "platinum",
    href: "/fitness-centers/power-gym",
  },
  {
    id: "balance-zone",
    name: "Power Gym",
    location: "Bakı, Nizami 123",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/wellness.png",
    category: "Cardio & Ağırlıq",
    membership: "bronze",
    href: "/fitness-centers/power-gym",
  },
  {
    id: "power-7",
    name: "Power Gym",
    location: "Bakı, Nizami 123",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/image1.png",
    category: "Cardio & Ağırlıq",
    membership: "platinum",
    href: "/fitness-centers/power-gym",
  },
  {
    id: "power-8",
    name: "Power Gym",
    location: "Bakı, Nizami 123",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/image2.png",
    category: "Cardio & Ağırlıq",
    membership: "gold",
    href: "/fitness-centers/power-gym",
  },
  {
    id: "power-9",
    name: "Power Gym",
    location: "Bakı, Nizami 123",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/image3.png",
    category: "Cardio & Ağırlıq",
    membership: "platinum",
    href: "/fitness-centers/power-gym",
  },
  {
    id: "power-10",
    name: "Power Gym",
    location: "Bakı, Nizami 123",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/abunelik.webp",
    category: "Cardio & Ağırlıq",
    membership: "platinum",
    href: "/fitness-centers/power-gym",
  },
  {
    id: "power-11",
    name: "Power Gym",
    location: "Bakı, Nizami 123",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/second.png",
    category: "Cardio & Ağırlıq",
    membership: "silver",
    href: "/fitness-centers/power-gym",
  },
  {
    id: "power-12",
    name: "Power Gym",
    location: "Bakı, Nizami 123",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/third.png",
    category: "Cardio & Ağırlıq",
    membership: "platinum",
    href: "/fitness-centers/power-gym",
  },
];

export const gallery = [
  "/images/mesqZaliSecHeroImg.jpg",
  "/images/hallCaruselImg1.jpg",
  "/images/GymBanner.jpg",
  "/images/abunelik.webp",
  "/images/third.png",
];

export const coaches = new Array(4).fill(null).map((_, index) => ({
  id: `coach-${index + 1}`,
  name: "Elnur Məmmədov",
  role: "Personal trener",
}));

export const socialIcons = [
  "/icons/facebook-black.svg",
  "/icons/instagram-black.svg",
  "/icons/linkedin-black.svg",
];

import Container from "@/components/common/Container";
import React from "react";
import FiltersSection from "./sections/FiltersSection";
import FitnessCenterCard from "./components/FitnessCenterCard";
import type { FitnessCenterCardProps } from "./components/FitnessCenterCard";

type FitnessCenterListItem = FitnessCenterCardProps & { id: string };

const fitnessCenters: FitnessCenterListItem[] = [
  {
    id: "fitnest-gateway",
    name: "FitNest Gateway Club",
    location: "Nəsimi r., Bakı",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/mesqZaliSecHeroImg.jpg",
    category: "Cardio & Ağırlıq",
    membership: "platinum",
    href: "/offers",
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
    href: "/offers",
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
    href: "/offers",
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
    href: "/offers",
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
    href: "/offers",
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
    href: "/offers",
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
    href: "/offers",
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
    href: "/offers",
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
    href: "/offers",
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
    href: "/offers",
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
    href: "/offers",
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
    href: "/offers",
  },
];

const FitnessCenters = () => {
  return (
    <Container className="pb-16 pt-12 md:pb-24 md:pt-50">
      <section className="space-y-10 md:space-y-12">
        <div className="space-y-4 md:space-y-6">
          <h1 className="mx-auto max-w-3xl text-balance text-center text-h6 font-bold leading-tight text-white sm:text-h3">
            Özünə Uyğun Məşq Məkani Seç
          </h1>
          <p className="mx-auto max-w-3xl text-center text-base text-neutral-50 md:text-xl">
            İdman üçün rahat, motivasiya verən zalları bir yerdə topladıq.
          </p>
        </div>

        <FiltersSection />

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
      </section>
    </Container>
  );
};

export default FitnessCenters;

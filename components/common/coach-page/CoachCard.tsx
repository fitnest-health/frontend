import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import placeholderCoach from "@/public/images/woman-coach-placeholder.webp";
import placeholderLogo from "@/public/images/apple-logo.webp";
import { Phone, Mail, Clock, LocationEdit } from "lucide-react";
import CoachCardContactItem from "./CoachCardContactItem";
import Link from "next/link";

interface CoachCardProps {
  imageSrc?: StaticImageData;
  slug?: string;
  name?: string;
  jobTitle?: string;
}

const CoachCard: React.FC<CoachCardProps> = ({
  imageSrc = placeholderCoach,
  slug = "mia-brown",
  name = "Mia Brown",
  jobTitle = "Gym Coach",
}) => {
  return (
    <Link href={`/coaches/${slug}`}>
      <div className="relative group rounded-2xl border border-neutral-800 bg-softblue-1000 overflow-hidden">
        {/* MAIN CARD */}
        <Image
          width={1280}
          height={720}
          className="w-full  h-[210px] md:h-[480px] object-cover rounded-2xl rounded-b-none"
          src={imageSrc}
          alt="coach"
        />

        <div className="px-5 py-3.5 rounded-t-2xl absolute bottom-0 left-0 right-0 bg-softblue-950 h-20 md:h-auto">
          <h2 className="text-neutral-50 text-b1 leading-b1 md:text-h6 md:leading-h6">
            {" "}
            {name || "Mia Brown"}
          </h2>
          <p className="text-primary-700 text-b3 leading-b3 md:text-b1 md:leading-b1 font-medium">
            {jobTitle}
          </p>
        </div>

        {/* HOVER CARD */}
        <CoachHoverCard />
      </div>
    </Link>
  );
};

const CoachHoverCard = ({
  gymLogo = placeholderLogo,
  gymName = "Fitzone Gym",
  coachName = "Mia Brown",
}) => {
  return (
    <div
      className="
        absolute inset-0 z-10
        bg-softblue-1000 rounded-2xl border border-neutral-800
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        p-4
        md:p-10
      "
    >
      {/* TOP CONTENT */}
      <div
        className="
          flex flex-col gap-2 md:gap-7
          opacity-0 translate-y-[-20px]
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300 ease-out
        "
      >
        <h2 className="text-neutral-50 text-center md:text-left text-b2 leading-b2 md:text-h6 md:leading-h6 font-medium">
          {coachName}
        </h2>

        <div className="flex items-center gap-3 md:gap-5">
          <Image
            width={300}
            height={300}
            className="w-10 h-10 rounded-full object-cover"
            src={gymLogo}
            alt="gym"
          />
          <p className="text-b2 leading-b2 md:text-s1 md:leading-s1 font-semibold text-neutral-50">
            {gymName}
          </p>
        </div>
      </div>

      {/* CONTACT DETAILS */}
      <div className="flex mt-2 md:mt-20 justify-between">
        {/* LEFT SIDE */}
        <div
          className="
          space-y-2
            md:space-y-14
            opacity-0 translate-x-[-30px]
            group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-300 delay-150 ease-out
          "
        >
          <CoachCardContactItem
            icon={<Phone className="w-4 h-4" />}
            title="Əlaqə"
            description="+994 50 123 45 67"
          />
          <CoachCardContactItem
            icon={<LocationEdit className="w-4 h-4" />}
            title="Location"
            description="Baku, Azerbaijan"
          />
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
       space-y-2
            md:space-y-14
            opacity-0 translate-x-[30px]
            group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-300 delay-150 ease-out
          "
        >
          <CoachCardContactItem
            icon={<Mail className="w-4 h-4" />}
            title="Mail"
            description="mia@fitzone.com"
          />
          <CoachCardContactItem
            icon={<Clock className="w-4 h-4" />}
            title="Working hours"
            description="09:00 - 18:00"
          />
        </div>
      </div>
    </div>
  );
};

export default CoachCard;

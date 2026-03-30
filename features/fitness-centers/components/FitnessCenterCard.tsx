"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Membership } from "../lib/fitness-centers-data";
import { useI18n } from "@/lib/i18n/provider";

export type FitnessCenterCardProps = {
  name: string;
  location: string;
  phone: string;
  workHours: string;
  image: string;
  category: string;
  membership: Membership;
  href: string;
};

const membershipLabelMap: Record<Membership, string> = {
  bronze: "Bronze",
  silver: "Silver",
  gold: "Gold",
  platinum: "Platinum",
};

const membershipVariantMap: Record<Membership, Membership> = {
  bronze: "bronze",
  silver: "silver",
  gold: "gold",
  platinum: "platinum",
};

const FitnessCenterCard = ({
  name,
  location,
  phone,
  workHours,
  image,
  category,
  membership,
  href,
}: FitnessCenterCardProps) => {
  const { t } = useI18n();
  return (
    <article className="flex h-full flex-col gap-6 rounded-4xl border border-[#111729] bg-[#111729] p-7">
      <div className="relative h-[250px] w-full overflow-hidden rounded-3xl">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/65" />
      </div>

      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold leading-s1 text-white">
            {name}
          </h3>
          <Badge
            variant={membershipVariantMap[membership]}
            className={cn(
              "h-9 min-w-[114px] px-4 py-1 text-sm! font-bold leading-5",
              membership === "platinum" && "text-white",
            )}
          >
            {membershipLabelMap[membership]}
          </Badge>
        </div>

        <p className="text-sm font-bold leading-5 text-[#00B4CC]">{category}</p>

        <div className="flex items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-[#C1C1CC]">
              <MapPin className="h-5 w-5 text-[#C1C1CC]" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#C1C1CC]">
              <Phone className="h-5 w-5 text-[#C1C1CC]" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#C1C1CC]">
              <Clock3 className="h-5 w-5 text-[#C1C1CC]" />
              <span>
                {t.centers.workHours}: {workHours}
              </span>
            </div>
          </div>

          <Button
            asChild
            size="icon"
            className="size-12 rounded-full bg-[rgba(14,41,61,0.3)] text-white hover:bg-[rgba(14,41,61,0.45)]"
          >
            <Link href={href} aria-label={`${name} ${t.centers.detailsAria}`}>
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default FitnessCenterCard;

"use client";

import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/provider";

interface OffersHeroProps {
  className?: string;
}

const OffersHero = ({ className }: OffersHeroProps) => {
  const { t } = useI18n();

  return (
    <div
      className={cn(
        "w-full mt-12 md:mt-0",
        className,
      )}
    >
      <h1 className="max-w-3xl mx-auto text-center text-balance text-h6 font-bold leading-tight sm:text-h3 text-white">
        {t.offers.heroTitle}
      </h1>
    </div>
  );
};

export { OffersHero };

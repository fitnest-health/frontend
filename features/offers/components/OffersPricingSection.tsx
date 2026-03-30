"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CheckSquare2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { QrCode } from "lucide-react";
import phoneScreen from "@/public/images/phone-window.webp";
import splash from "@/public/images/splash.png";
import { useI18n } from "@/lib/i18n/provider";

type OffersPricingSectionProps = {
  selectedType?: string;
  selectedMonth?: string;
};

const OffersPricingSection = ({
  selectedType,
  selectedMonth,
}: OffersPricingSectionProps) => {
  const { t } = useI18n();
  const premiumBadges = [
    { label: "Bronze", type: "bronze", variant: "bronze" as const },
    { label: "Silver", type: "silver", variant: "silver" as const },
    { label: "Gold", type: "gold", variant: "gold" as const },
    { label: "Platinum", type: "platinum", variant: "platinum" as const },
  ];
  const monthBadges = [
    { label: `1 ${t.offers.months}`, month: "1" },
    { label: `3 ${t.offers.months}`, month: "3" },
    { label: `6 ${t.offers.months}`, month: "6" },
    { label: `12 ${t.offers.months}`, month: "12" },
  ];

  const benefits = t.offers.benefits;

  const buildSearchHref = (next: { type?: string; month?: string }) => {
    const params = new URLSearchParams();

    if (next.type) {
      params.set("type", next.type);
    }

    if (next.month) {
      params.set("month", next.month);
    }

    const query = params.toString();
    return query ? `?${query}` : "?";
  };

  return (
    <section className="space-y-10 md:space-y-20 text-neutral-50">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 premium-badges">
        {premiumBadges.map((badge) => (
          <Badge
            key={badge.type}
            className="w-full"
            variant={selectedType === badge.type ? badge.variant : "outline"}
            asChild
          >
            <Link
              href={buildSearchHref({
                type: badge.type,
                month: selectedMonth,
              })}
              aria-current={selectedType === badge.type ? "page" : undefined}
            >
              {badge.label}
            </Link>
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6  w-4/5 mx-auto">
        {monthBadges.map((badge) => (
          <Badge
            key={badge.month}
            className={cn(
              "w-full",
              selectedMonth === badge.month && "border border-primary",
            )}
            variant="default"
            asChild
          >
            <Link
              href={buildSearchHref({
                type: selectedType,
                month: badge.month,
              })}
              aria-current={selectedMonth === badge.month ? "page" : undefined}
            >
              {badge.label}
            </Link>
          </Badge>
        ))}
      </div>

      <div className="w-full md:w-4/5 mx-auto max-w-[765px] space-y-8">
        <h2 className="text-neutral-50 text-h2 leading-h2 font-bold text-center">
          75 &#8380; - 65 &#8380;
        </h2>
        <p className="font-bold text-t1 leading-t1 text-neutral-50 text-center">
          <span className="text-primary-700">FitNest</span>{" "}
          {t.offers.whatAwaits}
        </p>

        <div className=" benefits-div">
          {benefits.map((benefit, index) => (
            <div
              key={`${benefit.label}-${index}`}
              className="flex justify-between border-t border-neutral-900 p-4 text-neutral-50"
            >
              <p className="text-s2 font-bold leading-s2">{benefit.label}</p>
              <p className="text-b1 leading-b1 font-normal">
                {benefit.checked ? (
                  <CheckSquare2 className="w-5 h-5 text-primary-700" />
                ) : (
                  benefit.value
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-md">
        <Button asChild variant="outline" size="default" className=" w-full text-primary-700 hover:text-white">
          <Link href="/fitness-centers">{t.offers.includedGyms}</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-between max-h-[700px] ">
        <div className="space-y-5 text-center flex flex-col justify-center items-center h-full">
          <h2 className="font-medium text-h6 leading-h6">
            {t.offers.appHeading}
          </h2>
          <p className="font-medium text-t2 leading-t2">
            <span className="text-primary-700">FitNest</span>{" "}
            {t.offers.appDescription}
          </p> 
          <QrCode size={300} />
        </div>
        <div className="mx-auto max-h-[700px] overflow-clip">
          <div className="relative">
            {/* Phone frame */}
            <Image
              src={phoneScreen}
              alt="phone window"
              className="aspect-9/16 h-[450px] md:h-[900px] w-auto relative z-10"
            />

            {/* Screen area */}
            <div className="absolute top-0 translate-y-1 md:translate-y-5 left-0 overflow-hidden aspect-9/16 h-[430px] md:h-[850px] z-0 rounded-[45px] md:rounded-[55px]">
              <Image src={splash} alt={"splash"} className="h-full w-full " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersPricingSection;

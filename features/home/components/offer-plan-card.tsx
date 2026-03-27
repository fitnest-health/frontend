"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { SubscriptionPackage } from "@/features/offers/api/types";
import { useI18n } from "@/lib/i18n/provider";

interface OfferPlanCardProps {
  package_data: SubscriptionPackage;
}

const badgeGradientMap: Record<string, string> = {
  Bronze:
    "bg-[linear-gradient(102.24deg,rgba(229,232,236,0)_4.05%,#9BAAC7_90.14%)]",
  Silver:
    "bg-[linear-gradient(102.24deg,rgba(229,232,236,0)_4.05%,#9BAAC7_90.14%)]",
  Gold: "bg-[linear-gradient(106.44deg,rgba(231,183,95,0)_4.93%,#F8D57E_95.07%)]",
  Platinum:
    "bg-[linear-gradient(102.76deg,#313131_1.35%,#515254_41.81%,#5B5B5D_56.68%,#565857_101.38%)]",
};

const OfferPlanCard = ({ package_data }: OfferPlanCardProps) => {
  const { t } = useI18n();
  const firstOption = package_data.options[0];
  if (!firstOption) return null;

  const { price, benefits, visit_limit, freeze_days, duration_months } =
    firstOption;
  const hasDiscount = price.discount < price.base;
  const badgeGradient =
    badgeGradientMap[package_data.name] ?? badgeGradientMap.Bronze;

  return (
    <Card
      className={cn(
        "relative shadow-none border-transparent font-sans text-neutral-50 md:h-[560px] h-[600px]",
      )}
    >
      <div className="relative flex h-full flex-col gap-6 overflow-hidden">
        <Image
          src="/images/offer-background.png"
          alt=""
          width={600}
          height={780}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 object-contain opacity-100"
          aria-hidden
        />

        <CardHeader className="relative z-10 w-full space-y-6 p-0 text-center">
          <strong
            className={cn(
              "inline-flex min-w-28 items-center justify-center rounded-full py-4! px-7! text-s1 font-bold leading-s1 text-neutral-50 transition-all sm:min-w-36 sm:px-5 sm:py-1.5 not-italic",
              badgeGradient,
            )}
          >
            {package_data.name}
          </strong>

          <h2 className="font-sans text-b2 leading-b2 font-normal text-neutral-200">
            {duration_months > 0
              ? `${duration_months} ${t.home.monthlyPlan}`
              : t.home.trialPlan}{" "}
            —{" "}
            {visit_limit > 0
              ? `${visit_limit} ${t.home.entry}`
              : t.home.unlimitedEntry}
          </h2>

          <div className="flex items-center justify-center gap-3 py-4">
            {hasDiscount && (
              <>
                <span className="relative inline-block">
                  <del
                    className="text-h5 font-semibold text-neutral-400 no-underline"
                    aria-label={`${t.home.oldPrice}: ${price.base} manat`}
                  >
                    {price.base} ₼
                  </del>
                  <svg
                    aria-hidden
                    className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                      stroke="#ef4444"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="text-h4">-</span>
              </>
            )}

            <h3 className="m-0 text-h6 font-semibold leading-tight text-neutral-50 sm:text-h3">
              {price.effective} ₼
            </h3>
          </div>
        </CardHeader>

        <CardContent className="relative z-10 flex w-full flex-1 flex-col gap-6 p-0 text-left text-neutral-50">
          <ul
            role="list"
            aria-label={`${package_data.name} ${t.home.features}`}
            className={cn("space-y-3 text-b2 text-neutral-50")}
          >
            {visit_limit > 0 && (
              <li className="flex items-start gap-3">
                <Image
                  src="/icons/weight.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="mt-0.5 size-4"
                  aria-hidden
                />
                <span className="flex-1 leading-b1">
                  {t.home.gymEntryCount} - {visit_limit}
                </span>
              </li>
            )}
            {freeze_days > 0 && (
              <li className="flex items-start gap-3">
                <Image
                  src="/icons/weight.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="mt-0.5 size-4"
                  aria-hidden
                />
                <span className="flex-1 leading-b1">
                  {freeze_days} {t.home.freezeDays}
                </span>
              </li>
            )}
            {benefits.map((benefit) => (
              <li key={benefit.description} className="flex items-start gap-3">
                <Image
                  src="/icons/weight.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="mt-0.5 size-4"
                  aria-hidden
                />
                <span className="flex-1 leading-b1">
                  {benefit.description}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex justify-end pt-4" />
        </CardContent>
      </div>
    </Card>
  );
};

export { OfferPlanCard };

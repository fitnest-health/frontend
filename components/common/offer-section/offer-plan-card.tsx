import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { OfferPlanFeatureList } from "@/components/common/offer-section/offer-plan-feature-list";
import {
  type BillingPeriod,
  type OfferPlan,
} from "@/components/common/offer-section/offers.types";

interface OfferPlanCardProps {
  plan: OfferPlan;
  period: BillingPeriod;
  containerClassName?: string;
  accentClassName?: string;
}

const OfferPlanCard = ({
  plan,
  period,
  containerClassName,
  accentClassName,
}: OfferPlanCardProps) => {
  const price = plan.price[period];
  const features = plan.features[period];

  return (
    <Card
      className={cn(
        "relative h-full border-transparent font-sans text-neutral-50  md:min-h-[560px] lg:min-h-[600px]", // md:min-h-[560px] lg:min-h-[600px]
        containerClassName
      )}
    >
      <div className="relative flex h-full gap-6 flex-col overflow-hidden">
        <Image
          src="/images/offer-background.png"
          alt=""
          width={600}
          height={780}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 object-contain opacity-100"
          aria-hidden
        />
        <CardHeader className="relative z-10 w-full space-y-6 p-0 text-center">
          <span
            className={cn(
              "inline-flex min-w-28 items-center justify-center rounded-full px-4 py-1 text-s1 font-bold uppercase leading-s1  text-neutral-50 transition-all sm:min-w-36 sm:px-5 sm:py-1.5",
              accentClassName
            )}
          >
            {plan.name}
          </span>
          <p className="font-sans text-b2 leading-b2 text-neutral-200">
            {plan.description}
          </p>
          <div className="py-4">
            <p className="text-h4 font-semibold leading-tight text-neutral-50 sm:text-h3">
              {price.amount}
              <span className="ml-1 text-b1 font-medium text-neutral-200">
                {price.suffix}
              </span>
            </p>
          </div>
        </CardHeader>
        <CardContent className="relative z-10 flex w-full flex-1 flex-col gap-6 p-0 text-left text-neutral-50">
          <OfferPlanFeatureList features={features} />

          <div className="mt-auto flex justify-end pt-4">
            <Link
              href="/"
              className="grid size-12 place-items-center rounded-full border border-[#123B554D] bg-[#0A1628] transition-colors duration-200 hover:bg-primary-700/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 active:bg-primary-700/25 active:text-primary-300"
            >
              <ArrowUpRight className="size-5" />
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export { OfferPlanCard };

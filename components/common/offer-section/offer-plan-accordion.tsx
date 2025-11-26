import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronsDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { OfferPlanFeatureList } from "@/components/common/offer-section/offer-plan-feature-list";
import {
  type BillingPeriod,
  type OfferPlan,
} from "@/components/common/offer-section/offers.types";

interface OfferPlanAccordionProps {
  plan: OfferPlan;
  period: BillingPeriod;
  isOpen: boolean;
  onToggle: () => void;
  containerClassName?: string;
  accentClassName?: string;
}

const OfferPlanAccordion = ({
  plan,
  period,
  isOpen,
  onToggle,
  containerClassName,
  accentClassName,
}: OfferPlanAccordionProps) => {
  const price = plan.price[period];
  const features = plan.features[period];

  return (
    <Card
      className={cn(
        "relative items-start gap-4 overflow-hidden border-transparent px-6 py-6 font-sans text-neutral-50 transition-colors duration-300",
        containerClassName
      )}
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/offer-background.png"
          alt=""
          width={420}
          height={520}
          className="h-auto w-[70%] max-w-[260px] object-contain opacity-40 sm:max-w-[280px]"
          aria-hidden
          priority={false}
        />
      </div>
      <div className="relative z-10 flex w-full items-start gap-4 text-left">
        <button
          type="button"
          onClick={onToggle}
          className="flex flex-1 flex-col items-center gap-3 text-center text-neutral-50"
        >
          <span
            className={cn(
              "inline-flex min-w-28 items-center justify-center rounded-full px-4 py-1 text-s1 font-bold uppercase leading-s1 tracking-[0.08em] text-neutral-50 sm:min-w-36 sm:px-5 sm:py-1.5",
              accentClassName
            )}
          >
            {plan.name}
          </span>
          <p className="font-sans text-b2 leading-b2 text-neutral-200">
            {plan.description}
          </p>
          <p className="text-h5 font-semibold leading-tight text-neutral-50">
            {price.amount}
            <span className="ml-1 text-b2 font-medium text-neutral-200">
              {price.suffix}
            </span>
          </p>
        </button>
        <button
          type="button"
          onClick={onToggle}
          className={cn(
            "grid size-10 place-items-center rounded-full border border-neutral-700 bg-[#0A1628] text-primary-400 transition-transform duration-300",
            isOpen ? "-rotate-180 gradient-border" : "rotate-0"
          )}
        >
          <ChevronsDown className="size-5" />
        </button>
      </div>
      <div
        className={cn(
          "w-full overflow-hidden transition-[max-height] duration-300 ease-in-out",
          isOpen ? "max-h-[420px]" : "max-h-0"
        )}
      >
        <div className="relative z-10 mt-4 space-y-5">
          <OfferPlanFeatureList features={features} />
          <div className="flex justify-end">
            <Link
              href="/"
              className="grid size-10 place-items-center rounded-full border border-primary-700 bg-[#0A1628] text-primary-400 transition-colors duration-200 hover:bg-primary-700/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 active:bg-primary-700/25 active:text-primary-300"
            >
              <ArrowUpRight className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export { OfferPlanAccordion };

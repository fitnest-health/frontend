import { useMemo, useState } from "react";

import { OfferPlanCard } from "@/components/common/offer-section/offer-plan-card";
import { OfferPlanAccordion } from "@/components/common/offer-section/offer-plan-accordion";
import {
  OfferPeriodToggle,
  type PeriodOption,
} from "@/components/common/offer-section/offer-period-toggle";
import {
  type BillingPeriod,
  type OfferPlan,
} from "@/components/common/offer-section/offers.types";
import { cn } from "@/lib/utils";

const plans: OfferPlan[] = [
  {
    id: "standard",
    tone: "standard",
    name: "STANDART",
    description:
      "Başlayanlar üçün əsas imkanlar — seçilmiş zallara rahat giriş.",
    price: {
      monthly: { amount: "65 ₼", suffix: "/ay" },
      yearly: { amount: "650 ₼", suffix: "/il" },
    },
    features: {
      monthly: [
        "Ayda 8 giriş",
        "Seçilmiş partnyor zallara giriş",
        "Qrup məşqləri — ayda 4 dəfə",
      ],
      yearly: [
        "İldə 96 giriş",
        "Seçilmiş partnyor zallara giriş",
        "Qrup məşqləri — ildə 48 dəfə",
      ],
    },
  },
  {
    id: "gold",
    tone: "gold",
    name: "GOLD",
    description: (
      <>
        Daha çox imkan və fərdiləşdirilmiş təcrübə —{" "}
        <span className="text-primary-700 font-semibold">FitNest</span>{" "}
        mütəxəssisləri ilə balanslı inkişaf üçün.
      </>
    ),
    price: {
      monthly: { amount: "85 ₼", suffix: "/ay" },
      yearly: { amount: "850 ₼", suffix: "/il" },
    },
    features: {
      monthly: [
        "Ayda 12 giriş",
        "Bütün standart zallara giriş",
        "Qrup məşqləri — limitsiz",
        "SPA — ayda 1 dəfə",
      ],
      yearly: [
        "İldə 144 giriş",
        "Bütün standart zallara limitsiz giriş",
        "Qrup məşqləri — limitsiz",
        "SPA — ildə 12 dəfə",
      ],
    },
  },
  {
    id: "premium",
    tone: "premium",
    name: "PREMIUM",
    description: "Bütün zallara və VIP zallara giriş — maksimum sərbəstlik.",
    price: {
      monthly: { amount: "130 ₼", suffix: "/ay" },
      yearly: { amount: "1300 ₼", suffix: "/il" },
    },
    features: {
      monthly: [
        "Ayda 20 giriş",
        "Bütün partnyor zallara giriş",
        "VIP zal — ayda 8 giriş 👑",
        "Qrup məşqləri — limitsiz",
        "SPA — ayda 2 dəfə",
      ],
      yearly: [
        "İldə 240 giriş",
        "Bütün partnyor və VIP zallara tam giriş",
        "VIP zal — ildə 96 giriş 👑",
        "Qrup məşqləri — limitsiz",
        "SPA — ildə 24 dəfə",
      ],
    },
  },
];

const periodOptions: PeriodOption[] = [
  { value: "monthly", label: "Aylıq" },
  { value: "yearly", label: "İllik" },
];

const toneCardClasses: Record<OfferPlan["tone"], string> = {
  standard: "bg-[#0F1A2F]/85",
  gold: "bg-[#0F1A2F]/85",
  premium: "bg-[#0D172E]/85",
};

const toneGradientClasses: Record<OfferPlan["tone"], string> = {
  // blokarin backgroundunu deyismek eger lazim olsa
  standard: "",
  gold: "",
  premium: "",
};

const toneAccentClasses: Record<OfferPlan["tone"], string> = {
  standard: "bg-linear-to-r from-[#0E293D00] to-[#154766] ",
  gold: "bg-linear-to-r from-[#E7B75F00] to-[#F8D57E] ",
  premium: " bg-linear-to-r from-[#E5E8EC00] to-[#9BAAC7]  ",
};

const OffersSection = () => {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const toneStyles = useMemo(
    () =>
      plans.reduce<Record<string, { container: string; accent: string }>>(
        (acc, plan) => {
          acc[plan.id] = {
            container: cn(
              toneCardClasses[plan.tone],
              toneGradientClasses[plan.tone]
            ),
            accent: toneAccentClasses[plan.tone],
          };
          return acc;
        },
        {}
      ),
    []
  );

  return (
    <section className="relative w-full px-4 py-16 sm:py-20 md:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <div className="flex flex-col items-center gap-4">
          <div className="flex w-full justify-center md:justify-start">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full gradient-border text-b1 font-semibold text-primary-500">
                2
              </span>
              <h2 className="text-h5 font-semibold leading-h5 text-center sm:text-h4 sm:leading-h4 md:text-left md:text-h3 md:leading-h3">
                Təkliflərimiz
              </h2>
            </div>
          </div>
          <OfferPeriodToggle
            value={period}
            options={periodOptions}
            onChange={setPeriod}
            className="mt-2"
          />
        </div>

        <div className="mt-10 hidden gap-6 md:grid md:grid-cols-3">
          {plans.map((plan) => {
            return (
              <OfferPlanCard
                key={`${plan.id}-desktop`}
                plan={plan}
                period={period}
                containerClassName={toneStyles[plan.id].container}
                accentClassName={toneStyles[plan.id].accent}
              />
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 md:hidden">
          {plans.map((plan) => {
            const isOpen = expandedPlan === plan.id;

            return (
              <OfferPlanAccordion
                key={`${plan.id}-mobile`}
                plan={plan}
                period={period}
                isOpen={isOpen}
                onToggle={() =>
                  setExpandedPlan((prev) => (prev === plan.id ? null : plan.id))
                }
                containerClassName={toneStyles[plan.id].container}
                accentClassName={toneStyles[plan.id].accent}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;

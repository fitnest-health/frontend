import {
  type OfferPlan,
  type PeriodOption,
} from "@/components/common/offer-section/offers.types";

const offerPlans: OfferPlan[] = [
  {
    id: "standard",
    tone: "standard",
    name: "Standart",
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
    name: "Gold",
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
    name: "Premium",
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

const toneStylesByTone: Record<
  OfferPlan["tone"],
  { container: string; accent: string }
> = {
  standard: {
    container: "bg-[#0F1A2F]",
    accent:
      "bg-[linear-gradient(99.34deg,rgba(14,41,61,0)_-3.57%,#154766_90.37%)]",
  },
  gold: {
    container: "bg-[#0F1A2F]",
    accent:
      "bg-[linear-gradient(100.75deg,rgba(231,183,95,0)_-0.32%,#F8D57E_91.32%)]",
  },
  premium: {
    container: "bg-[#0F1A2F]",
    accent:
      "bg-[linear-gradient(102.24deg,rgba(229,232,236,0)_4.05%,#9BAAC7_90.14%)]",
  },
};

const offerToneStylesByPlanId = offerPlans.reduce<
  Record<string, { container: string; accent: string }>
>((acc, plan) => {
  acc[plan.id] = toneStylesByTone[plan.tone];
  return acc;
}, {});

const defaultPeriodOptions: PeriodOption[] = [
  { value: "monthly", label: "Aylıq" },
  { value: "yearly", label: "İllik" },
];

export { offerPlans, offerToneStylesByPlanId, defaultPeriodOptions };

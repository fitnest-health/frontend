import { offerPlans } from "@/components/common/offer-section/offer-config";
import { type BillingPeriod } from "@/components/common/offer-section/offers.types";

type PlanId = (typeof offerPlans)[number]["id"];

type PricingPlanMeta = {
  highlight?: Partial<Record<BillingPeriod, string>>;
  perPeriod: Record<BillingPeriod, string>;
};

type PricingCell = {
  icon: "check" | "x";
  text?: string;
};

type PlanCells = Record<BillingPeriod, PricingCell>;

type PricingRowPlans = Record<PlanId, PlanCells>;

interface PricingRow {
  id: string;
  label: string;
  plans: PricingRowPlans;
}

type PriceOverrides = Partial<
  Record<BillingPeriod, Partial<Record<PlanId, string>>>
>;

const pricingPlanMeta: Record<PlanId, PricingPlanMeta> = {
  standard: {
    highlight: {
      yearly: "20% endirim ilə 780₼ yox",
    },
    perPeriod: {
      monthly: "",
      yearly: "Ayda cəmi 52₼",
    },
  },
  gold: {
    highlight: {
      yearly: "20% endirim ilə 1020₼ yox",
    },
    perPeriod: {
      monthly: "",
      yearly: "Ayda cəmi 68₼",
    },
  },
  premium: {
    highlight: {
      yearly: "20% endirim ilə 1560₼ yox",
    },
    perPeriod: {
      monthly: "",
      yearly: "Ayda cəmi 104₼",
    },
  },
};

const pricingPriceOverrides: PriceOverrides = {
  yearly: {
    standard: "624 ₼",
    gold: "816 ₼",
    premium: "1248 ₼",
  },
};

const pricingRows: PricingRow[] = [
  {
    id: "gym-access",
    label: "Zal giriş imkanı",
    plans: {
      standard: {
        monthly: { icon: "check", text: "8 giriş — standart zallar" },
        yearly: { icon: "check", text: "8 giriş — standart zallar" },
      },
      gold: {
        monthly: { icon: "check", text: "12 giriş — comfort zallar" },
        yearly: { icon: "check", text: "12 giriş — comfort zallar" },
      },
      premium: {
        monthly: { icon: "check", text: "20 giriş — bütün zallar" },
        yearly: { icon: "check", text: "20 giriş — bütün zallar" },
      },
    },
  },
  {
    id: "vip-access",
    label: "VIP zal girişləri",
    plans: {
      standard: {
        monthly: { icon: "x" },
        yearly: { icon: "x" },
      },
      gold: {
        monthly: { icon: "x" },
        yearly: { icon: "x" },
      },
      premium: {
        monthly: { icon: "check", text: "Ayda 8 giriş" },
        yearly: { icon: "check", text: "Ayda 8 giriş" },
      },
    },
  },
  {
    id: "group-training",
    label: "Qrup məşqləri",
    plans: {
      standard: {
        monthly: { icon: "check", text: "Ayda 4 dəfə" },
        yearly: { icon: "check", text: "Ayda 4 dəfə" },
      },
      gold: {
        monthly: { icon: "check", text: "Limitsiz" },
        yearly: { icon: "check", text: "Limitsiz" },
      },
      premium: {
        monthly: { icon: "check", text: "Limitsiz" },
        yearly: { icon: "check", text: "Limitsiz" },
      },
    },
  },
  {
    id: "spa",
    label: "SPA və relaks xidmətləri",
    plans: {
      standard: {
        monthly: { icon: "x" },
        yearly: { icon: "x" },
      },
      gold: {
        monthly: { icon: "check", text: "Ayda 1 dəfə" },
        yearly: { icon: "check", text: "Ayda 1 dəfə" },
      },
      premium: {
        monthly: { icon: "check", text: "Ayda 2 dəfə" },
        yearly: { icon: "check", text: "Ayda 2 dəfə" },
      },
    },
  },
  {
    id: "personal-program",
    label: "Fərdi məşq proqramı",
    plans: {
      standard: {
        monthly: { icon: "check" },
        yearly: { icon: "check" },
      },
      gold: {
        monthly: { icon: "check" },
        yearly: { icon: "check" },
      },
      premium: {
        monthly: { icon: "check", text: "trenerlə birgə hazırlanmış" },
        yearly: { icon: "check", text: "trenerlə birgə hazırlanmış" },
      },
    },
  },
  {
    id: "nutrition",
    label: "Fərdiləşdirilmiş qidalanma planı",
    plans: {
      standard: {
        monthly: { icon: "x" },
        yearly: { icon: "x" },
      },
      gold: {
        monthly: { icon: "check", text: "aylıq plan" },
        yearly: { icon: "check", text: "illik plan" },
      },
      premium: {
        monthly: { icon: "check", text: "trenerlə birgə hazırlanmış" },
        yearly: { icon: "check", text: "trenerlə birgə hazırlanmış" },
      },
    },
  },
  {
    id: "community",
    label: "FitNest Community — üzvlərə özəl tədbirlər və motivasiya kontenti",
    plans: {
      standard: {
        monthly: { icon: "x" },
        yearly: { icon: "x" },
      },
      gold: {
        monthly: { icon: "check" },
        yearly: { icon: "check" },
      },
      premium: {
        monthly: { icon: "check" },
        yearly: { icon: "check" },
      },
    },
  },
  {
    id: "vitamins",
    label: "Vitamin və məhsullarda xüsusi endirimlər",
    plans: {
      standard: {
        monthly: { icon: "x" },
        yearly: { icon: "x" },
      },
      gold: {
        monthly: { icon: "check" },
        yearly: { icon: "check" },
      },
      premium: {
        monthly: { icon: "check", text: "+ partnyor bonusları" },
        yearly: { icon: "check", text: "+ partnyor bonusları" },
      },
    },
  },
];

export { pricingPlanMeta, pricingPriceOverrides, pricingRows };
export type { PricingRow, PricingCell, PlanId, PriceOverrides };

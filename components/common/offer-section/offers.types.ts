import type { ReactNode } from "react";

export type BillingPeriod = "monthly" | "yearly";

export interface OfferPrice {
  amount: string;
  suffix: string;
}

export interface OfferPlan {
  id: string;
  tone: "standard" | "gold" | "premium";
  name: string;
  description: ReactNode;
  price: Record<BillingPeriod, OfferPrice>;
  features: Record<BillingPeriod, string[]>;
}

export interface PeriodOption {
  value: BillingPeriod;
  label: string;
}

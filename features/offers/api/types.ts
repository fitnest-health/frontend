export interface SubscriptionPrice {
  base: number;
  discount: number;
  effective: number;
  currency: string;
}

export interface SubscriptionService {
  service_name: string;
}

export interface SubscriptionBenefit {
  description: string;
}

export interface SubscriptionOption {
  option_id: number;
  duration_months: number;
  price: SubscriptionPrice;
  badge: string;
  visit_limit: number;
  freeze_days: number;
  services: SubscriptionService[] | null;
  benefits: SubscriptionBenefit[];
}

export interface SubscriptionPackage {
  package_id: string;
  name: string;
  is_active: boolean;
  discount_percent: number | null;
  options: SubscriptionOption[];
}

export interface SubscriptionPackagesResponse {
  items: SubscriptionPackage[];
}

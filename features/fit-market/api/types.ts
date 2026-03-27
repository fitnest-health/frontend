export interface StoreSocialLinks {
  links: string[];
}

export interface Store {
  storeId: number;
  name: string;
  address: string;
  city: string;
  logoUrl: string;
  coverImageUrl: string;
  discounts: string[];
  distanceKm: number | null;
  social: StoreSocialLinks;
  isSaved: boolean;
  isNew: boolean;
}

export type StoreFilterType = "ALL" | "NEW" | "DISCOUNTED" | "CLOSEST" | "SAVED";

export type SortDirection = "asc" | "desc";

export interface StoresParams {
  q?: string;
  type?: StoreFilterType;
  lat?: number;
  lng?: number;
  page?: number;
  page_size?: number;
  sort_dir?: SortDirection;
}

export interface StoresResponse {
  items: Store[];
  total: number;
  page: number;
  pageSize: number;
}

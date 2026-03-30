import { apiClient, serverApiClient } from "@/lib/api";
import type { SubscriptionPackagesResponse } from "./types";
import { unstable_cache } from "next/cache";

const ENDPOINT = "/subscription-packages";

export async function getSubscriptionPackages(): Promise<SubscriptionPackagesResponse> {
  const { data } = await apiClient.get<SubscriptionPackagesResponse>(ENDPOINT);
  return data;
}

export async function getSubscriptionPackagesServer(): Promise<SubscriptionPackagesResponse> {
  const { data } =
    await serverApiClient.get<SubscriptionPackagesResponse>(ENDPOINT);
  return data;
}

const getSubscriptionPackagesServerCachedInternal = unstable_cache(
  async () => getSubscriptionPackagesServer(),
  ["subscription-packages"],
  { revalidate: 900, tags: ["subscription-packages"] },
);

export async function getSubscriptionPackagesServerCached(): Promise<SubscriptionPackagesResponse> {
  return getSubscriptionPackagesServerCachedInternal();
}

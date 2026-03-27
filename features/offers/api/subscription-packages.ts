import { apiClient, serverApiClient } from "@/lib/api";
import type { SubscriptionPackagesResponse } from "./types";

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

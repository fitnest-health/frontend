import { apiClient, serverApiClient } from "@/lib/api";
import type { StoresParams, StoresResponse } from "./types";

const ENDPOINT = "/stores";

const defaultParams: StoresParams = {
  type: "ALL",
  page: 1,
  page_size: 10,
  sort_dir: "desc",
};

export async function getStores(
  params: StoresParams = {},
): Promise<StoresResponse> {
  const { data } = await apiClient.get<StoresResponse>(ENDPOINT, {
    params: { ...defaultParams, ...params },
  });
  return data;
}

export async function getStoresServer(
  params: StoresParams = {},
): Promise<StoresResponse> {
  const { data } = await serverApiClient.get<StoresResponse>(ENDPOINT, {
    params: { ...defaultParams, ...params },
  });
  return data;
}

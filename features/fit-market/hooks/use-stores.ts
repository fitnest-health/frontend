import { useQuery } from "@tanstack/react-query";
import { getStores } from "../api/stores";
import type { StoresParams } from "../api/types";

export const storesKeys = {
  all: ["stores"] as const,
  list: (params: StoresParams) => ["stores", "list", params] as const,
};

export function useStores(params: StoresParams = {}) {
  return useQuery({
    queryKey: storesKeys.list(params),
    queryFn: () => getStores(params),
  });
}

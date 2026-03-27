import { useQuery } from "@tanstack/react-query";
import { getSubscriptionPackages } from "../api/subscription-packages";

export const subscriptionPackagesKeys = {
  all: ["subscription-packages"] as const,
};

export function useSubscriptionPackages() {
  return useQuery({
    queryKey: subscriptionPackagesKeys.all,
    queryFn: getSubscriptionPackages,
  });
}

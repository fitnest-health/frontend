import HomePage from "@/features/home";
import { getSubscriptionPackagesServer } from "@/features/offers/api/subscription-packages";

export default async function Home() {
  const data = await getSubscriptionPackagesServer();

  return (
    <div className="text-gray-50">
      <HomePage packages={data.items} />
    </div>
  );
}

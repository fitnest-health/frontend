import FitMarketPage from "@/features/fit-market";
import { getStoresServer } from "@/features/fit-market/api/stores";

const FitMarketWrapper = async () => {
  const data = await getStoresServer();

  return <FitMarketPage stores={data.items} />;
};

export default FitMarketWrapper;

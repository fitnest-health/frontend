import FitMarketDetails from "@/features/fit-market/components/FitMarketDetails";

type FitMarketDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

const FitMarketDetailsPage = async ({ params }: FitMarketDetailsPageProps) => {
  const { slug } = await params;
  return <FitMarketDetails slug={slug} />;
};

export default FitMarketDetailsPage;

import FitnessCenterDetails from "@/features/fitness-centers/components/FitnessCenterDetails";

type FitnessCenterDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

const FitnessCenterDetailsPage = async ({
  params,
}: FitnessCenterDetailsPageProps) => {
  const { slug } = await params;
  return <FitnessCenterDetails slug={slug} />;
};

export default FitnessCenterDetailsPage;

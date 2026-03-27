import { getMessages } from "@/lib/i18n/server";

const FitnessCentersHeroSection = async () => {
  const { messages } = await getMessages();

  return (
    <div className="space-y-4 md:space-y-6">
      <h1 className="mx-auto max-w-3xl text-balance text-center text-h6 font-bold leading-tight text-white sm:text-h3">
        {messages.centers.heroTitle}
      </h1>
      <p className="mx-auto max-w-3xl text-center text-base text-neutral-50 md:text-xl">
        {messages.centers.heroDescription}
      </p>
    </div>
  );
};

export default FitnessCentersHeroSection;

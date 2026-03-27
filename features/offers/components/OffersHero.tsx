import { cn } from "@/lib/utils";
import { getMessages } from "@/lib/i18n/server";

interface OffersHeroProps {
  className?: string;
}

const OffersHero = async ({ className }: OffersHeroProps) => {
  const { messages } = await getMessages();

  return (
    <div
      className={cn(
        "w-full mt-12 md:mt-0",
        className,
      )}
    >
      <h1 className="max-w-3xl mx-auto text-center text-balance text-h6 font-bold leading-tight sm:text-h3 text-white">
        {messages.offers.heroTitle}
      </h1>
    </div>
  );
};

export { OffersHero };

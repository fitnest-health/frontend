import Container from "@/components/common/Container";
import { cn } from "@/lib/utils";

interface OffersHeroProps {
  className?: string;
}

const OffersHero = ({ className }: OffersHeroProps) => {
  return (
    <div
      className={cn(
        "w-full",
        className,
      )}
    >
      <h1 className="max-w-3xl mx-auto text-center text-balance text-h6 font-bold leading-tight sm:text-h3 text-white">
        Öz bədənini və həyat balansını qorumaq üçün uyğun planı seç
      </h1>
    </div>
  );
};

export { OffersHero };

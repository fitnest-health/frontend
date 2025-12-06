import Container from "@/components/common/Container";
import { cn } from "@/lib/utils";

interface OffersHeroProps {
  className?: string;
}

const OffersHero = ({ className }: OffersHeroProps) => {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden py-16 sm:py-20 md:py-24",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[#0D0F1C] " />
      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <h1 className="max-w-3xl text-balance text-h4 font-semibold leading-tight sm:text-h3">
            Öz bədənini və həyat balansını qorumaq üçün uyğun planı seç
          </h1>
          <p className="max-w-2xl text-b1 leading-relaxed text-neutral-200 sm:text-b2">
            Fərdi məşq və qidalanma proqramları və üzvlük üstünlükləri — sağlam
            və balanslı həyat üçün hər şey{" "}
            <span className="text-primary-400">FitNest</span>-də!
          </p>
        </div>
      </Container>
    </section>
  );
};

export { OffersHero };

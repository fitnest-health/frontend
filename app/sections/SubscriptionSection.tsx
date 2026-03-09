import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import { OfferPlanCarousel } from "@/components/common/offer-section/offer-plan-carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SubscriptionSection = () => {
  return (
    // SEO: <section> with aria-labelledby ties the heading to the region
    <section aria-labelledby="subscription-heading">
      <Container className="py-7 md:py-15 space-y-10 md:space-y-20">
        {/* SEO: Heading component should render an <h2> — pass id so aria-labelledby works */}
        <Heading title="Abunəlik" number={2} />

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-y-20">
          {/* Carousel replaces the raw flex card row */}
          <div className="md:col-span-2 lg:col-span-3 order-2 md:order-1">
            <OfferPlanCarousel />
          </div>

          {/* SEO: text block uses proper heading hierarchy */}
          <div className="md:col-span-2 lg:col-span-2 flex flex-col justify-center gap-3 order-1 md:order-2">
            {/* h3 sits below the section's h2 — correct outline */}
            <h3 className="font-medium text-h5 leading-h5">
              Hədəflərinə uyğun planı seç
            </h3>
            <p className="font-medium text-t2 leading-t2">
              <span className="text-primary-700">FitNest </span>
              ilə daha balanslı, sağlam və aktiv həyata addım at.
            </p>

            <Button
              variant={"default"}
              asChild
              className="w-full max-w-[220px]"
            >
              <Link href="/offers">Planlara bax</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubscriptionSection;

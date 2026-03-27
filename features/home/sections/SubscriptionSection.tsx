"use client";

import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import { OfferPlanCarousel } from "@/features/home/components/offer-plan-carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { SubscriptionPackage } from "@/features/offers/api/types";
import { useI18n } from "@/lib/i18n/provider";

interface SubscriptionSectionProps {
  packages: SubscriptionPackage[];
}

const SubscriptionSection = ({ packages }: SubscriptionSectionProps) => {
  const { t } = useI18n();

  return (
    <section aria-labelledby="subscription-heading">
      <Container className="space-y-10 py-7 md:space-y-20 md:py-15">
        <Heading title={t.home.subscriptionTitle} number={2} />

        <div className="grid grid-cols-1 gap-y-20 md:grid-cols-4 lg:grid-cols-5">
          <div className="order-2 md:order-1 md:col-span-2 lg:col-span-3">
            <OfferPlanCarousel packages={packages} />
          </div>

          <div className="order-1 flex flex-col justify-center gap-3 md:order-2 md:col-span-2 lg:col-span-2">
            <h3 className="text-h5 font-medium leading-h5">
              {t.home.subscriptionHeading}
            </h3>
            <p className="text-t2 font-medium leading-t2">
              <span className="text-primary-700">FitNest </span>
              {t.home.subscriptionDescription}
            </p>

            <Button variant="default" asChild className="w-full max-w-[220px]">
              <Link href="/offers">{t.home.viewPlans}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubscriptionSection;

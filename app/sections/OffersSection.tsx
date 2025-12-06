"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import { OfferPlanAccordion } from "@/components/common/offer-section/offer-plan-accordion";
import { OfferPlanCard } from "@/components/common/offer-section/offer-plan-card";
import { type BillingPeriod } from "@/components/common/offer-section/offers.types";
import {
  offerPlans,
  offerToneStylesByPlanId,
} from "@/components/common/offer-section/offer-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";

const OffersSection = () => {
  const period: BillingPeriod = "monthly";
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);
  const toneStyles = offerToneStylesByPlanId;

  return (
    <Container>
      <section id="offers" className="relative w-full py-16 sm:py-20 md:py-24">
        <div className="flex flex-col gap-10 lg:gap-12">
          <Heading
            title="Təkliflərimiz"
            number={2}
            className="items-start pb-4 md:pb-6 xl:pb-8"
          />

          <div className="mx-auto flex w-full flex-col gap-12 lg:grid lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,420px)] lg:items-start lg:gap-16">
            <div className="flex flex-col gap-6 text-left lg:pt-10 xl:pt-[72px]">
              <div className="space-y-4">
                <h2 className="text-h5 font-semibold leading-tight text-neutral-50 sm:text-h4">
                  Hədəflərinə uyğun planı seç
                </h2>
                <p className="text-b1 leading-relaxed text-neutral-300 sm:text-b2">
                  <span className="text-primary-500 font-semibold">
                    FitNest
                  </span>{" "}
                  ilə daha balanslı, sağlam və aktiv həyata addım at. Sənə uyğun
                  proqramı seç, biz də nəticəyə gedən yolda yanındayıq.
                </p>
              </div>
              <Button asChild className="w-full max-w-[220px]">
                <Link href="/offers">Təkliflərə bax</Link>
              </Button>
            </div>

            <div className="flex flex-col items-center gap-6 lg:items-stretch">
              <div className="hidden w-full justify-center md:flex">
                <Swiper
                  effect="cards"
                  grabCursor
                  initialSlide={1}
                  modules={[EffectCards, Autoplay]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  slidesPerView={1}
                  centeredSlides
                  cardsEffect={{
                    rotate: true,
                    perSlideOffset: 8,
                    perSlideRotate: 2,
                    slideShadows: false,
                  }}
                  className="offer-cards-swiper w-full max-w-[340px] lg:max-w-[380px]"
                >
                  {offerPlans.map((plan) => (
                    <SwiperSlide key={`${plan.id}-slide`} className="h-auto!">
                      <OfferPlanCard
                        plan={plan}
                        period={period}
                        containerClassName={cn(
                          "w-full border border-[#1A2E40]/40 backdrop-blur-md",
                          toneStyles[plan.id].container
                        )}
                        accentClassName={toneStyles[plan.id].accent}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="flex w-full flex-col gap-4 md:hidden">
                {offerPlans.map((plan) => {
                  const isOpen = expandedPlan === plan.id;

                  return (
                    <OfferPlanAccordion
                      key={`${plan.id}-mobile`}
                      plan={plan}
                      period={period}
                      isOpen={isOpen}
                      onToggle={() =>
                        setExpandedPlan((prev) =>
                          prev === plan.id ? null : plan.id
                        )
                      }
                      containerClassName={toneStyles[plan.id].container}
                      accentClassName={toneStyles[plan.id].accent}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default OffersSection;

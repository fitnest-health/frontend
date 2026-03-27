"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { OfferPlanCard } from "@/features/home/components/offer-plan-card";
import type { SubscriptionPackage } from "@/features/offers/api/types";
import { useI18n } from "@/lib/i18n/provider";

interface OfferPlanCarouselProps {
  packages: SubscriptionPackage[];
}

const OfferPlanCarousel = ({ packages }: OfferPlanCarouselProps) => {
  const { t } = useI18n();
  const [active, setActive] = useState(1);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = packages.length;

  const prev = useCallback(
    () => setActive((i) => (i - 1 + total) % total),
    [total],
  );
  const next = useCallback(() => setActive((i) => (i + 1) % total), [total]);

  // ── Autoplay ──
  useEffect(() => {
    if (total === 0) return;
    const interval = setInterval(() => {
      if (!dragging) next();
    }, 3000);
    return () => clearInterval(interval);
  }, [dragging, next, total]);

  // ── Drag / swipe ──
  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX;
    setDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging || dragStart.current === null) return;
    const delta = e.clientX - dragStart.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) {
        next();
      } else {
        prev();
      }
    }
    dragStart.current = null;
    setDragging(false);
  };

  // keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  if (total === 0) return null;

  return (
    <section
      aria-label={t.home.carouselAria}
      className="relative w-full overflow-hidden py-13 md:py-0"
    >
      <div
        ref={containerRef}
        className={cn(
          "relative flex items-center justify-center",
          "h-[560px] md:h-[620px]",
          dragging ? "cursor-grabbing" : "cursor-grab",
        )}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="region"
        aria-live="polite"
      >
        {packages.map((pkg, idx) => {
          const offset = idx - active;
          const isActive = offset === 0;

          const normOffset =
            offset > 1 ? offset - total : offset < -1 ? offset + total : offset;

          const translateX = normOffset * 40;
          const scale = isActive ? 1.1 : 1;
          const zIndex = isActive ? 20 : 10 - Math.abs(normOffset);
          const opacity = Math.abs(normOffset) > 1 ? 0 : 1;

          return (
            <article
              key={pkg.package_id}
              aria-label={`${pkg.name} ${t.home.planAria}`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => !dragging && setActive(idx)}
              style={{
                transform: `translateX(${translateX}%) scale(${scale})`,
                zIndex,
                opacity,
                transition: dragging
                  ? "none"
                  : "transform 0.45s cubic-bezier(0.34,1.2,0.64,1), opacity 0.35s ease",
              }}
              className={cn(
                "absolute w-[80%] max-w-[320px]! md:max-w-[360px]!",
                isActive ? "pointer-events-auto" : "pointer-events-none",
              )}
            >
              <OfferPlanCard package_data={pkg} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export { OfferPlanCarousel };

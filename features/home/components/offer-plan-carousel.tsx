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

  const slotStyles: Record<
    number,
    { translateX: number; scale: number; opacity: number; zIndex: number }
  > = {
    [-1]: { translateX: -68, scale: 0.92, opacity: 1, zIndex: 8 },
    [0]: { translateX: 0, scale: 1.06, opacity: 1, zIndex: 20 },
    [1]: { translateX: 54, scale: 0.94, opacity: 1, zIndex: 12 },
    [2]: { translateX: 84, scale: 0.9, opacity: 1, zIndex: 10 },
  };

  return (
    <section
      aria-label={t.home.carouselAria}
      className="relative w-full overflow-hidden py-13 md:py-10"
    >
      <div
        ref={containerRef}
        className={cn(
          "relative flex items-center justify-center",
          "h-[560px] md:h-[600px]",
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
          const stylePreset = slotStyles[normOffset];
          const isVisible = Boolean(stylePreset);
          const translateX = stylePreset?.translateX ?? 0;
          const scale = stylePreset?.scale ?? 0.88;
          const zIndex = stylePreset?.zIndex ?? 0;
          const opacity = stylePreset?.opacity ?? 0;

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
                "absolute left-1/2 w-[80%] max-w-[320px]! -translate-x-1/2 md:max-w-[310px]!",
                isVisible ? "pointer-events-auto" : "pointer-events-none",
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

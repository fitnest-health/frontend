"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { OfferPlanCard } from "@/components/common/offer-section/offer-plan-card";

// Extend with your real plan data shape
const PLANS = [
  { id: "starter", label: "Starter" },
  { id: "premium", label: "Premium" },
  { id: "elite", label: "Elite" },
  
];

const OfferPlanCarousel = () => {
  const [active, setActive] = useState(1); // middle card active by default
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = PLANS.length;

  const prev = useCallback(
    () => setActive((i) => (i - 1 + total) % total),
    [total],
  );
  const next = useCallback(() => setActive((i) => (i + 1) % total), [total]);

  // ── Autoplay ──────────────────────────────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      if (!dragging) next();
    }, 3000);
    return () => clearInterval(interval);
  }, [dragging, next]);

  // ── Drag / swipe ──────────────────────────────────────────────
  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX;
    setDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging || dragStart.current === null) return;
    const delta = e.clientX - dragStart.current;
    if (Math.abs(delta) > 40) delta < 0 ? next() : prev();
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

  return (
    <section
      aria-label="Abunəlik planları karuseli"
      className="relative w-full"
    >
      {/* ── Card stage ─────────────────────────────────────────── */}
      <div
        ref={containerRef}
        className={cn(
          "relative flex items-center justify-center",
          "h-[560px] md:h-[620px]", // fixed height so absolute cards have a container
          dragging ? "cursor-grabbing" : "cursor-grab",
        )}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="region"
        aria-live="polite"
      >
        {PLANS.map((plan, idx) => {
          const offset = idx - active; // -1, 0, +1 (with wrap handling)
          const isActive = offset === 0;

          // Normalise offset for wrapping: keep it in [-1, 1]
          const normOffset =
            offset > 1 ? offset - total : offset < -1 ? offset + total : offset;

          // Visual transforms
          const translateX = normOffset * 40; // % shift per slot
          const scale = isActive ? 1.10 : 1;
          const zIndex = isActive ? 20 : 10 - Math.abs(normOffset);
          const opacity = Math.abs(normOffset) > 1 ? 0 : 1;

          return (
            <article
              key={plan.id}
              aria-label={`${plan.label} abunəlik planı`}
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
              <OfferPlanCard />
            </article>
          );
        })}
      </div>

      {/* ── Navigation buttons ─────────────────────────────────── */}
      <div
        className="flex items-center justify-center gap-4 mt-4"
        role="group"
        aria-label="Karusel idarəetməsi"
      >
        {/* 
        <button
          onClick={prev}
          aria-label="Əvvəlki plan"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700",
            "text-neutral-300 transition-all hover:border-primary-500 hover:text-primary-400",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
          )}
        >
          <ChevronLeft className="size-5" aria-hidden />
        </button> */}

        {/* Dot indicators */}
        {/* <div className="flex gap-2" role="tablist" aria-label="Plan seçimi">
          {PLANS.map((plan, idx) => (
            <button
              key={plan.id}
              role="tab"
              aria-selected={active === idx}
              aria-label={`${plan.label} planına keç`}
              onClick={() => setActive(idx)}
              className={cn(
                "rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                active === idx
                  ? "w-6 h-2 bg-primary-500"
                  : "w-2 h-2 bg-neutral-600 hover:bg-neutral-400",
              )}
            />
          ))}
        </div> */}

        {/* <button
          onClick={next}
          aria-label="Növbəti plan"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700",
            "text-neutral-300 transition-all hover:border-primary-500 hover:text-primary-400",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
          )}
        >
          <ChevronRight className="size-5" aria-hidden />
        </button> */}
      </div>
    </section>
  );
};

export { OfferPlanCarousel };
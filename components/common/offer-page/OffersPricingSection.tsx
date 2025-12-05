"use client";

import { Fragment, useState } from "react";
import { Check, X } from "lucide-react";

import Container from "@/components/common/Container";
import {
  defaultPeriodOptions,
  offerPlans,
  offerToneStylesByPlanId,
} from "@/components/common/offer-section/offer-config";
import { OfferPeriodToggle } from "@/components/common/offer-section/offer-period-toggle";
import { type BillingPeriod } from "@/components/common/offer-section/offers.types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  pricingPlanMeta,
  pricingPriceOverrides,
  pricingRows,
} from "@/components/common/offer-page/offer-pricing-config";

const cardGridColumns = "repeat(4, minmax(240px, 1fr))";
const mobileAccentBorderByPlanId: Record<string, string> = {
  standard:
    "linear-gradient(99.34deg, rgba(14,41,61,0) -3.57%, #154766 90.37%)",
  gold: "linear-gradient(100.75deg, rgba(231,183,95,0) -0.32%, #F8D57E 91.32%)",
  premium:
    "linear-gradient(102.24deg, rgba(229,232,236,0) 4.05%, #9BAAC7 90.14%)",
};

const OffersPricingSection = () => {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");
  const [expandedPlanId, setExpandedPlanId] = useState<string | null>(null);
  const rowsCount = pricingRows.length + 1;

  const handleTogglePlan = (planId: string) => {
    setExpandedPlanId((current) => (current === planId ? null : planId));
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 ">
      <Container>
        <div className="flex flex-col items-center gap-10">
          <OfferPeriodToggle
            value={period}
            options={defaultPeriodOptions}
            onChange={setPeriod}
            className="mx-auto w-full max-w-[320px] sm:max-w-[360px] md:max-w-[420px]"
          />

          <div className="hidden w-full overflow-x-auto rounded-[36px] border border-white/8 bg-[#111729]/80 shadow-[0_40px_120px_rgba(3,12,29,0.45)] lg:block">
            <div
              className="relative grid min-w-[900px] items-stretch gap-x-6"
              style={{ gridTemplateColumns: cardGridColumns }}
            >
              <div
                aria-hidden
                className="pointer-events-none z-0 rounded-4xl border border-white/10  bg-[#111729]/80"
                style={{
                  gridColumn: "1 / 2",
                  gridRow: `1 / span ${rowsCount}`,
                }}
              />
              {offerPlans.map((plan, columnIndex) => (
                <div
                  key={`${plan.id}-background`}
                  aria-hidden
                  className={cn(
                    "pointer-events-none z-0 rounded-4xl border border-white/10 bg-[#111729]/80"
                  )}
                  style={{
                    gridColumn: `${columnIndex + 2} / ${columnIndex + 3}`,
                    gridRow: `1 / span ${rowsCount}`,
                  }}
                />
              ))}

              <div
                className="relative z-10 flex h-full flex-col gap-6 border-b border-white/10 p-6 text-left"
                style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}
              >
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                  *Aylıq giriş limiti hər ay avtomatik yenilənir.
                </p>
                <div className="space-y-3">
                  <span className="text-b1 font-semibold text-primary-400">
                    FitNest
                  </span>
                  <h2 className="text-h6 font-semibold text-neutral-50 sm:text-h5">
                    planlarında səni nələr gözləyir?
                  </h2>
                </div>
              </div>

              {offerPlans.map((plan, columnIndex) => {
                const styles = offerToneStylesByPlanId[plan.id];
                const planPrice =
                  pricingPriceOverrides[period]?.[plan.id] ??
                  plan.price[period].amount;
                const highlight = pricingPlanMeta[plan.id].highlight?.[period];
                const perPeriodCopy =
                  pricingPlanMeta[plan.id].perPeriod[period];
                const hasPerPeriodCopy = Boolean(perPeriodCopy);

                return (
                  <div
                    key={`${plan.id}-header`}
                    className="relative z-10 flex h-full flex-col items-center gap-4 border-b border-white/10 p-6 text-center"
                    style={{
                      gridColumn: `${columnIndex + 2} / ${columnIndex + 3}`,
                      gridRow: "1 / 2",
                    }}
                  >
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-6 py-1 text-b1 font-semibold uppercase tracking-[0.12em] text-neutral-100",
                        styles.accent
                      )}
                    >
                      {plan.name}
                    </span>
                    <p
                      className={cn(
                        "text-xs font-medium text-primary-200",
                        !highlight && "invisible"
                      )}
                    >
                      {highlight ?? "\u00A0"}
                    </p>
                    <div className="space-y-1">
                      <p className="text-h4 font-semibold leading-tight text-neutral-50 sm:text-h3">
                        {planPrice}
                        <span className="ml-1 text-b1 font-medium text-neutral-300">
                          {plan.price[period].suffix}
                        </span>
                      </p>
                      <p
                        className={cn(
                          "text-sm font-medium text-primary-200",
                          !hasPerPeriodCopy && "invisible"
                        )}
                      >
                        {perPeriodCopy || "\u00A0"}
                      </p>
                    </div>
                    <Button size="lg" className="w-full max-w-[200px]">
                      İndi başla
                    </Button>
                  </div>
                );
              })}

              {pricingRows.map((row, rowIndex) => (
                <Fragment key={row.id}>
                  <div
                    className={cn(
                      "relative z-10 flex h-full flex-col justify-center border-t border-white/10 px-6 py-5 text-left",
                      rowIndex === pricingRows.length - 1 && "rounded-bl-4xl"
                    )}
                    style={{
                      gridColumn: "1 / 2",
                      gridRow: `${rowIndex + 2} / ${rowIndex + 3}`,
                    }}
                  >
                    <span className="text-b2 font-medium text-neutral-100">
                      {row.label}
                    </span>
                  </div>

                  {offerPlans.map((plan, columnIndex) => {
                    const cell = row.plans[plan.id][period];
                    const included = cell.icon === "check";
                    const Icon = included ? Check : X;
                    const text = cell.text;
                    const showText = Boolean(text);
                    const showIcon = !showText;

                    return (
                      <div
                        key={`${row.id}-${plan.id}`}
                        className={cn(
                          "relative z-10 flex h-full items-center justify-center border-t border-white/10 px-4 py-5 text-center",
                          showIcon && "gap-3",
                          rowIndex === pricingRows.length - 1 &&
                            columnIndex === offerPlans.length - 1 &&
                            "rounded-br-4xl"
                        )}
                        style={{
                          gridColumn: `${columnIndex + 2} / ${columnIndex + 3}`,
                          gridRow: `${rowIndex + 2} / ${rowIndex + 3}`,
                        }}
                      >
                        {showIcon && (
                          <span
                            className={cn(
                              "grid size-7 place-items-center rounded-full border text-sm",
                              included
                                ? "border-primary-400/50 bg-primary-500/15 text-primary-200"
                                : "border-rose-500/40 bg-rose-500/10 text-rose-300"
                            )}
                          >
                            <Icon className="size-4" strokeWidth={2.2} />
                          </span>
                        )}
                        {showText && (
                          <p className="min-h-6 text-sm font-medium text-neutral-100">
                            {text}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </Fragment>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-8 lg:hidden">
            {offerPlans.map((plan) => {
              const styles = offerToneStylesByPlanId[plan.id];
              const planPrice =
                pricingPriceOverrides[period]?.[plan.id] ??
                plan.price[period].amount;
              const highlight = pricingPlanMeta[plan.id].highlight?.[period];
              const perPeriodCopy = pricingPlanMeta[plan.id].perPeriod[period];
              const hasPerPeriodCopy = Boolean(perPeriodCopy);
              const isExpanded = expandedPlanId === plan.id;
              const borderImage = mobileAccentBorderByPlanId[plan.id];

              return (
                <div
                  key={`${plan.id}-mobile`}
                  className={cn(
                    "transition-all",
                    isExpanded
                      ? "rounded-[30px] p-0.5"
                      : "rounded-[30px] border border-white/10 bg-[#111729]/80"
                  )}
                  style={
                    isExpanded ? { backgroundImage: borderImage } : undefined
                  }
                >
                  <div
                    className={cn(
                      "rounded-[28px] bg-[#0B1524]/95",
                      isExpanded ? "border border-white/10" : ""
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => handleTogglePlan(plan.id)}
                      aria-expanded={isExpanded}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <div className="flex min-w-0 flex-col gap-2">
                        <span
                          className={cn(
                            "inline-flex items-center rounded-full px-4 py-1 text-b2 font-semibold uppercase tracking-[0.12em] text-neutral-100",
                            styles.accent
                          )}
                        >
                          {plan.name}
                        </span>
                        {highlight && (
                          <span className="text-xs font-medium text-primary-200">
                            {highlight}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-h5 font-semibold leading-none text-neutral-50">
                          {planPrice}
                          <span className="ml-1 text-b2 font-medium text-neutral-300">
                            {plan.price[period].suffix}
                          </span>
                        </p>
                        {hasPerPeriodCopy && (
                          <span className="mt-1 text-xs font-medium text-primary-200">
                            {perPeriodCopy}
                          </span>
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="border-t border-white/10">
                        <ul className="flex flex-col divide-y divide-white/10 px-5 pb-2 pt-1">
                          {pricingRows.map((row) => {
                            const cell = row.plans[plan.id][period];
                            const included = cell.icon === "check";
                            const Icon = included ? Check : X;
                            const text = cell.text;
                            const showText = Boolean(text);
                            const showIcon = !showText;

                            return (
                              <li
                                key={`${row.id}-${plan.id}-mobile`}
                                className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-3 py-3 text-sm"
                              >
                                <p className="font-medium text-neutral-200">
                                  {row.label}
                                </p>
                                <div className="flex items-center justify-end gap-3">
                                  {showIcon && (
                                    <span
                                      className={cn(
                                        "grid size-7 place-items-center rounded-full border text-sm",
                                        included
                                          ? "border-primary-400/50 bg-primary-500/15 text-primary-200"
                                          : "border-rose-500/40 bg-rose-500/10 text-rose-300"
                                      )}
                                    >
                                      <Icon
                                        className="size-4"
                                        strokeWidth={2.2}
                                      />
                                    </span>
                                  )}
                                  {showText && (
                                    <p className="max-w-[200px] text-right font-medium text-neutral-100">
                                      {text}
                                    </p>
                                  )}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export { OffersPricingSection };

"use client";

import { ChartNoAxesCombined } from "lucide-react";
import { useMemo } from "react";
import { BMI_MAX, BMI_MIN, getBmiMeta } from "../lib/bmi-utils";
import { useI18n } from "@/lib/i18n/provider";

interface BmiResultCardProps {
  bmiResult: number | null;
}

const BmiResultCard = ({ bmiResult }: BmiResultCardProps) => {
  const { t } = useI18n();
  const hasResult = bmiResult !== null;
  const bmiMeta = bmiResult === null ? null : getBmiMeta(bmiResult);
  const bmiLabels = {
    underweight: t.bmi.underweight,
    normal: t.bmi.normal,
    overweight: t.bmi.overweight,
    obesity: t.bmi.obesity,
  } as const;

  const markerLeft = useMemo(() => {
    if (bmiResult === null) return 74;
    const clamped = Math.min(BMI_MAX, Math.max(BMI_MIN, bmiResult));
    const ratio = (clamped - BMI_MIN) / (BMI_MAX - BMI_MIN);
    return Math.round(ratio * (252 - 4));
  }, [bmiResult]);

  return (
    <div className="h-[489px] w-full rounded-2xl border border-[#C6A7F5] bg-[#0F1320] px-2 md:w-[300px]">
      {hasResult && bmiMeta ? (
        <div className="flex h-full flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg leading-7 font-normal text-[#99A1AF]">
              {t.bmi.resultLabel}
            </p>
            <p className="text-center text-[60px] leading-h1 font-bold text-white">
              {bmiResult}
            </p>
            <div
              className={`inline-flex h-11 min-w-[168px] items-center justify-center rounded-4xl px-2.5 ${bmiMeta.chipClass}`}
            >
              <span className="text-sm leading-5 font-bold text-[#FCFCFD]">
                {bmiLabels[bmiMeta.key]}
              </span>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="relative mx-auto h-4 w-[252px] overflow-hidden rounded-full bg-[#364153]">
              <div className="absolute inset-0 opacity-80 [background:linear-gradient(90deg,#3B82F6_0%,#3B82F6_14%,#10B981_14%,#10B981_40%,#F59E0B_40%,#F59E0B_60%,#EF4444_60%,#EF4444_100%)]" />
              <div
                className="absolute top-0 h-4 w-1 bg-white shadow-[0_0_10px_0_rgba(255,255,255,0.8)]"
                style={{ left: `${markerLeft}px` }}
              />
            </div>

            <div className="mx-auto mt-[13px] grid w-[252px] grid-cols-4 gap-1 px-1 text-center text-b3 leading-4 text-[#6A7282]">
              <div>
                <p>{t.bmi.underweight}</p>
                <p>{"< 15"}</p>
              </div>
              <div>
                <p>{t.bmi.normal}</p>
                <p>18.5 - 24.9</p>
              </div>
              <div>
                <p>{t.bmi.overweight}</p>
                <p>24.9 - 29.9</p>
              </div>
              <div>
                <p>{t.bmi.obesity}</p>
                <p>{"> 30"}</p>
              </div>
            </div>
          </div>

          <p className="w-[207px] text-center text-sm leading-b3 text-[#D1D5DC]">
            {t.bmi.metaMessages[bmiMeta.key]}
          </p>
        </div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center opacity-50">
          <ChartNoAxesCombined className="size-16 text-[#00B4CC]" />
          <p className="mt-4 w-[234px] text-center text-base leading-6 text-[#CECFD2]">
            {t.bmi.noResult}
          </p>
        </div>
      )}
    </div>
  );
};

export default BmiResultCard;

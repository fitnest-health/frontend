"use client";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarDays, Ruler, Weight } from "lucide-react";
import {
  type Gender,
  formatDateDisplay,
  normalizeDecimalInput,
} from "../lib/bmi-utils";
import { useI18n } from "@/lib/i18n/provider";

interface BmiFormProps {
  weight: string;
  height: string;
  birthDate?: Date;
  gender: Gender;
  isFormValid: boolean;
  hasResult: boolean;
  onWeightChange: (value: string) => void;
  onHeightChange: (value: string) => void;
  onBirthDateChange: (date?: Date) => void;
  onGenderChange: (gender: Gender) => void;
  onCalculate: () => void;
}

const BmiForm = ({
  weight,
  height,
  birthDate,
  gender,
  isFormValid,
  hasResult,
  onWeightChange,
  onHeightChange,
  onBirthDateChange,
  onGenderChange,
  onCalculate,
}: BmiFormProps) => {
  const { t } = useI18n();
  const inputBorder = hasResult ? "border-[#B3B8DB]" : "border-[#373A41]";
  const genderBorder = hasResult ? "border-[#D5D9EB]" : "border-[#373A41]";

  return (
    <div className="w-full md:w-[391px]">
      <h2 className="text-h6 leading-h6 font-medium text-white">
        {t.bmi.params}
      </h2>

      <div className="mt-8 space-y-6">
        <div className="space-y-2">
          <label className="px-2 py-1 text-base leading-6 font-medium text-white">
            {t.bmi.weight} {hasResult ? "(kq)" : ""}
          </label>
          <div
            className={`flex h-[52px] items-center rounded-4xl border bg-[rgba(12,14,18,0.4)] py-1.5 pl-2 pr-4 ${inputBorder}`}
          >
            <span className="mr-3 flex size-[38px] items-center justify-center rounded-full bg-[#373A41]">
              <Weight className="size-[18px] text-[#00B4CC]" />
            </span>
            <input
              value={weight}
              onChange={(event) =>
                onWeightChange(normalizeDecimalInput(event.target.value))
              }
              placeholder={t.bmi.weight}
              inputMode="decimal"
              className="h-full w-full bg-transparent text-base leading-6 text-white placeholder:text-[#61656C] outline-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="px-2 py-1 text-base leading-6 font-medium text-white">
            {t.bmi.height} {hasResult ? "(sm)" : ""}
          </label>
          <div
            className={`flex h-[52px] items-center rounded-4xl border bg-[rgba(12,14,18,0.4)] py-1.5 pl-2 pr-4 ${inputBorder}`}
          >
            <span className="mr-3 flex size-[38px] items-center justify-center rounded-full bg-[#373A41]">
              <Ruler className="size-[18px] text-[#00B4CC]" />
            </span>
            <input
              value={height}
              onChange={(event) =>
                onHeightChange(normalizeDecimalInput(event.target.value))
              }
              placeholder={t.bmi.height}
              inputMode="decimal"
              className="h-full w-full bg-transparent text-base leading-6 text-white placeholder:text-[#61656C] outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[17px] sm:grid-cols-2">
          <div className="space-y-2">
            <label className="px-2 py-1 text-base leading-6 font-medium text-white">
              {t.bmi.birthDate}
            </label>
            <div
              className={`flex h-[52px] items-center rounded-4xl border bg-[rgba(12,14,18,0.4)] py-1.5 pl-2 pr-4 ${inputBorder}`}
            >
              <span className="mr-3 flex size-[38px] items-center justify-center rounded-full bg-[#373A41]">
                <CalendarDays className="size-[18px] text-[#00B4CC]" />
              </span>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={`h-full w-full text-left text-base leading-6 outline-none ${
                      birthDate ? "text-white" : "text-[#61656C]"
                    }`}
                  >
                    {birthDate
                      ? formatDateDisplay(birthDate)
                      : "dd.mm.yyyy"}
                  </button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={birthDate}
                    onSelect={onBirthDateChange}
                    captionLayout="dropdown"
                    disabled={(date) => date > new Date()}
                    className="rounded-md"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <label className="px-2 py-1 text-base leading-6 font-medium text-white">
              {t.bmi.gender}
            </label>
            <div
              className={`flex h-[52px] items-center gap-2 rounded-[65px] border bg-[rgba(12,14,18,0.4)] p-1.5 ${genderBorder}`}
            >
              <button
                type="button"
                onClick={() => onGenderChange("male")}
                className={`h-[38px] w-1/2 rounded-4xl text-base leading-6 font-medium transition ${
                  gender === "male"
                    ? "bg-[#00B4CC] text-white"
                    : "text-white/70"
                }`}
              >
                {t.bmi.male}
              </button>
              <button
                type="button"
                onClick={() => onGenderChange("female")}
                className={`h-[38px] w-1/2 rounded-4xl text-base leading-6 font-medium transition ${
                  gender === "female"
                    ? "bg-[#00B4CC] text-white"
                    : "text-white/70"
                }`}
              >
                {t.bmi.female}
              </button>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onCalculate}
          disabled={!isFormValid}
          className={`h-[54px] w-full rounded-4xl text-sm leading-5 font-medium text-[#FAFAFA] transition ${
            isFormValid ? "bg-[#00B4CC]" : "bg-[#94979C]"
          }`}
        >
          {t.bmi.calculate}
        </button>
      </div>
    </div>
  );
};

export default BmiForm;

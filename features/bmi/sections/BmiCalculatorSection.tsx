"use client";

import { useMemo, useState } from "react";
import BmiFactsSidebar from "../components/BmiFactsSidebar";
import BmiForm from "../components/BmiForm";
import BmiResultCard from "../components/BmiResultCard";
import type { Gender } from "../lib/bmi-utils";
import { useCalculateBmi } from "../hooks/use-calculate-bmi";

const formatDate = (date: Date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const BmiCalculatorSection = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [birthDate, setBirthDate] = useState<Date>();
  const [gender, setGender] = useState<Gender>("female");

  const { mutate, data: bmiData, isPending } = useCalculateBmi();

  const bmiResult = bmiData?.bmi ? Number(bmiData.bmi.toFixed(1)) : null;

  const isFormValid = useMemo(() => {
    const weightValue = Number(weight);
    const heightValue = Number(height);

    if (!birthDate) return false;
    if (!Number.isFinite(weightValue) || weightValue <= 0) return false;
    if (!Number.isFinite(heightValue) || heightValue <= 0) return false;

    return true;
  }, [weight, height, birthDate]);

  const hasResult = bmiResult !== null;

  const handleCalculate = () => {
    if (!isFormValid || !birthDate) return;

    mutate({
      height: Number(height),
      weight: Number(weight),
      birthDate: formatDate(birthDate),
      gender,
    });
  };

  return (
    <div className="mt-12 grid grid-cols-1 gap-6 xl:mt-[72px] xl:grid-cols-[779px_477px] xl:gap-6">
      <div className="rounded-xl bg-[#111729] p-6 xl:h-[539px]">
        <div className="flex h-full flex-col gap-8 md:flex-row md:gap-10">
          <BmiForm
            weight={weight}
            height={height}
            birthDate={birthDate}
            gender={gender}
            isFormValid={isFormValid && !isPending}
            hasResult={hasResult}
            onWeightChange={setWeight}
            onHeightChange={setHeight}
            onBirthDateChange={setBirthDate}
            onGenderChange={setGender}
            onCalculate={handleCalculate}
          />
          <BmiResultCard bmiResult={bmiResult} />
        </div>
      </div>

      <BmiFactsSidebar />
    </div>
  );
};

export default BmiCalculatorSection;

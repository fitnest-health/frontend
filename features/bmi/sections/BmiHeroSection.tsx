"use client";

import { useI18n } from "@/lib/i18n/provider";

const BmiHeroSection = () => {
  const { t } = useI18n();

  return (
    <header className="mx-auto w-full max-w-[1062px] text-center">
      <h1 className="text-h5 leading-h5 font-medium text-white md:text-h1 md:leading-h1">
        {t.bmi.heroTitle} <span className="text-[#00E1FF]">(BMI)</span>
      </h1>
      <p className="mt-[18px] text-[22px] leading-[34px] font-normal text-[#FAFAFA] md:text-h6 md:leading-h6">
        {t.bmi.heroDescription}
      </p>
    </header>
  );
};

export default BmiHeroSection;

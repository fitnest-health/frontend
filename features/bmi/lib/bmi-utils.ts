export type Gender = "male" | "female";

export const BMI_MIN = 10;
export const BMI_MAX = 40;

export const normalizeDecimalInput = (value: string) =>
  value.replace(/[^\d.,]/g, "").replace(",", ".");

export const formatDateDisplay = (date?: Date) => {
  if (!date) return "";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  return `${day}.${month}.${year}`;
};

export const getBmiMeta = (bmi: number) => {
  if (bmi < 18.5) {
    return {
      key: "underweight" as const,
      chipClass: "bg-[#2B7FFF]",
    };
  }

  if (bmi <= 24.9) {
    return {
      key: "normal" as const,
      chipClass: "bg-[#4F933E]",
    };
  }

  if (bmi <= 29.9) {
    return {
      key: "overweight" as const,
      chipClass: "bg-[#F59E0B]",
    };
  }

  return {
    key: "obesity" as const,
    chipClass: "bg-[#EF4444]",
  };
};

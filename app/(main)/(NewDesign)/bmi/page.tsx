"use client";

import Container from "@/components/common/Container";
import {
  BadgeCheck,
  CalendarDays,
  ChartNoAxesCombined,
  CircleAlert,
  Dumbbell,
  HeartPulse,
  Ruler,
  Utensils,
  Weight,
} from "lucide-react";
import { useMemo, useState } from "react";

type Gender = "male" | "female";

const BMI_MIN = 10;
const BMI_MAX = 40;

const normalizeDecimalInput = (value: string) =>
  value.replace(/[^\d.,]/g, "").replace(",", ".");

const getBmiMeta = (bmi: number) => {
  if (bmi < 18.5) {
    return {
      label: "Az Çəki",
      chipClass: "bg-[#2B7FFF]",
      message: "Tövsiyə: qidalanma və məşq planını balanslaşdırın.",
    };
  }

  if (bmi <= 24.9) {
    return {
      label: "Normal Çəki",
      chipClass: "bg-[#4F933E]",
      message: "Təbriklər! Çəkiniz idealdır. Bu formanı qoruyub saxlayın.",
    };
  }

  if (bmi <= 29.9) {
    return {
      label: "Artıq Çəki",
      chipClass: "bg-[#F59E0B]",
      message: "Tövsiyə: gündəlik hərəkəti artırın və qidalanmanı izləyin.",
    };
  }

  return {
    label: "Piylənmə",
    chipClass: "bg-[#EF4444]",
    message: "Mütəxəssis məsləhəti ilə fərdi plan qurmağınız tövsiyə edilir.",
  };
};

const infoItems = [
  {
    title: "BKİ Nədir?",
    description:
      "(BKİ) boyunuza görə çəkinizin uyğun olub-olmadığını qiymətləndirən sadə bir ölçüdür.",
    icon: <BadgeCheck className="size-6 text-[#FACC15]" />,
  },
  {
    title: "Risklər",
    description:
      "Yüksək BKİ ürək xəstəlikləri, diabet və digər sağlamlıq problemləri riskini artıra bilər.",
    icon: <CircleAlert className="size-6 text-[#F43F5E]" />,
  },
  {
    title: "Sağlam Aralıq",
    description:
      "18.5 - 24.9 arası BKİ normal hesab olunur. Bu aralıqda qalmaq uzunömürlülüyü artırır.",
    icon: <HeartPulse className="size-6 text-[#22C55E]" />,
  },
] as const;

const tips = [
  {
    title: "Fiziki aktivlik",
    description:
      "Həftədə ən azı 150 dəqiqə orta intensivlikli fiziki fəaliyyət ürək sağlamlığını qorumağa kömək edir.",
    icon: <Dumbbell className="size-[18px] text-[#00B4CC]" />,
  },
  {
    title: "Balanslı Qidalanma",
    description:
      "Gündəlik rasionunuzda zülal, karbohidrat və yağların balansını qorumaq çəkinizi nəzarətdə saxlamaq üçün vacibdir.",
    icon: <Utensils className="size-[18px] text-[#FACC15]" />,
  },
] as const;

const BmiPage = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState<Gender>("female");
  const [bmiResult, setBmiResult] = useState<number | null>(null);

  const isFormValid = useMemo(() => {
    const weightValue = Number(weight);
    const heightValue = Number(height);

    if (!birthDate.trim()) return false;
    if (!Number.isFinite(weightValue) || weightValue <= 0) return false;
    if (!Number.isFinite(heightValue) || heightValue <= 0) return false;

    return true;
  }, [weight, height, birthDate]);

  const hasResult = bmiResult !== null;
  const bmiMeta = bmiResult === null ? null : getBmiMeta(bmiResult);

  const markerLeft = useMemo(() => {
    if (bmiResult === null) return 74;
    const clamped = Math.min(BMI_MAX, Math.max(BMI_MIN, bmiResult));
    const ratio = (clamped - BMI_MIN) / (BMI_MAX - BMI_MIN);
    return Math.round(ratio * (252 - 4));
  }, [bmiResult]);

  const inputBorder = hasResult ? "border-[#B3B8DB]" : "border-[#373A41]";
  const genderBorder = hasResult ? "border-[#D5D9EB]" : "border-[#373A41]";

  const calculateBmi = () => {
    if (!isFormValid) return;

    const weightValue = Number(weight);
    const heightValue = Number(height);
    const heightInMeters = heightValue / 100;
    const bmi = weightValue / (heightInMeters * heightInMeters);

    setBmiResult(Number(bmi.toFixed(1)));
  };

  return (
    <div className="relative overflow-hidden bg-[#0D0F1C]">
      <div className="pointer-events-none absolute left-1/2 top-[90px] h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,139,255,0.24),rgba(0,139,255,0.08)_35%,rgba(13,15,28,0)_75%)]" />

      <Container className="pb-16 pt-12 md:pb-24 md:pt-[200px]">
        <section className="mx-auto w-full max-w-[1280px]">
          <header className="mx-auto w-full max-w-[1062px] text-center">
            <h1 className="text-[36px] leading-[52px] font-medium text-white md:text-[52px] md:leading-[80px]">
              Bədən Kütlə İndeksi <span className="text-[#00E1FF]">(BMİ)</span>
            </h1>
            <p className="mt-[18px] text-[22px] leading-[34px] font-normal text-[#FAFAFA] md:text-[30px] md:leading-[46px]">
              Sağlamlığınız üçün ideal çəkinizi öyrənin. Boy və çəkinizə əsasən
              bədən kütlə indeksinizi hesablayın və sağlam həyat tərzinə ilk
              addımı atın.
            </p>
          </header>

          <div className="mt-12 grid grid-cols-1 gap-6 xl:mt-[72px] xl:grid-cols-[779px_477px] xl:gap-6">
            <div className="rounded-[12px] bg-[#111729] p-6 xl:h-[539px]">
              <div className="flex h-full flex-col gap-8 md:flex-row md:gap-10">
                <div className="w-full md:w-[391px]">
                  <h2 className="text-[30px] leading-[46px] font-medium text-white">
                    Parametrlər
                  </h2>

                  <div className="mt-8 space-y-6">
                    <div className="space-y-2">
                      <label className="px-2 py-1 text-base leading-6 font-medium text-white">
                        Çəki {hasResult ? "(kq)" : ""}
                      </label>
                      <div
                        className={`flex h-[52px] items-center rounded-[32px] border bg-[rgba(12,14,18,0.4)] py-[6px] pl-[8px] pr-4 ${inputBorder}`}
                      >
                        <span className="mr-3 flex size-[38px] items-center justify-center rounded-full bg-[#373A41]">
                          <Weight className="size-[18px] text-[#00B4CC]" />
                        </span>
                        <input
                          value={weight}
                          onChange={(event) =>
                            setWeight(normalizeDecimalInput(event.target.value))
                          }
                          placeholder="Çəkiniz"
                          inputMode="decimal"
                          className="h-full w-full bg-transparent text-base leading-6 text-white placeholder:text-[#61656C] outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="px-2 py-1 text-base leading-6 font-medium text-white">
                        Boy {hasResult ? "(sm)" : ""}
                      </label>
                      <div
                        className={`flex h-[52px] items-center rounded-[32px] border bg-[rgba(12,14,18,0.4)] py-[6px] pl-[8px] pr-4 ${inputBorder}`}
                      >
                        <span className="mr-3 flex size-[38px] items-center justify-center rounded-full bg-[#373A41]">
                          <Ruler className="size-[18px] text-[#00B4CC]" />
                        </span>
                        <input
                          value={height}
                          onChange={(event) =>
                            setHeight(normalizeDecimalInput(event.target.value))
                          }
                          placeholder="Boyunuz"
                          inputMode="decimal"
                          className="h-full w-full bg-transparent text-base leading-6 text-white placeholder:text-[#61656C] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-[17px] sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="px-2 py-1 text-base leading-6 font-medium text-white">
                          Doğum tarixi
                        </label>
                        <div
                          className={`flex h-[52px] items-center rounded-[32px] border bg-[rgba(12,14,18,0.4)] py-[6px] pl-[8px] pr-4 ${inputBorder}`}
                        >
                          <span className="mr-3 flex size-[38px] items-center justify-center rounded-full bg-[#373A41]">
                            <CalendarDays className="size-[18px] text-[#00B4CC]" />
                          </span>
                          <input
                            value={birthDate}
                            onChange={(event) => setBirthDate(event.target.value)}
                            placeholder="Gün / Ay / İl"
                            className="h-full w-full bg-transparent text-base leading-6 text-white placeholder:text-[#61656C] outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="px-2 py-1 text-base leading-6 font-medium text-white">
                          Cinsiyyət
                        </label>
                        <div
                          className={`flex h-[52px] items-center gap-2 rounded-[65px] border bg-[rgba(12,14,18,0.4)] p-[6px] ${genderBorder}`}
                        >
                          <button
                            type="button"
                            onClick={() => setGender("male")}
                            className={`h-[38px] w-1/2 rounded-[32px] text-base leading-6 font-medium transition ${
                              gender === "male"
                                ? "bg-[#00B4CC] text-white"
                                : "text-white/70"
                            }`}
                          >
                            Kişi
                          </button>
                          <button
                            type="button"
                            onClick={() => setGender("female")}
                            className={`h-[38px] w-1/2 rounded-[32px] text-base leading-6 font-medium transition ${
                              gender === "female"
                                ? "bg-[#00B4CC] text-white"
                                : "text-white/70"
                            }`}
                          >
                            Qadın
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={calculateBmi}
                      disabled={!isFormValid}
                      className={`h-[54px] w-full rounded-[32px] text-sm leading-5 font-medium text-[#FAFAFA] transition ${
                        isFormValid ? "bg-[#00B4CC]" : "bg-[#94979C]"
                      }`}
                    >
                      Hesabla
                    </button>
                  </div>
                </div>

                <div className="h-[489px] w-full rounded-[16px] border border-[#C6A7F5] bg-[#0F1320] px-2 md:w-[300px]">
                  {hasResult && bmiMeta ? (
                    <div className="flex h-full flex-col items-center justify-center gap-8">
                      <div className="flex flex-col items-center gap-2">
                        <p className="text-lg leading-7 font-normal text-[#99A1AF]">
                          Sizin BKİ göstəriciniz:
                        </p>
                        <p className="text-center text-[60px] leading-[80px] font-bold text-white">
                          {bmiResult}
                        </p>
                        <div
                          className={`inline-flex h-11 min-w-[168px] items-center justify-center rounded-[32px] px-[10px] ${bmiMeta.chipClass}`}
                        >
                          <span className="text-sm leading-5 font-bold text-[#FCFCFD]">
                            {bmiMeta.label}
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

                        <div className="mx-auto mt-[13px] grid w-[252px] grid-cols-4 gap-1 px-1 text-center text-[12px] leading-4 text-[#6A7282]">
                          <div>
                            <p>Az çəki</p>
                            <p>{"< 15"}</p>
                          </div>
                          <div>
                            <p>Normal</p>
                            <p>18.5 - 24.9</p>
                          </div>
                          <div>
                            <p>Artıq çəki</p>
                            <p>24.9 - 29.9</p>
                          </div>
                          <div>
                            <p>Piylənmə</p>
                            <p>{"> 30"}</p>
                          </div>
                        </div>
                      </div>

                      <p className="w-[207px] text-center text-sm leading-[18px] text-[#D1D5DC]">
                        {bmiMeta.message}
                      </p>
                    </div>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center opacity-50">
                      <ChartNoAxesCombined className="size-16 text-[#00B4CC]" />
                      <p className="mt-4 w-[234px] text-center text-base leading-6 text-[#CECFD2]">
                        Nəticəni görmək üçün parametrləri daxil edib
                        &quot;Hesabla&quot; düyməsini sıxın.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <aside className="rounded-[32px] bg-[#111729] p-6 xl:h-[539px]">
              <h3 className="text-[30px] leading-[46px] font-medium text-white">
                Faktlar &amp; tövsiyyələr
              </h3>
              <div className="mt-[31px] space-y-5">
                {infoItems.map((item) => (
                  <div
                    key={item.title}
                    className="h-[122px] rounded-[24px] border border-[#C6A7F5] px-4 py-3"
                  >
                    <p className="flex items-center gap-3 text-lg leading-7 font-semibold text-white">
                      {item.icon}
                      {item.title}
                    </p>
                    <p className="mt-2 text-base leading-6 text-white">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-[67px] grid grid-cols-1 gap-7 xl:grid-cols-2 xl:gap-7">
            {tips.map((tip) => (
              <div
                key={tip.title}
                className="rounded-[24px] border border-[#C6A7F5] p-4 xl:h-[122px]"
              >
                <p className="flex items-center gap-3 text-lg leading-7 font-semibold text-white">
                  <span className="flex size-[38px] items-center justify-center rounded-[20.5px] bg-[rgba(14,41,61,0.3)]">
                    {tip.icon}
                  </span>
                  {tip.title}
                </p>
                <p className="mt-4 text-base leading-6 text-white">{tip.description}</p>
              </div>
            ))}
          </div>

          <div className="pointer-events-none mt-8 flex justify-end xl:mt-14">
            <div className="flex size-[36px] items-center justify-center rounded-full border border-[#00B4CC] text-sm text-[#00B4CC]">
              ↑
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default BmiPage;

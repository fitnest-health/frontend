import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import React from "react";

type FitnessCenterDetailsProps = {
  params: Promise<{ slug: string }>;
};

const gallery = [
  "/images/mesqZaliSecHeroImg.jpg",
  "/images/hallCaruselImg1.jpg",
  "/images/GymBanner.jpg",
  "/images/abunelik.webp",
  "/images/third.png",
];

const coaches = new Array(4).fill(null).map((_, index) => ({
  id: `coach-${index + 1}`,
  name: "Elnur Məmmədov",
  role: "Personal trener",
}));

const socialIcons = [
  "/icons/facebook-black.svg",
  "/icons/instagram-black.svg",
  "/icons/linkedin-black.svg",
];

const mapImageUrl =
  "https://www.figma.com/api/mcp/asset/9997ce09-7d77-45e0-8957-e9667a01cf1b";

const FitnessCenterDetails = async ({ params }: FitnessCenterDetailsProps) => {
  const { slug } = await params;
  const fallbackName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const name = fallbackName || "ProFit Club";

  return (
    <Container className="pb-16 pt-12 md:pb-24 md:pt-50">
      <section className="space-y-8 md:space-y-10">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold leading-tight text-[#F5F8FF] md:text-[44px] md:leading-[66px]">
            {name}
          </h1>
          <p className="text-base font-medium leading-6 text-[#F5F8FF] md:text-2xl md:leading-9">
            Daha güclü, sağlam və enerjili olmaq üçün ideal məkan.
          </p>
        </div>

        <div className="space-y-5">
          <div className="relative h-[260px] overflow-hidden rounded-3xl md:h-[520px]">
            <Image
              src={gallery[0]}
              alt={`${name} main`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1280px"
            />

            <Button
              size="icon"
              className="absolute left-3 top-1/2 size-10 -translate-y-1/2 rounded-full bg-[rgba(14,41,61,0.3)] text-white hover:bg-[rgba(14,41,61,0.45)] md:left-5 md:size-14"
              aria-label="Əvvəlki şəkil"
            >
              <ChevronLeft className="size-6" />
            </Button>
            <Button
              size="icon"
              className="absolute right-3 top-1/2 size-10 -translate-y-1/2 rounded-full bg-[rgba(14,41,61,0.3)] text-white hover:bg-[rgba(14,41,61,0.45)] md:right-5 md:size-14"
              aria-label="Növbəti şəkil"
            >
              <ChevronRight className="size-6" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
            {gallery.slice(1).map((image, index) => (
              <div
                key={image}
                className={`relative h-[120px] overflow-hidden rounded-xl md:h-[180px] ${
                  index === 0 ? "ring-2 ring-[#C6A7F5]" : ""
                }`}
              >
                <Image
                  src={image}
                  alt={`${name} gallery ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 302px"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 rounded-[32px] border border-[#373A41] bg-[#111729] p-5 md:p-6">
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-[40px] md:leading-[60px]">
            Zal haqqında
          </h2>

          <div className="space-y-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p className="text-xl font-medium leading-10 text-[#00B4CC] md:text-[26px]">
                {name}
              </p>
              <div className="flex items-center gap-3">
                {socialIcons.map((iconPath) => (
                  <div
                    key={iconPath}
                    className="flex size-10 items-center justify-center rounded-full border border-[#C6A7F5] bg-[#ECECED]"
                  >
                    <Image
                      src={iconPath}
                      alt="social"
                      width={20}
                      height={20}
                      className="size-5"
                    />
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm font-medium leading-6 text-[#FAFAFA] md:text-base">
              ProFit Club geniş məşq zonaları, yenilənmiş avadanlıqlar və rahat
              mühit ilə həm yeni başlayanlar, həm də peşəkar idmançılar üçün
              ideal fitness məkanıdır. Zalımızda kardio trenajorları, sərbəst
              ağırlıqlar, funksional zona və stretching sahələri mövcuddur.
            </p>

            <div className="space-y-2">
              <p className="text-xl font-bold leading-8 text-[#FAFAFA]">
                Avadanlıqlar
              </p>
              <p className="text-sm font-medium leading-6 text-[#FAFAFA] md:text-base">
                Kardio trenajorları • Funksional zona • Squat rack •
                Dumbbell/barbell • Kabel trenajorları • Stretching sahəsi
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[26px] font-semibold leading-10 text-white">
              Məşqçilər
            </p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
              {coaches.map((coach) => (
                <article
                  key={coach.id}
                  className="flex h-[124px] items-center gap-2 rounded-2xl border border-[#C6A7F5] bg-[#0D0F1C] p-3"
                >
                  <div className="size-[72px] rounded-2xl bg-[#D9D9D9] md:size-[100px]" />
                  <div className="space-y-1">
                    <p className="text-base font-semibold leading-6 text-[#FAFAFA]">
                      {coach.name}
                    </p>
                    <p className="text-sm font-normal leading-[18px] text-[#FAFAFA]">
                      {coach.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 border-t border-[#373A41] pt-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="space-y-1">
              <p className="flex items-center gap-1 text-sm font-medium text-[#00B4CC]">
                <Phone className="size-4" /> Əlaqə
              </p>
              <p className="text-xs font-medium text-white">050-000-00-00</p>
            </div>
            <div className="space-y-1">
              <p className="flex items-center gap-1 text-sm font-medium text-[#00B4CC]">
                <Mail className="size-4" /> Email
              </p>
              <p className="text-xs font-medium text-white">abcd@mail.com</p>
            </div>
            <div className="space-y-1">
              <p className="flex items-center gap-1 text-sm font-medium text-[#00B4CC]">
                <MapPin className="size-4" /> Ünvan
              </p>
              <p className="text-xs font-medium text-white">
                Nizami küçəsi 10/4 Bakı
              </p>
            </div>
            <div className="space-y-1">
              <p className="flex items-center gap-1 text-sm font-medium text-[#00B4CC]">
                <Clock3 className="size-4" /> İş saatları
              </p>
              <p className="text-xs font-medium text-white">
                B.e-C.: 07:00-22:00
              </p>
              <p className="text-xs font-medium text-white">
                Ş.-B.: 09:00-20:00
              </p>
            </div>
          </div>
        </div>

        <div
          className="h-[300px] rounded-2xl bg-cover bg-center md:h-[553px]"
          style={{ backgroundImage: `url(${mapImageUrl})` }}
          aria-label="Xəritə"
        />
      </section>
    </Container>
  );
};

export default FitnessCenterDetails;

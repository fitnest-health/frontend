import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

type FitMarketDetailsProps = {
  params: Promise<{ slug: string }>;
};

const mapImageUrl =
  "https://www.figma.com/api/mcp/asset/90d30e13-0f0f-4e8f-8447-893619992100";

const discountClassNames = [
  "bg-[linear-gradient(104.95deg,rgba(229,232,236,0)_4.75%,#9BAAC7_95.25%)]",
  "bg-[linear-gradient(102.93deg,rgba(231,183,95,0)_4.93%,#F8D57E_95.07%)]",
  "bg-[linear-gradient(99.99deg,#313131_1.35%,#515254_41.81%,#5B5B5D_56.68%,#565857_101.38%)]",
];

const FitMarketDetails = async ({ params }: FitMarketDetailsProps) => {
  const { slug } = await params;
  const fallbackTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const title = fallbackTitle || "Vitamin House";

  return (
   <Container className="pb-16 pt-12 md:pb-24 md:pt-50">
      <section className="rounded-[32px] border border-[#373A41] bg-[#111729] p-5 md:p-6">
        <div className="space-y-5 md:space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="text-4xl font-bold leading-tight text-[#00B4CC] md:text-[44px] md:leading-[66px]">
              {title}
            </h1>

            <div className="flex items-center gap-4">
              {["5 %", "10 %", "15 %"].map((discount, index) => (
                <span
                  key={discount}
                  className={`flex size-[60px] items-center justify-center rounded-full text-xl font-bold leading-[30px] text-[#ECECED] ${discountClassNames[index]}`}
                >
                  {discount}
                </span>
              ))}
            </div>
          </div>

          <p className="text-base font-medium leading-7 text-[#F7F7F7] md:text-lg md:leading-7">
            Multivitamin, D vitamini, Omega 3 və ümumi sağlamlıq əlavələri.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 border-t border-[#373A41] pt-4 md:grid-cols-2 xl:grid-cols-4">
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
            <p className="text-xs font-medium text-white">B.e-C.: 07:00-22:00</p>
            <p className="text-xs font-medium text-white">Ş.-B.: 09:00-20:00</p>
          </div>
        </div>

        <div
          className="mt-6 h-[280px] rounded-2xl bg-cover bg-center md:h-[553px]"
          style={{ backgroundImage: `url(${mapImageUrl})` }}
          aria-label="Xəritə"
        />

        <div className="mt-6 flex justify-end">
          <Button
            asChild
            className="h-12 w-full rounded-[32px] bg-[#00B4CC] px-6 text-base font-medium text-[#FAFAFA] hover:bg-[#00A5BC] md:w-[420px]"
          >
            <Link href="/fit-market">Keçid et</Link>
          </Button>
        </div>
      </section>
    </Container>
  );
};

export default FitMarketDetails;

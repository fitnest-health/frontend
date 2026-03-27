import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { discountDetailClassNames } from "../lib/fit-market-data";
import { getMessages } from "@/lib/i18n/server";

const mapImageUrl =
  "https://www.figma.com/api/mcp/asset/90d30e13-0f0f-4e8f-8447-893619992100";

interface FitMarketDetailsProps {
  slug: string;
}

const FitMarketDetails = async ({ slug }: FitMarketDetailsProps) => {
  const { messages } = await getMessages();
  const fallbackTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const title = fallbackTitle || "Vitamin House";

  return (
    <Container className="pb-16 pt-12 md:pb-24 md:pt-50">
      <section className="rounded-4xl border border-[#373A41] bg-[#111729] p-5 md:p-6">
        <div className="space-y-5 md:space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="text-4xl font-bold leading-tight text-[#00B4CC] md:text-h3 md:leading-h3">
              {title}
            </h1>

            <div className="flex items-center gap-4">
              {["5 %", "10 %", "15 %"].map((discount, index) => (
                <span
                  key={discount}
                  className={`flex size-[60px] items-center justify-center rounded-full text-xl font-bold leading-s1 text-[#ECECED] ${discountDetailClassNames[index]}`}
                >
                  {discount}
                </span>
              ))}
            </div>
          </div>

          <p className="text-base font-medium leading-7 text-[#F7F7F7] md:text-lg md:leading-7">
            {messages.fitMarket.detailsDescription}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 border-t border-[#373A41] pt-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-1">
            <p className="flex items-center gap-1 text-sm font-medium text-[#00B4CC]">
              <Phone className="size-4" /> {messages.fitMarket.contact}
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
              <MapPin className="size-4" /> {messages.fitMarket.address}
            </p>
            <p className="text-xs font-medium text-white">
              Nizami küçəsi 10/4 Bakı
            </p>
          </div>

          <div className="space-y-1">
            <p className="flex items-center gap-1 text-sm font-medium text-[#00B4CC]">
              <Clock3 className="size-4" /> {messages.fitMarket.workHours}
            </p>
            <p className="text-xs font-medium text-white">
              B.e-C.: 07:00-22:00
            </p>
            <p className="text-xs font-medium text-white">Ş.-B.: 09:00-20:00</p>
          </div>
        </div>

        <div
          className="mt-6 h-[280px] rounded-2xl bg-cover bg-center md:h-[553px]"
          style={{ backgroundImage: `url(${mapImageUrl})` }}
          aria-label={messages.fitMarket.map}
        />

        <div className="mt-6 flex justify-end">
          <Button
            asChild
            className="h-12 w-full rounded-4xl bg-[#00B4CC] px-6 text-base font-medium text-[#FAFAFA] hover:bg-[#00A5BC] md:w-[420px]"
          >
            <Link href="/fit-market">{messages.fitMarket.visit}</Link>
          </Button>
        </div>
      </section>
    </Container>
  );
};

export default FitMarketDetails;

import Container from "@/components/common/Container";
import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type MarketItem = {
  id: string;
  title: string;
  description: string;
  address: string;
  phone: string;
  workHours: string;
  image: string;
  discounts: string[];
  highlighted?: boolean;
};

const marketItems: MarketItem[] = [
  {
    id: "vitamin-house-1",
    title: "Vitamin House",
    description:
      "Multivitamin, D vitamini, Omega 3 və ümumi sağlamlıq əlavələri.",
    address: "Bakı, Nizami 123",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/first.png",
    discounts: ["5 %", "10 %", "15 %"],
    highlighted: true,
  },
  {
    id: "vitamin-house-2",
    title: "Vitamin House",
    description:
      "Multivitamin, D vitamini, Omega 3 və ümumi sağlamlıq əlavələri.",
    address: "Bakı, Nizami 123",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/second.png",
    discounts: ["5 %", "10 %", "15 %"],
  },
  {
    id: "vitamin-house-3",
    title: "Vitamin House",
    description:
      "Multivitamin, D vitamini, Omega 3 və ümumi sağlamlıq əlavələri.",
    address: "Bakı, Nizami 123",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/third.png",
    discounts: ["5 %", "10 %", "15 %"],
  },
  {
    id: "vitamin-house-4",
    title: "Vitamin House",
    description:
      "Multivitamin, D vitamini, Omega 3 və ümumi sağlamlıq əlavələri.",
    address: "Bakı, Nizami 123",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/image1.png",
    discounts: ["5 %", "10 %", "15 %"],
  },
  {
    id: "vitamin-house-5",
    title: "Vitamin House",
    description:
      "Multivitamin, D vitamini, Omega 3 və ümumi sağlamlıq əlavələri.",
    address: "Bakı, Nizami 123",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/image2.png",
    discounts: ["5 %", "10 %", "15 %"],
  },
  {
    id: "vitamin-house-6",
    title: "Vitamin House",
    description:
      "Multivitamin, D vitamini, Omega 3 və ümumi sağlamlıq əlavələri.",
    address: "Bakı, Nizami 123",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/image3.png",
    discounts: ["5 %", "10 %", "15 %"],
  },
  {
    id: "vitamin-house-7",
    title: "Vitamin House",
    description:
      "Multivitamin, D vitamini, Omega 3 və ümumi sağlamlıq əlavələri.",
    address: "Bakı, Nizami 123",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/abunelik.webp",
    discounts: ["5 %", "10 %", "15 %"],
  },
  {
    id: "vitamin-house-8",
    title: "Vitamin House",
    description:
      "Multivitamin, D vitamini, Omega 3 və ümumi sağlamlıq əlavələri.",
    address: "Bakı, Nizami 123",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/first.png",
    discounts: ["5 %", "10 %", "15 %"],
  },
  {
    id: "vitamin-house-9",
    title: "Vitamin House",
    description:
      "Multivitamin, D vitamini, Omega 3 və ümumi sağlamlıq əlavələri.",
    address: "Bakı, Nizami 123",
    phone: "+994 55 555 55 55",
    workHours: "09:00 - 20:00",
    image: "/images/second.png",
    discounts: ["5 %", "10 %", "15 %"],
  },
];

const discountStyleByIndex = [
  "bg-[linear-gradient(108.95deg,rgba(229,232,236,0)_4.75%,#9BAAC7_95.25%)]",
  "bg-[linear-gradient(106.44deg,rgba(231,183,95,0)_4.93%,#F8D57E_95.07%)]",
  "bg-[linear-gradient(102.76deg,#313131_1.35%,#515254_41.81%,#5B5B5D_56.68%,#565857_101.38%)]",
];

const FitMarket = () => {
  return (
    <div className="pb-12 md:pb-20">
      <section className="relative h-[520px]  md:h-[680px]">
        <Image
          src="/images/wellness.png"
          alt="fit market hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(33,50,52,0.26)] to-black" />
        <Container className="relative z-10 h-full">
          <div className="absolute bottom-12 max-w-3xl space-y-4 md:bottom-16 md:space-y-5">
            <h1 className="text-3xl font-bold leading-tight text-white md:text-[44px] md:leading-[66px]">
              İdman qidaları və geyimləri
            </h1>
            <p className="max-w-[848px] text-sm font-normal leading-6 text-[#FAFAFA] md:text-2xl md:leading-9">
              Burada ən çox istifadə olunan qida əlavələri haqqında qısa və
              aydın məlumat əldə edə bilər, həmçinin etibarlı protein
              mağazalarına birbaşa keçid edə bilərsiniz.
            </p>
          </div>
        </Container>
      </section>

      <Container className="mt-8 space-y-5 md:mt-12 md:space-y-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {marketItems.map((item) => (
            <article
              key={item.id}
              className={`rounded-[32px] bg-[#111729] px-7 py-6 ${
                item.highlighted ? "border border-[#C6A7F5]" : ""
              }`}
            >
              <div className="relative h-[250px] overflow-hidden rounded-3xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 410px"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/65" />
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl font-semibold leading-[30px] text-[#00B4CC]">
                    {item.title}
                  </h2>
                  <div className="flex items-center gap-2">
                    {item.discounts.map((discount, index) => (
                      <span
                        key={`${item.id}-${discount}`}
                        className={`flex size-9 items-center justify-center rounded-full text-xs text-[#ECECED] ${discountStyleByIndex[index]}`}
                      >
                        {discount}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs leading-[18px] text-[#F7F7F7]">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 flex items-end justify-between gap-5">
                <div className="space-y-3">
                  <p className="flex items-center gap-2 text-sm text-[#C1C1CC]">
                    <MapPin className="size-5 text-[#C1C1CC]" />
                    {item.address}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-[#C1C1CC]">
                    <Phone className="size-[18px] text-[#C1C1CC]" />
                    {item.phone}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-[#C1C1CC]">
                    <Clock3 className="size-[18px] text-[#C1C1CC]" />
                    İş saatları: {item.workHours}
                  </p>
                </div>

                <Link
                  href={`/fit-market/${item.id}`}
                  className="flex size-[62px] shrink-0 items-center justify-center rounded-full bg-[rgba(14,41,61,0.3)] transition hover:bg-[rgba(14,41,61,0.45)]"
                  aria-label={`${item.title} detalına keç`}
                >
                  <ArrowUpRight className="size-6 text-white" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FitMarket;

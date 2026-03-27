export type MarketItem = {
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

export const marketItems: MarketItem[] = [
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

export const discountStyleByIndex = [
  "bg-[linear-gradient(108.95deg,rgba(229,232,236,0)_4.75%,#9BAAC7_95.25%)]",
  "bg-[linear-gradient(106.44deg,rgba(231,183,95,0)_4.93%,#F8D57E_95.07%)]",
  "bg-[linear-gradient(102.76deg,#313131_1.35%,#515254_41.81%,#5B5B5D_56.68%,#565857_101.38%)]",
];

export const discountDetailClassNames = [
  "bg-[linear-gradient(104.95deg,rgba(229,232,236,0)_4.75%,#9BAAC7_95.25%)]",
  "bg-[linear-gradient(102.93deg,rgba(231,183,95,0)_4.93%,#F8D57E_95.07%)]",
  "bg-[linear-gradient(99.99deg,#313131_1.35%,#515254_41.81%,#5B5B5D_56.68%,#565857_101.38%)]",
];

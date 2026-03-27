import {
  BadgeCheck,
  CircleAlert,
  Dumbbell,
  HeartPulse,
  Utensils,
} from "lucide-react";

export const infoItems = [
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

export const tips = [
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

import type { Locale } from "@/lib/i18n/config";

type LocalizedSeoContent = {
  title: string;
  description: string;
  keywords: string[];
};

type SeoPageKey =
  | "home"
  | "offers"
  | "bmi"
  | "contact"
  | "faq"
  | "feedback"
  | "fitMarket"
  | "fitnessCenters"
  | "privacy"
  | "terms"
  | "paymentSuccess"
  | "paymentError";

const seoContent: Record<SeoPageKey, Record<Locale, LocalizedSeoContent>> = {
  home: {
    az: {
      title: "FitNest - Sağlam Həyata Başla",
      description:
        "Fitnes mərkəzləri, abunəlik planları və sağlamlıq xidmətlərini bir platformada kəşf et.",
      keywords: ["FitNest", "fitness", "idman zalları", "abunəlik planları", "sağlam həyat"],
    },
    en: {
      title: "FitNest - Start a Healthier Life",
      description:
        "Discover fitness centers, subscription plans, and wellness services on one platform.",
      keywords: ["FitNest", "fitness", "gym memberships", "subscription plans", "wellness"],
    },
    ru: {
      title: "FitNest - Начни здоровую жизнь",
      description:
        "Откройте фитнес-центры, тарифы подписки и wellness-сервисы на одной платформе.",
      keywords: ["FitNest", "фитнес", "спортзал", "подписка", "здоровый образ жизни"],
    },
  },
  offers: {
    az: {
      title: "Abunəlik Planları",
      description:
        "Məqsədinə uyğun aylıq və çoxaylıq FitNest abunəlik paketlərini müqayisə et və ən uyğun planı seç.",
      keywords: ["abunəlik", "fitness plan", "idman zalı üzvlüyü", "FitNest offers"],
    },
    en: {
      title: "Subscription Plans",
      description:
        "Compare monthly and long-term FitNest subscription packages and choose the right plan for your goals.",
      keywords: ["subscription", "fitness plans", "gym membership", "FitNest offers"],
    },
    ru: {
      title: "Тарифы подписки",
      description:
        "Сравните месячные и долгосрочные пакеты FitNest и выберите план под свои цели.",
      keywords: ["подписка", "фитнес тариф", "абонемент", "FitNest offers"],
    },
  },
  bmi: {
    az: {
      title: "BMI Kalkulyatoru",
      description:
        "Boy və çəkinə əsasən bədən kütlə indeksini hesabla və sağlamlıq göstəricini dəyərləndir.",
      keywords: ["BMI", "bədən kütlə indeksi", "kalkulyator", "sağlamlıq"],
    },
    en: {
      title: "BMI Calculator",
      description:
        "Calculate your body mass index based on height and weight and evaluate your health indicator.",
      keywords: ["BMI", "body mass index", "calculator", "health"],
    },
    ru: {
      title: "Калькулятор ИМТ",
      description:
        "Рассчитайте индекс массы тела по росту и весу и оцените свой показатель здоровья.",
      keywords: ["ИМТ", "индекс массы тела", "калькулятор", "здоровье"],
    },
  },
  contact: {
    az: {
      title: "Əlaqə",
      description: "FitNest komandası ilə əlaqə saxla, suallarını göndər və dəstək al.",
      keywords: ["əlaqə", "FitNest dəstək", "yardım"],
    },
    en: {
      title: "Contact",
      description: "Contact the FitNest team, send your questions, and get support.",
      keywords: ["contact", "FitNest support", "help"],
    },
    ru: {
      title: "Контакты",
      description: "Свяжитесь с командой FitNest, отправьте вопрос и получите поддержку.",
      keywords: ["контакты", "поддержка FitNest", "помощь"],
    },
  },
  faq: {
    az: {
      title: "FAQ",
      description: "FitNest platforması, abunəlik və xidmətlər barədə ən çox verilən suallara cavablar.",
      keywords: ["FAQ", "tez-tez verilən suallar", "FitNest"],
    },
    en: {
      title: "FAQ",
      description: "Answers to the most frequently asked questions about FitNest, subscriptions, and services.",
      keywords: ["FAQ", "frequently asked questions", "FitNest"],
    },
    ru: {
      title: "FAQ",
      description: "Ответы на часто задаваемые вопросы о FitNest, подписках и сервисах.",
      keywords: ["FAQ", "частые вопросы", "FitNest"],
    },
  },
  feedback: {
    az: {
      title: "Rəy və Təkliflər",
      description: "FitNest xidmətləri haqqında rəy, təklif və şikayətlərini bizə göndər.",
      keywords: ["feedback", "rəy", "təklif", "şikayət"],
    },
    en: {
      title: "Feedback and Suggestions",
      description: "Send your feedback, suggestions, and complaints about FitNest services.",
      keywords: ["feedback", "suggestions", "complaint", "FitNest"],
    },
    ru: {
      title: "Отзывы и предложения",
      description: "Отправьте отзыв, предложение или жалобу о сервисах FitNest.",
      keywords: ["обратная связь", "предложение", "жалоба", "FitNest"],
    },
  },
  fitMarket: {
    az: {
      title: "Fit Market",
      description:
        "İdman qidaları və sağlamlıq məhsulları üzrə etibarlı tərəfdaş mağazaları və endirimləri kəşf et.",
      keywords: ["fit market", "idman qidası", "supplement", "endirim"],
    },
    en: {
      title: "Fit Market",
      description:
        "Discover trusted partner stores and discounts for sports nutrition and wellness products.",
      keywords: ["fit market", "sports nutrition", "supplements", "discount"],
    },
    ru: {
      title: "Fit Market",
      description:
        "Откройте надежные партнерские магазины и скидки на спортивное питание и товары для здоровья.",
      keywords: ["fit market", "спортпит", "добавки", "скидки"],
    },
  },
  fitnessCenters: {
    az: {
      title: "Fitness Mərkəzləri",
      description: "Sənə yaxın fitness mərkəzlərini tap, müqayisə et və uyğun zalı seç.",
      keywords: ["fitness centers", "idman zalları", "Bakı gym", "FitNest"],
    },
    en: {
      title: "Fitness Centers",
      description: "Find nearby fitness centers, compare options, and choose the gym that fits you.",
      keywords: ["fitness centers", "gyms", "Baku gym", "FitNest"],
    },
    ru: {
      title: "Фитнес-центры",
      description: "Найдите ближайшие фитнес-центры, сравните варианты и выберите подходящий зал.",
      keywords: ["фитнес-центры", "спортзал", "Баку", "FitNest"],
    },
  },
  privacy: {
    az: {
      title: "Məxfilik Siyasəti",
      description: "FitNest platformasında şəxsi məlumatların toplanması, istifadəsi və qorunması siyasəti.",
      keywords: ["məxfilik", "privacy policy", "şəxsi məlumatlar"],
    },
    en: {
      title: "Privacy Policy",
      description: "Policy for collecting, using, and protecting personal data on the FitNest platform.",
      keywords: ["privacy policy", "personal data", "FitNest"],
    },
    ru: {
      title: "Политика конфиденциальности",
      description:
        "Политика сбора, использования и защиты персональных данных на платформе FitNest.",
      keywords: ["конфиденциальность", "персональные данные", "FitNest"],
    },
  },
  terms: {
    az: {
      title: "İstifadə Şərtləri",
      description: "FitNest xidmətlərindən istifadə zamanı qüvvədə olan şərtlər və hüquqi müddəalar.",
      keywords: ["istifadə şərtləri", "terms", "FitNest qaydaları"],
    },
    en: {
      title: "Terms of Use",
      description: "Terms and legal provisions applicable when using FitNest services.",
      keywords: ["terms of use", "legal", "FitNest"],
    },
    ru: {
      title: "Условия использования",
      description: "Условия и правовые положения, действующие при использовании сервисов FitNest.",
      keywords: ["условия использования", "правила", "FitNest"],
    },
  },
  paymentSuccess: {
    az: {
      title: "Ödəniş Uğurlu",
      description: "Ödəniş əməliyyatı uğurla tamamlandı.",
      keywords: ["ödəniş", "uğurlu ödəniş", "fitnest"],
    },
    en: {
      title: "Payment Successful",
      description: "The payment transaction was completed successfully.",
      keywords: ["payment", "successful payment", "fitnest"],
    },
    ru: {
      title: "Оплата успешна",
      description: "Платежная операция успешно завершена.",
      keywords: ["оплата", "успешная оплата", "fitnest"],
    },
  },
  paymentError: {
    az: {
      title: "Ödəniş Uğursuz",
      description: "Ödəniş əməliyyatı tamamlanmadı.",
      keywords: ["ödəniş", "uğursuz ödəniş", "fitnest"],
    },
    en: {
      title: "Payment Failed",
      description: "The payment transaction could not be completed.",
      keywords: ["payment", "payment failed", "fitnest"],
    },
    ru: {
      title: "Ошибка оплаты",
      description: "Платежная операция не была завершена.",
      keywords: ["оплата", "ошибка оплаты", "fitnest"],
    },
  },
};

export const getSeoContent = (page: SeoPageKey, locale: Locale) =>
  seoContent[page][locale];

import type { Locale } from "./config";

export type Messages = {
  nav: {
    halls: string;
    plans: string;
    market: string;
    faq: string;
    bmi: string;
    login: string;
    signup: string;
  };
  footer: {
    privacy: string;
    terms: string;
    feedback: string;
    contact: string;
  };
  home: {
    heroTitle: string;
    heroDescription: string;
    howTitle: string;
    howItems: { title: string; desc: string }[];
    subscriptionTitle: string;
    subscriptionHeading: string;
    subscriptionDescription: string;
    viewPlans: string;
    mobileTitle: string;
    mobileHeading: string;
    mobileDescription: string;
    monthlyPlan: string;
    trialPlan: string;
    entry: string;
    unlimitedEntry: string;
    oldPrice: string;
    features: string;
    gymEntryCount: string;
    freezeDays: string;
    carouselAria: string;
    planAria: string;
  };
  offers: {
    heroTitle: string;
    months: string;
    whatAwaits: string;
    includedGyms: string;
    appHeading: string;
    appDescription: string;
    benefits: { label: string; value?: string; checked?: boolean }[];
  };
  fitMarket: {
    heroTitle: string;
    heroDescription: string;
    newBadge: string;
    cardDetailsAria: string;
    detailsDescription: string;
    contact: string;
    address: string;
    workHours: string;
    map: string;
    visit: string;
  };
  centers: {
    heroTitle: string;
    heroDescription: string;
    searchPlace: string;
    cityDistrict: string;
    trainingTypes: string;
    membership: string;
    reset: string;
    workHours: string;
    detailsAria: string;
    detailsSubtitle: string;
    previousImage: string;
    nextImage: string;
    aboutGym: string;
    aboutText: string;
    equipment: string;
    equipmentText: string;
    coaches: string;
    contact: string;
    address: string;
    workHoursTitle: string;
    map: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: { title: string; content: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    send: string;
  };
  feedback: {
    title: string;
    subtitle: string;
    fullName: string;
    email: string;
    requestType: string;
    complaint: string;
    suggestion: string;
    other: string;
    message: string;
    send: string;
  };
  privacy: {
    title: string;
    subtitle: string;
    items: { title: string; text: string }[];
  };
  terms: {
    title: string;
    subtitle: string;
    items: { title: string; content: string }[];
  };
  bmi: {
    heroTitle: string;
    heroDescription: string;
    params: string;
    weight: string;
    height: string;
    birthDate: string;
    gender: string;
    male: string;
    female: string;
    calculate: string;
    resultLabel: string;
    underweight: string;
    normal: string;
    overweight: string;
    obesity: string;
    noResult: string;
    facts: string;
    metaMessages: Record<
      "underweight" | "normal" | "overweight" | "obesity",
      string
    >;
    infoItems: { title: string; description: string }[];
    tips: { title: string; description: string }[];
  };
  payment: {
    success: string;
    failed: string;
    paymentMethod: string;
    date: string;
    status: string;
    successStatus: string;
    failedStatus: string;
  };
};

const az: Messages = {
  nav: {
    halls: "Zallar",
    plans: "Abunəlik",
    market: "Fit market",
    faq: "FAQ",
    bmi: "BMI",
    login: "Daxil ol",
    signup: "Qeydiyyatdan keç",
  },
  footer: {
    privacy: "Məxfilik siyasəti",
    terms: "İstifadə şərtləri",
    feedback: "Bizə təklifiniz",
    contact: "Əlaqə",
  },
  home: {
    heroTitle: "Sağlamlığa gedən yol",
    heroDescription:
      "FitNest istifadəçilərə yaxınlıqdakı fitness mərkəzlərini tapmaq, uyğun abunə seçmək və QR sistemi ilə məşqə başlamaq imkanı yaradır.",
    howTitle: "<span class='text-primary-700'>FitNest</span> Necə İşləyir?",
    howItems: [
      {
        title: "QR kodu oxudun və məşqə başlayın.",
        desc: "Zallarımızda yerləşdirilmiş xüsusi QR kodları FitNest mobil tətbiqində oxudaraq gedişinizi təsdiqləyin və məşqə başlayın.",
      },
      {
        title: "FitNest necə işləyir?",
        desc: "FitNest tətbiqi ilə fitness məqsədinizə başlamaq asandır. Üzvlüyünüzü aktivləşdirdikdən sonra dərhal məşqə başlaya bilərsiniz.",
      },
      {
        title: "Sizə ən rahat qeydiyyat üsulunu seçin.",
        desc: "FitNest tətbiqini yükləyin və hədəfinizə doğru ilk addımı atın.",
      },
      {
        title:
          "Məşq etmək və sağlamlığınızı qorumaq üçün istədiyiniz zalı tapın",
        desc: "Bütün zallarımızda məşq edə bilərsiniz. Sizi maraqlandıran zalları görmək üçün tətbiqdəki filtrdən istifadə edin.",
      },
    ],
    subscriptionTitle: "Abunəlik",
    subscriptionHeading: "Hədəflərinə uyğun planı seç",
    subscriptionDescription: "ilə daha balanslı, sağlam və aktiv həyata addım at.",
    viewPlans: "Planlara bax",
    mobileTitle: "Mobil <span class='text-primary-700'>FitNest</span>",
    mobileHeading: "Sağlam həyat tərzinə bir addım da yaxınlaş",
    mobileDescription: "ilə bədənini, zehnini və motivasiyanı balansda saxla.",
    monthlyPlan: "aylıq plan",
    trialPlan: "Sınaq planı",
    entry: "giriş",
    unlimitedEntry: "limitsiz giriş",
    oldPrice: "Köhnə qiymət",
    features: "plan xüsusiyyətləri",
    gymEntryCount: "Zallara giriş sayı",
    freezeDays: "gün dondurma",
    carouselAria: "Abunəlik planları karuseli",
    planAria: "abunəlik planı",
  },
  offers: {
    heroTitle: "Öz bədənini və həyat balansını qorumaq üçün uyğun planı seç",
    months: "ay",
    whatAwaits: "planlarında səni nələr gözləyir?",
    includedGyms: "Paketə daxil olan zallar",
    appHeading: "Sağlam həyat tərzinə bir addım da yaxınlaş",
    appDescription: "ilə bədənini, zehnini və motivasiyanı balansda saxla.",
    benefits: [
      { label: "Zallara giriş sayı", value: "16" },
      { label: "Fərdi qəza", checked: true },
      { label: "İdman mağazaları", value: "10% endirim" },
      { label: "Fərdi qəza", value: "10% endirim" },
      { label: "Kosmetologiya", value: "10% endirim" },
      { label: "Məşq proqramları", checked: true },
      { label: "Diet proqramı", checked: true },
      { label: "Tur paketə endirim", checked: true },
      { label: "Spa və hovuza giriş", checked: true },
      { label: "Nutrisioloq qəbulu", value: "ayda 1 dəfə" },
      { label: "Məşqçi ilə konsultasiya", value: "ayda 3 dəfə" },
    ],
  },
  fitMarket: {
    heroTitle: "İdman qidaları və geyimləri",
    heroDescription:
      "Burada ən çox istifadə olunan qida əlavələri haqqında qısa və aydın məlumat əldə edə bilər, həmçinin etibarlı protein mağazalarına birbaşa keçid edə bilərsiniz.",
    newBadge: "Yeni",
    cardDetailsAria: "detalına keç",
    detailsDescription: "Multivitamin, D vitamini, Omega 3 və ümumi sağlamlıq əlavələri.",
    contact: "Əlaqə",
    address: "Ünvan",
    workHours: "İş saatları",
    map: "Xəritə",
    visit: "Keçid et",
  },
  centers: {
    heroTitle: "Özünə Uyğun Məşq Məkani Seç",
    heroDescription: "İdman üçün rahat, motivasiya verən zalları bir yerdə topladıq.",
    searchPlace: "Məkan axtar",
    cityDistrict: "Şəhər / Rayon",
    trainingTypes: "Məşq növləri",
    membership: "Abunəlik",
    reset: "Sıfırla",
    workHours: "İş saatları",
    detailsAria: "detalları",
    detailsSubtitle: "Daha güclü, sağlam və enerjili olmaq üçün ideal məkan.",
    previousImage: "Əvvəlki şəkil",
    nextImage: "Növbəti şəkil",
    aboutGym: "Zal haqqında",
    aboutText:
      "ProFit Club geniş məşq zonaları, yenilənmiş avadanlıqlar və rahat mühit ilə həm yeni başlayanlar, həm də peşəkar idmançılar üçün ideal fitness məkanıdır.",
    equipment: "Avadanlıqlar",
    equipmentText:
      "Kardio trenajorları • Funksional zona • Squat rack • Dumbbell/barbell • Kabel trenajorları • Stretching sahəsi",
    coaches: "Məşqçilər",
    contact: "Əlaqə",
    address: "Ünvan",
    workHoursTitle: "İş saatları",
    map: "Xəritə",
  },
  faq: {
    title: "FAQs",
    subtitle: "haqqında ən çox soruşulan suallar",
    items: [
      {
        title: "FitNest necə işləyir?",
        content: "Abunəlik seçib tətbiqdə QR kod ilə zal girişini aktivləşdirirsiniz.",
      },
      {
        title: "Hansı zallarda istifadə edə bilərəm?",
        content: "Planınıza uyğun siyahını Zallar bölməsində filtr ilə görə bilərsiniz.",
      },
      {
        title: "Abunəliyi necə dəyişə bilərəm?",
        content: "Profil və ya Abunəlik səhifəsindən planı yeniləmək mümkündür.",
      },
    ],
  },
  contact: {
    title: "Bizimlə əlaqə saxla",
    subtitle: "Komandamız səninlə əlaqə saxlayacaq",
    name: "Ad",
    email: "Email",
    phone: "Telefon",
    message: "Mesajınızı daxil edin",
    send: "Göndər",
  },
  feedback: {
    title: "Şikayət və təkliflər",
    subtitle: "Sizin fikirləriniz bizim üçün dəyərlidir - paylaşın, biz qulaq asırıq!",
    fullName: "Ad, Soyad",
    email: "E-poçt",
    requestType: "Müraciət növü",
    complaint: "Şikayət",
    suggestion: "Təklif",
    other: "Digər",
    message: "Mesajınızı daxil edin",
    send: "Göndər",
  },
  privacy: {
    title: "Məxfilik siyasəti",
    subtitle: "Şəxsi məlumatlarınızın qorunması bizim üçün prioritetdir",
    items: [
      { title: "Ümumi məlumat", text: "Bu məxfilik siyasəti şəxsi məlumatların toplanması və qorunmasını izah edir." },
      { title: "Toplanılan məlumatlar", text: "Hesab məlumatları, ödəniş məlumatları və istifadə analitikası toplanıla bilər." },
      { title: "Məlumatların istifadəsi", text: "Məlumatlar xidmətin optimallaşdırılması və dəstək üçün istifadə olunur." },
      { title: "Məlumatların paylaşılması", text: "Məlumatlar yalnız qanuni əsas və ya razılıq olduqda paylaşılır." },
      { title: "Hüquqlarınız", text: "Məlumatlara çıxış, düzəliş və silinmə tələbi göndərə bilərsiniz." },
      { title: "Təhlükəsizlik", text: "Məlumatlar müasir təhlükəsizlik tədbirləri ilə qorunur." },
    ],
  },
  terms: {
    title: "İstifadə Şərtləri",
    subtitle: "xidmətlərindən istifadə zamanı tətbiq olunan qaydalar və məsuliyyət prinsipləri.",
    items: [
      { title: "Ümumi müddəalar", content: "FitNest platformasından istifadə etməklə bu şərtlərlə razılaşmış olursunuz." },
      { title: "Qeydiyyat və hesab", content: "Hesab məlumatlarının düzgünlüyünə görə istifadəçi məsuliyyət daşıyır." },
      { title: "Məxfilik və təhlükəsizlik", content: "Şəxsi məlumatlar məxfi saxlanılır və qorunur." },
      { title: "Xidmətlərin istifadəsi", content: "Məzmun məlumat xarakterlidir və tibbi məsləhətin yerini tutmur." },
      { title: "Ödəniş və abunəlik", content: "Qiymət və qaydalar dəyişə bilər, aktual şərtlər platformada verilir." },
      { title: "Qaydaların pozulması", content: "Qaydalar pozularsa hesab müvəqqəti və ya daimi dayandırıla bilər." },
    ],
  },
  bmi: {
    heroTitle: "Bədən Kütlə İndeksi",
    heroDescription:
      "Sağlamlığınız üçün ideal çəkinizi öyrənin. Boy və çəkinizə əsasən bədən kütlə indeksinizi hesablayın.",
    params: "Parametrlər",
    weight: "Çəki",
    height: "Boy",
    birthDate: "Doğum tarixi",
    gender: "Cinsiyyət",
    male: "Kişi",
    female: "Qadın",
    calculate: "Hesabla",
    resultLabel: "Sizin BKİ göstəriciniz:",
    underweight: "Az Çəki",
    normal: "Normal",
    overweight: "Artıq Çəki",
    obesity: "Piylənmə",
    noResult: "Nəticəni görmək üçün parametrləri daxil edib \"Hesabla\" düyməsini sıxın.",
    facts: "Faktlar və tövsiyələr",
    metaMessages: {
      underweight: "Tövsiyə: qidalanma və məşq planını balanslaşdırın.",
      normal: "Təbriklər! Çəkiniz idealdır. Bu formanı qoruyun.",
      overweight: "Tövsiyə: gündəlik hərəkəti artırın və qidalanmanı izləyin.",
      obesity: "Mütəxəssis məsləhəti ilə fərdi plan qurmağınız tövsiyə edilir.",
    },
    infoItems: [
      {
        title: "BKİ nədir?",
        description: "Boyunuza görə çəkinizin uyğunluğunu qiymətləndirən sadə ölçüdür.",
      },
      {
        title: "Risklər",
        description: "Yüksək BKİ ürək xəstəlikləri və diabet riskini artıra bilər.",
      },
      {
        title: "Sağlam aralıq",
        description: "18.5 - 24.9 arası BKİ normal hesab olunur.",
      },
    ],
    tips: [
      {
        title: "Fiziki aktivlik",
        description: "Həftədə ən azı 150 dəqiqə orta intensivlikli fəaliyyət tövsiyə olunur.",
      },
      {
        title: "Balanslı qidalanma",
        description: "Zülal, karbohidrat və yağ balansı çəkinin idarəsində vacibdir.",
      },
    ],
  },
  payment: {
    success: "Ödənişiniz uğurla tamamlandı",
    failed: "Ödənişiniz uğursuz oldu",
    paymentMethod: "Ödəniş üsulu",
    date: "Tarix",
    status: "Status",
    successStatus: "Uğurlu",
    failedStatus: "Uğursuz",
  },
};

const en: Messages = {
  ...az,
  nav: {
    halls: "Gyms",
    plans: "Plans",
    market: "Fit Market",
    faq: "FAQ",
    bmi: "BMI",
    login: "Sign in",
    signup: "Sign up",
  },
  footer: {
    privacy: "Privacy policy",
    terms: "Terms of use",
    feedback: "Feedback",
    contact: "Contact",
  },
  home: {
    ...az.home,
    heroTitle: "Your path to better health",
    heroDescription:
      "FitNest helps users find nearby fitness centers, choose a plan, and start workouts via QR access.",
    howTitle: "How <span class='text-primary-700'>FitNest</span> Works",
    subscriptionTitle: "Subscription",
    subscriptionHeading: "Choose the plan that matches your goals",
    subscriptionDescription:
      "for a healthier, balanced and more active lifestyle.",
    viewPlans: "View plans",
    mobileTitle: "Mobile <span class='text-primary-700'>FitNest</span>",
    mobileHeading: "Get one step closer to a healthier lifestyle",
    mobileDescription:
      "to keep your body, mindset and motivation in balance.",
    monthlyPlan: "month plan",
    trialPlan: "Trial plan",
    entry: "entries",
    unlimitedEntry: "unlimited entries",
    oldPrice: "Old price",
    features: "plan features",
    gymEntryCount: "Gym entries",
    freezeDays: "days freeze",
    carouselAria: "Subscription plans carousel",
    planAria: "subscription plan",
    howItems: [
      {
        title: "Scan the QR and start training.",
        desc: "Scan the QR codes in partner gyms using the FitNest app and confirm your entry instantly.",
      },
      {
        title: "How does FitNest work?",
        desc: "Starting your fitness journey is simple: activate your plan and begin right away.",
      },
      {
        title: "Pick the easiest registration method.",
        desc: "Download the FitNest app and take your first step toward your goal.",
      },
      {
        title: "Find the gym that fits your routine.",
        desc: "Browse all centers and use filters in the app to pick the right location.",
      },
    ],
  },
  offers: {
    ...az.offers,
    heroTitle: "Choose the plan that protects your body and life balance",
    months: "mo",
    whatAwaits: "plans: what is included?",
    includedGyms: "Gyms included in package",
    appHeading: "Take one step closer to healthy living",
    appDescription: "to keep your body, mind, and motivation in balance.",
    benefits: [
      { label: "Gym entry count", value: "16" },
      { label: "Personal accident cover", checked: true },
      { label: "Sport stores", value: "10% discount" },
      { label: "Supplement stores", value: "10% discount" },
      { label: "Cosmetology", value: "10% discount" },
      { label: "Workout programs", checked: true },
      { label: "Diet program", checked: true },
      { label: "Tour package discount", checked: true },
      { label: "Spa and pool access", checked: true },
      { label: "Nutritionist session", value: "once per month" },
      { label: "Coach consultation", value: "3 times per month" },
    ],
  },
  fitMarket: {
    ...az.fitMarket,
    heroTitle: "Sports nutrition and apparel",
    heroDescription:
      "Discover clear and practical info about popular supplements and jump directly to trusted stores.",
    newBadge: "New",
    cardDetailsAria: "open details",
    detailsDescription:
      "Multivitamins, vitamin D, omega-3, and general wellness supplements.",
    contact: "Contact",
    address: "Address",
    workHours: "Working hours",
    map: "Map",
    visit: "Visit",
  },
  centers: {
    ...az.centers,
    heroTitle: "Choose the Gym That Fits You",
    heroDescription:
      "We brought together comfortable, motivating gyms in one place.",
    searchPlace: "Search location",
    cityDistrict: "City / District",
    trainingTypes: "Training types",
    membership: "Membership",
    reset: "Reset",
    workHours: "Working hours",
    detailsAria: "details",
    detailsSubtitle:
      "An ideal place to become stronger, healthier, and more energetic.",
    previousImage: "Previous image",
    nextImage: "Next image",
    aboutGym: "About gym",
    aboutText:
      "ProFit Club offers wide workout zones, modern equipment, and a comfortable environment for all levels.",
    equipment: "Equipment",
    equipmentText:
      "Cardio machines • Functional zone • Squat rack • Dumbbells/barbells • Cable machines • Stretching area",
    coaches: "Coaches",
    contact: "Contact",
    address: "Address",
    workHoursTitle: "Working hours",
    map: "Map",
  },
  faq: {
    title: "FAQs",
    subtitle: "most frequently asked questions",
    items: [
      {
        title: "How does FitNest work?",
        content: "Choose a plan and activate gym access with QR in the mobile app.",
      },
      {
        title: "Which gyms can I use?",
        content: "Use the Gyms page filters to see centers included in your plan.",
      },
      {
        title: "How can I change my subscription?",
        content: "You can update your plan from Profile or the Plans page.",
      },
    ],
  },
  contact: {
    title: "Contact us",
    subtitle: "Our team will get back to you",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Enter your message",
    send: "Send",
  },
  feedback: {
    title: "Complaints and suggestions",
    subtitle: "Your feedback matters to us - share it and we will listen!",
    fullName: "Full name",
    email: "Email",
    requestType: "Request type",
    complaint: "Complaint",
    suggestion: "Suggestion",
    other: "Other",
    message: "Enter your message",
    send: "Send",
  },
  privacy: {
    title: "Privacy policy",
    subtitle: "Protecting your personal data is our priority",
    items: [
      {
        title: "Overview",
        text: "This policy explains how we collect, use, and protect personal data.",
      },
      {
        title: "Data collected",
        text: "Account data, payment data, and usage analytics may be collected.",
      },
      {
        title: "Use of data",
        text: "Data is used to improve service quality and support.",
      },
      {
        title: "Data sharing",
        text: "Data is shared only when legally required or with your consent.",
      },
      {
        title: "Your rights",
        text: "You can request access, correction, or deletion of your data.",
      },
      {
        title: "Security",
        text: "Your data is protected with modern security practices.",
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    subtitle: "service rules and responsibility principles.",
    items: [
      {
        title: "General provisions",
        content: "By using FitNest, you agree to these terms.",
      },
      {
        title: "Registration and account",
        content:
          "Users are responsible for accurate and current account information.",
      },
      {
        title: "Privacy and security",
        content: "Personal information is kept confidential and protected.",
      },
      {
        title: "Service usage",
        content: "Content is informational and does not replace medical advice.",
      },
      {
        title: "Payments and subscriptions",
        content:
          "Pricing and conditions may change; latest terms are shown on the platform.",
      },
      {
        title: "Violations",
        content:
          "Accounts may be suspended temporarily or permanently on violations.",
      },
    ],
  },
  bmi: {
    ...az.bmi,
    heroTitle: "Body Mass Index",
    heroDescription:
      "Learn your ideal weight. Calculate your BMI based on your height and weight.",
    params: "Parameters",
    weight: "Weight",
    height: "Height",
    birthDate: "Birth date",
    gender: "Gender",
    male: "Male",
    female: "Female",
    calculate: "Calculate",
    resultLabel: "Your BMI result:",
    underweight: "Underweight",
    normal: "Normal",
    overweight: "Overweight",
    obesity: "Obesity",
    noResult: 'Enter your parameters and press "Calculate" to see the result.',
    facts: "Facts and tips",
    metaMessages: {
      underweight: "Tip: balance your nutrition and workout routine.",
      normal: "Great job! Your weight is in a healthy range.",
      overweight: "Tip: increase daily movement and track your nutrition.",
      obesity:
        "Consider creating a personal plan with specialist guidance.",
    },
    infoItems: [
      {
        title: "What is BMI?",
        description: "A simple indicator that compares weight to height.",
      },
      {
        title: "Risks",
        description:
          "Higher BMI can increase the risk of heart disease and diabetes.",
      },
      {
        title: "Healthy range",
        description:
          "A BMI between 18.5 and 24.9 is generally considered healthy.",
      },
    ],
    tips: [
      {
        title: "Physical activity",
        description:
          "At least 150 minutes of moderate activity per week is recommended.",
      },
      {
        title: "Balanced nutrition",
        description:
          "Balancing proteins, carbs, and fats helps weight control.",
      },
    ],
  },
  payment: {
    success: "Your payment was completed successfully",
    failed: "Your payment has failed",
    paymentMethod: "Payment method",
    date: "Date",
    status: "Status",
    successStatus: "Successful",
    failedStatus: "Failed",
  },
};

const ru: Messages = {
  ...en,
  nav: {
    halls: "Залы",
    plans: "Подписка",
    market: "Fit market",
    faq: "FAQ",
    bmi: "BMI",
    login: "Войти",
    signup: "Регистрация",
  },
  footer: {
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    feedback: "Обратная связь",
    contact: "Контакты",
  },
  home: {
    ...en.home,
    heroTitle: "Путь к здоровью",
    heroDescription:
      "FitNest помогает находить ближайшие фитнес-центры, выбирать подписку и начинать тренировки по QR.",
    howTitle: "Как работает <span class='text-primary-700'>FitNest</span>",
    subscriptionTitle: "Подписка",
    subscriptionHeading: "Выберите план под свои цели",
    subscriptionDescription:
      "для более сбалансированной и активной жизни.",
    viewPlans: "Смотреть планы",
    monthlyPlan: "мес. план",
    trialPlan: "Пробный план",
    entry: "посещений",
    unlimitedEntry: "безлимит",
    oldPrice: "Старая цена",
    features: "особенности плана",
    gymEntryCount: "Количество посещений",
    freezeDays: "дней заморозки",
    carouselAria: "Карусель тарифов",
    planAria: "тариф",
    howItems: [
      {
        title: "Сканируйте QR и начинайте тренировку.",
        desc: "Сканируйте QR-коды в залах через приложение FitNest и подтверждайте вход за секунды.",
      },
      {
        title: "Как работает FitNest?",
        desc: "Начать легко: активируйте подписку и сразу переходите к тренировкам.",
      },
      {
        title: "Выберите удобный способ регистрации.",
        desc: "Скачайте приложение FitNest и сделайте первый шаг к цели.",
      },
      {
        title: "Найдите зал под ваш формат тренировок.",
        desc: "Используйте фильтры в приложении, чтобы выбрать подходящий центр.",
      },
    ],
    mobileTitle: "Мобильный <span class='text-primary-700'>FitNest</span>",
    mobileHeading: "Станьте ближе к здоровому образу жизни",
    mobileDescription: "чтобы держать в балансе тело, мысли и мотивацию.",
  },
  offers: {
    ...en.offers,
    heroTitle: "Выберите план для баланса тела и жизни",
    months: "мес",
    whatAwaits: "планах: что включено?",
    includedGyms: "Залы в составе пакета",
    appHeading: "Сделайте шаг к здоровому образу жизни",
    appDescription: "чтобы держать тело, разум и мотивацию в балансе.",
  },
  fitMarket: {
    ...en.fitMarket,
    heroTitle: "Спортивное питание и экипировка",
    heroDescription:
      "Здесь вы найдете краткую информацию о популярных добавках и переходы в надежные магазины.",
    newBadge: "Новое",
    cardDetailsAria: "к деталям",
    detailsDescription:
      "Мультивитамины, витамин D, омега-3 и добавки для общего здоровья.",
    contact: "Контакт",
    address: "Адрес",
    workHours: "Часы работы",
    map: "Карта",
    visit: "Перейти",
  },
  centers: {
    ...en.centers,
    heroTitle: "Выберите зал под себя",
    heroDescription: "Мы собрали комфортные и мотивирующие залы в одном месте.",
    searchPlace: "Поиск места",
    cityDistrict: "Город / Район",
    trainingTypes: "Виды тренировок",
    membership: "Подписка",
    reset: "Сброс",
    workHours: "Часы работы",
    detailsAria: "подробности",
    detailsSubtitle: "Идеальное место, чтобы стать сильнее и энергичнее.",
    previousImage: "Предыдущее фото",
    nextImage: "Следующее фото",
    aboutGym: "О зале",
    aboutText:
      "ProFit Club предлагает просторные зоны, современное оборудование и комфортную атмосферу для любого уровня.",
    equipment: "Оборудование",
    equipmentText:
      "Кардио-тренажеры • Функциональная зона • Стойка для приседа • Гантели/штанги • Кабельные тренажеры • Зона растяжки",
    coaches: "Тренеры",
    contact: "Контакт",
    address: "Адрес",
    workHoursTitle: "Часы работы",
    map: "Карта",
  },
  faq: {
    title: "FAQ",
    subtitle: "часто задаваемые вопросы",
    items: [
      {
        title: "Как работает FitNest?",
        content: "Выберите план и активируйте вход в зал через QR в приложении.",
      },
      {
        title: "Какие залы доступны?",
        content: "Смотрите список залов на странице Залы с помощью фильтров.",
      },
      {
        title: "Как изменить подписку?",
        content: "Обновить план можно в профиле или на странице подписок.",
      },
    ],
  },
  contact: {
    title: "Связаться с нами",
    subtitle: "Наша команда свяжется с вами",
    name: "Имя",
    email: "Email",
    phone: "Телефон",
    message: "Введите сообщение",
    send: "Отправить",
  },
  feedback: {
    title: "Жалобы и предложения",
    subtitle: "Ваше мнение важно для нас - поделитесь им, и мы вас услышим!",
    fullName: "Имя, Фамилия",
    email: "Email",
    requestType: "Тип обращения",
    complaint: "Жалоба",
    suggestion: "Предложение",
    other: "Другое",
    message: "Введите сообщение",
    send: "Отправить",
  },
  privacy: {
    title: "Политика конфиденциальности",
    subtitle: "Защита ваших персональных данных - наш приоритет",
    items: [
      { title: "Общая информация", text: "Политика описывает сбор, использование и защиту данных." },
      { title: "Собираемые данные", text: "Могут собираться данные аккаунта, платежей и аналитики." },
      { title: "Использование данных", text: "Данные применяются для улучшения сервиса и поддержки." },
      { title: "Передача данных", text: "Передача возможна только по закону или с вашего согласия." },
      { title: "Ваши права", text: "Вы можете запросить доступ, исправление или удаление данных." },
      { title: "Безопасность", text: "Данные защищены современными мерами безопасности." },
    ],
  },
  terms: {
    title: "Условия использования",
    subtitle: "правила сервиса и принципы ответственности.",
    items: [
      { title: "Общие положения", content: "Используя FitNest, вы соглашаетесь с этими условиями." },
      { title: "Регистрация и аккаунт", content: "Пользователь отвечает за корректность данных аккаунта." },
      { title: "Конфиденциальность и безопасность", content: "Личные данные хранятся конфиденциально и защищены." },
      { title: "Использование сервиса", content: "Контент носит информационный характер и не заменяет медсовет." },
      { title: "Оплата и подписка", content: "Цены и условия могут меняться, актуальная версия в приложении." },
      { title: "Нарушения", content: "При нарушениях аккаунт может быть временно или навсегда заблокирован." },
    ],
  },
  bmi: {
    ...en.bmi,
    heroTitle: "Индекс массы тела",
    heroDescription: "Узнайте идеальный вес. Рассчитайте ИМТ по росту и весу.",
    params: "Параметры",
    weight: "Вес",
    height: "Рост",
    birthDate: "Дата рождения",
    gender: "Пол",
    male: "Мужской",
    female: "Женский",
    calculate: "Рассчитать",
    resultLabel: "Ваш результат ИМТ:",
    underweight: "Недостаточный вес",
    normal: "Норма",
    overweight: "Избыточный вес",
    obesity: "Ожирение",
    noResult: 'Введите параметры и нажмите "Рассчитать", чтобы увидеть результат.',
    facts: "Факты и советы",
    metaMessages: {
      underweight: "Совет: сбалансируйте питание и тренировки.",
      normal: "Отлично! Ваш вес в здоровом диапазоне.",
      overweight: "Совет: увеличьте активность и следите за рационом.",
      obesity: "Рекомендуется персональный план со специалистом.",
    },
    infoItems: [
      { title: "Что такое ИМТ?", description: "Простой показатель соотношения роста и веса." },
      { title: "Риски", description: "Высокий ИМТ может повысить риск болезней сердца и диабета." },
      { title: "Здоровый диапазон", description: "ИМТ 18.5 - 24.9 обычно считается нормальным." },
    ],
    tips: [
      { title: "Физическая активность", description: "Рекомендуется минимум 150 минут умеренной активности в неделю." },
      { title: "Сбалансированное питание", description: "Баланс белков, жиров и углеводов помогает контролю веса." },
    ],
  },
  payment: {
    success: "Оплата прошла успешно",
    failed: "Оплата не удалась",
    paymentMethod: "Способ оплаты",
    date: "Дата",
    status: "Статус",
    successStatus: "Успешно",
    failedStatus: "Ошибка",
  },
};

export const messages: Record<Locale, Messages> = {
  az,
  en,
  ru,
};

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

const enPrivacyItems: Messages["privacy"]["items"] = [
  {
    title: "General information",
    text: "1.1 “FitNest” LLC (hereinafter “FitNest”) acquires and processes personal data belonging to the sports clubs, subscribers and users (hereinafter all three together “partners”) with which it cooperates. This Privacy Policy (hereinafter “Policy”) establishes the scope of such personal data, purposes of acquisition, bases of use, rights of partners and other related issues.\n1.2 Personal data means any information that allows to directly or indirectly identify a person.\n1.3 Processing of personal data means operations performed on personal data (recording, systematization, updating, modification, extraction, anonymization, storage, transfer, destruction of personal data).\n1.4 FitNest is the sole information controller that manages all information related to partners. FitNest makes decisions on how, why and where to use the information, stores and protects this information in an information resource in order to provide services in a comprehensive manner.\n1.5 Partners have the right to request the deletion of personal data from the information resource of FitNest in accordance with the current legislation of the Republic of Azerbaijan.",
  },
  {
    title: "About FitNest",
    text: "2.1 FitNest provides its partners with intermediary services (hereinafter referred to as “services”) to facilitate the use of sports clubs through its proprietary mobile application.\n2.2 The implementation of these services is carried out through a mobile application running on IOS and Android platforms, which has a number of functions that allow you to select sports clubs and gain access.",
  },
  {
    title: "Principles of processing personal data and consent to the Privacy Policy",
    text: "3.1 Partners accept the Privacy Policy by electronic confirmation when registering and thereby consent to the provision of services by FitNest, the collection and processing of necessary data.\n3.2 FitNest will process personal data on the following grounds:\n3.2.1 Use for specific, transparent purposes and in accordance with the legislation;\n3.2.2 Use related to the purposes for which it is obtained and limited to those purposes;\n3.2.3 Use and protection within the framework established by the relevant legislation, for the period determined by the purposes for which it is obtained.",
  },
  {
    title: "Purposes of processing personal data",
    text: "4.1 The purposes of using personal data related to partners for the comprehensive implementation of FitNest's legal obligations:\n4.1.1 Ensuring the requirements of applicable legislative acts and relevant state authorities;\n4.1.2 Ensuring the security of electronic accounts;\n4.1.3 Prevention of existing and potential disputes;\n4.1.4 Full and comprehensive fulfillment of obligations to other partners;\n4.1.5 Preparation of statistical reports, research and analysis;\n4.1.6 Improving the quality of services provided by FitNest;\n4.1.7 Carrying out internal audits;\n4.1.8 Ensuring the interests of FitNest.\n4.2 In addition, partners agree to the sending of necessary letters to their e-mail addresses, notifications addressed within the mobile application and calls to phone numbers in order to respond to their inquiries, provide them with updates related to services and other related matters.\n4.3 This policy applies to information collected by FitNest. In this case, the accuracy of the personal data of the partners depends on them and they are responsible for its accuracy. Incorrectly specified information, including e-mail address, may prevent FitNest from contacting its partners.\n4.4 If FitNest's data collection policy does not satisfy its partners, partners may withdraw their consent to the collection of data. This policy and the consent to the policy are the main legal basis for FitNest to collect data. Partners may also obtain information about the processing of personal data, its transfer to third parties, its use in accordance with the previously defined purposes, and may object to processing contrary to applicable law and purposes.\n4.5 Partners should be aware that when using FitNest's mobile applications and websites, cookies are placed on their electronic devices in order to ensure the use of electronic platforms. By agreeing to this policy, partners also consent to the placement of cookies by FitNest.\n4.6 FitNest stores the personal data it obtains only in connection with the use of applications and services, for a limited period of time, to achieve the intended purposes, and upon the expiration of those periods, if there is no reason to store personal data, it destroys the data related to partners in accordance with Article 9.4 of the Law on Personal Data.",
  },
  {
    title: "Scope of the Privacy Policy",
    text: "The following personal data are collected and processed by FitNest:\n5.1 Personal data - Information such as name, surname, gender, e-mail, phone number of persons using the services is collected and processed;\n5.2 Entry and exit data to sports clubs - FitNest collects and processes information on the use of sports clubs by partners for the purpose of ensuring the security of partners and comprehensive implementation of other obligations;\n5.3 Correspondence and conversation data with FitNest - In order to improve the quality of service, as well as to investigate complaints and resolve disputes, FitNest collects and processes information on communication with partners via e-mail, telephone calls and other means;\n5.4 Electronic data - When using the services, website and mobile applications, the sequence of accessing pages, the device used, internal information about that device, IP address, operating system and browser program information are stored on a server owned by FitNest. Partners can adjust the restrictions regarding this information within their devices.\n5.5 User data - FitNest collects and stores information about the username, registration date and passwords of persons registering in the mobile application for security purposes.\n5.6 Information on legal documents - FitNest stores the bank details of partners and other information specified in required legal documents, and processes it for the purposes specified in this policy.\n5.7 FitNest may send notifications to partners to make them more aware of the services.\n5.8 FitNest will act in accordance with its own interests when using the personal data of its partners.\n5.9 FitNest understands the sensitivity of the collected data and therefore monitors the confidentiality of the data during data processing and the compliance of third parties with whom it cooperates with in accordance with the rules set forth in this policy.\n5.10 If partners have objections to the use of personal data, they may request Fitnest to stop using the data, justifying this.\n5.11 If partners believe that the information they have provided is incorrect or if there are changes to their data, they may contact FitNest to correct the data. Partners can write to fitnestazerbaijan@gmail.com to correct personal data.",
  },
  {
    title: "Main purposes of obtaining personal data",
    text: "6.1 Informing partners about innovations provided by FitNest;\n6.2 Providing support to government agencies, if necessary;\n6.3 Conducting and compiling confidential statistical analyses and market research, both internally and through third parties;\n6.4 Creating and managing electronic accounts of partners;\n6.5 Further improving communication between partners and FitNest, developing services and the electronic platform;\n6.6 Managing purchases, services, orders, payments and other transactions related to FitNest;\n6.7 Further personalizing services, increasing efficiency and improving user experience for individuals using FitNest mobile applications;\n6.8 Preventing illegal transactions, fraud and other similar criminal activities.",
  },
  {
    title: "Transfer of Personal Data",
    text: "7.1 Performs necessary actions to provide technical support, provide information about services, timely update the application used, FitNest communicates with partners, responds to requests and provides other services. FitNest may transfer personal data belonging to partners to third parties with whom it cooperates for the implementation of these necessary actions, including for research purposes, when carrying out reconstruction work related to the application, within the framework of relevant purposes, conditions provided for by law and the consent of partners.\n7.2 The obtained personal data may be transferred to relevant state bodies in cases where FitNest is required by law.\n7.3 If FitNest suspects any violation of the law, it may share some information with relevant government agencies to prevent illegal activity and ensure the security of partners' personal data.",
  },
  {
    title: "Destruction of Collected Data",
    text: "8.1 Partners may request FitNest to delete personal data after using the services. For this, partners should contact the e-mail address created by FitNest for information purposes. After the request, all personal data related to partners will be deleted from FitNest's servers within the framework of Article 9.4 of the Law of the Republic of Azerbaijan on Personal Data.\n8.1.1 Based on legal requirements, some data may not be deleted even after the partners' request, on the basis that the need to store such data is still valid.\n8.2 FitNest will take all reasonable necessary and preventive measures to protect personal data in cases of doubt or defect regarding the security of personal data related to partners.",
  },
  {
    title: "Changes",
    text: "9.1 FitNest may make changes and additions to this Policy from time to time. Prior to making such changes, a prior notice will be sent to the contact details provided by the partners or via the mobile application. The updated version of the Policy shall be deemed to have come into force within 3 (three) calendar days from the date of its posting on the website.\n9.2 After the publication of the Policy with the updated version, the use of the mobile application or website by the partner shall be deemed to be his acceptance of all changes. If the partner does not agree with the changes, he must refuse access to the application or website and stop using the materials and services of the application.",
  },
  {
    title: "How to contact FitNest?",
    text: "10.1 Partners may contact FitNest for further information or for any questions regarding this Privacy Policy via the following email address:\n\nEmail: fitnestazerbaijan@gmail.com\nContact number: +99470 852 2425",
  },
];

const azPrivacyItems: Messages["privacy"]["items"] = [
  {
    title: "Ümumi məlumat",
    text: "1.1 “FitNest” MMC (bundan sonra “FitNest”) əməkdaşlıq etdiyi idman klublarına, abunəçilərə və istifadəçilərə (bundan sonra bu üçü birlikdə “tərəfdaşlar”) aid şəxsi məlumatları əldə edir və emal edir. Bu Məxfilik Siyasəti (bundan sonra “Siyasət”) həmin şəxsi məlumatların həcmini, əldə edilmə məqsədlərini, istifadə əsaslarını, tərəfdaşların hüquqlarını və digər əlaqəli məsələləri müəyyən edir.\n1.2 Şəxsi məlumat bir şəxsi birbaşa və ya dolayı yolla müəyyən etməyə imkan verən hər hansı məlumat deməkdir.\n1.3 Şəxsi məlumatların emalı şəxsi məlumatlar üzərində həyata keçirilən əməliyyatlar deməkdir (şəxsi məlumatların qeydə alınması, sistemləşdirilməsi, yenilənməsi, dəyişdirilməsi, çıxarılması, anonimləşdirilməsi, saxlanması, ötürülməsi, məhv edilməsi).\n1.4 FitNest tərəfdaşlara aid bütün məlumatları idarə edən yeganə məlumat nəzarətçisidir. FitNest məlumatın necə, niyə və harada istifadə olunmasına dair qərarlar qəbul edir, xidmətləri hərtərəfli şəkildə göstərmək məqsədilə bu məlumatı informasiya resursunda saxlayır və qoruyur.\n1.5 Tərəfdaşlar Azərbaycan Respublikasının qüvvədə olan qanunvericiliyinə uyğun olaraq şəxsi məlumatların FitNest-in informasiya resursundan silinməsini tələb etmək hüququna malikdirlər.",
  },
  {
    title: "FitNest haqqında",
    text: "2.1 FitNest tərəfdaşlarına özünə məxsus mobil tətbiq vasitəsilə idman klublarından istifadəni asanlaşdırmaq üçün vasitəçi xidmətlər (bundan sonra “xidmətlər”) təqdim edir.\n2.2 Bu xidmətlərin həyata keçirilməsi IOS və Android platformalarında işləyən, idman klublarını seçməyə və giriş əldə etməyə imkan verən bir sıra funksiyalara malik mobil tətbiq vasitəsilə təmin edilir.",
  },
  {
    title: "Məlumatların emalı prinsipləri və razılıq",
    text: "3.1 Tərəfdaşlar qeydiyyat zamanı elektron təsdiq vasitəsilə Məxfilik Siyasətini qəbul edir və bununla da FitNest tərəfindən xidmətlərin göstərilməsinə, zəruri məlumatların toplanmasına və emalına razılıq verirlər.\n3.2 FitNest şəxsi məlumatları aşağıdakı əsaslarla emal edəcək:\n3.2.1 Müəyyən, şəffaf məqsədlər üçün və qanunvericiliyə uyğun istifadə;\n3.2.2 Əldə edilmə məqsədləri ilə əlaqəli və həmin məqsədlərlə məhdud istifadə;\n3.2.3 Müvafiq qanunvericiliklə müəyyən edilmiş çərçivədə, əldə edilmə məqsədləri ilə müəyyən olunan müddət ərzində istifadə və mühafizə.",
  },
  {
    title: "Məlumatların emalı məqsədləri",
    text: "4.1 FitNest-in hüquqi öhdəliklərinin hərtərəfli icrası üçün tərəfdaşlara aid şəxsi məlumatlardan istifadə məqsədləri:\n4.1.1 Tətbiq olunan qanunvericilik aktlarının və müvafiq dövlət orqanlarının tələblərinin təmin edilməsi;\n4.1.2 Elektron hesabların təhlükəsizliyinin təmin edilməsi;\n4.1.3 Mövcud və potensial mübahisələrin qarşısının alınması;\n4.1.4 Digər tərəfdaşlar qarşısında öhdəliklərin tam və hərtərəfli yerinə yetirilməsi;\n4.1.5 Statistik hesabatların, tədqiqat və təhlillərin hazırlanması;\n4.1.6 FitNest tərəfindən göstərilən xidmətlərin keyfiyyətinin yaxşılaşdırılması;\n4.1.7 Daxili auditlərin aparılması;\n4.1.8 FitNest-in maraqlarının təmin edilməsi.\n4.2 Bundan əlavə, tərəfdaşlar sorğularına cavab verilməsi, onlara xidmətlərlə bağlı yeniliklərin və digər əlaqəli məsələlərin çatdırılması məqsədilə e-poçt ünvanlarına zəruri məktubların göndərilməsinə, mobil tətbiq daxilində ünvanlanan bildirişlərə və telefon nömrələrinə zənglər edilməsinə razılıq verirlər.\n4.3 Bu siyasət FitNest tərəfindən toplanan məlumatlara şamil olunur. Bu halda tərəfdaşların şəxsi məlumatlarının düzgünlüyü onların özündən asılıdır və onun düzgünlüyünə görə məsuliyyət daşıyırlar. Yanlış göstərilmiş məlumatlar, o cümlədən e-poçt ünvanı, FitNest-in tərəfdaşları ilə əlaqə saxlamasına mane ola bilər.\n4.4 Əgər FitNest-in məlumat toplama siyasəti tərəfdaşları qane etmirsə, tərəfdaşlar məlumatların toplanmasına verdikləri razılığı geri götürə bilərlər. Bu siyasət və siyasətə razılıq FitNest-in məlumat toplaması üçün əsas hüquqi bazadır. Tərəfdaşlar həmçinin şəxsi məlumatların emalı, üçüncü tərəflərə ötürülməsi, əvvəldən müəyyən edilmiş məqsədlərə uyğun istifadəsi barədə məlumat əldə edə və qüvvədə olan qanunvericiliyə və məqsədlərə zidd emala etiraz edə bilərlər.\n4.5 Tərəfdaşlar bilməlidirlər ki, FitNest-in mobil tətbiqlərindən və veb-saytlarından istifadə zamanı elektron platformalardan istifadənin təmin edilməsi məqsədilə onların elektron cihazlarına cookie faylları yerləşdirilir. Bu siyasəti qəbul etməklə tərəfdaşlar FitNest tərəfindən cookie fayllarının yerləşdirilməsinə də razılıq verirlər.\n4.6 FitNest əldə etdiyi şəxsi məlumatları yalnız tətbiqlərdən və xidmətlərdən istifadə ilə əlaqədar olaraq, nəzərdə tutulan məqsədlərə nail olmaq üçün məhdud müddət ərzində saxlayır və həmin müddətlər başa çatdıqda şəxsi məlumatların saxlanması üçün əsas yoxdursa, tərəfdaşlara aid məlumatları “Şəxsi məlumatlar haqqında” Qanunun 9.4-cü maddəsinə uyğun olaraq məhv edir.",
  },
  {
    title: "Məxfilik siyasətinin əhatə dairəsi",
    text: "FitNest tərəfindən aşağıdakı şəxsi məlumatlar toplanır və emal edilir:\n5.1 Şəxsi məlumatlar - xidmətlərdən istifadə edən şəxslərin ad, soyad, cins, e-poçt, telefon nömrəsi kimi məlumatları toplanır və emal edilir;\n5.2 İdman klublarına giriş və çıxış məlumatları - FitNest tərəfdaşların təhlükəsizliyinin təmin edilməsi və digər öhdəliklərin hərtərəfli icrası məqsədilə tərəfdaşların idman klublarından istifadəsi barədə məlumatları toplayır və emal edir;\n5.3 FitNest ilə yazışma və danışıq məlumatları - xidmət keyfiyyətinin yaxşılaşdırılması, həmçinin şikayətlərin araşdırılması və mübahisələrin həlli məqsədilə FitNest tərəfdaşlarla e-poçt, telefon zəngi və digər vasitələrlə ünsiyyətə dair məlumatları toplayır və emal edir;\n5.4 Elektron məlumatlar - xidmətlərdən, veb-saytdan və mobil tətbiqlərdən istifadə zamanı səhifələrə daxilolma ardıcıllığı, istifadə olunan cihaz, həmin cihaz haqqında daxili məlumatlar, IP ünvanı, əməliyyat sistemi və brauzer proqramı barədə məlumatlar FitNest-ə məxsus serverdə saxlanılır. Tərəfdaşlar bu məlumatlarla bağlı məhdudiyyətləri öz cihazları daxilində tənzimləyə bilərlər.\n5.5 İstifadəçi məlumatları - FitNest təhlükəsizlik məqsədilə mobil tətbiqdə qeydiyyatdan keçən şəxslərin istifadəçi adı, qeydiyyat tarixi və şifrələri barədə məlumatları toplayır və saxlayır.\n5.6 Hüquqi sənədlər üzrə məlumatlar - FitNest tərəfdaşların bank rekvizitlərini və tələb olunan hüquqi sənədlərdə göstərilən digər məlumatları saxlayır və bu siyasətdə göstərilən məqsədlər üçün emal edir.\n5.7 FitNest tərəfdaşların xidmətlər barədə daha çox məlumatlı olması üçün onlara bildirişlər göndərə bilər.\n5.8 FitNest tərəfdaşlarının şəxsi məlumatlarından istifadə zamanı öz maraqlarına uyğun hərəkət edəcək.\n5.9 FitNest toplanan məlumatların həssaslığını anlayır və bu səbəbdən məlumatların emalı zamanı məxfiliyin qorunmasına və əməkdaşlıq etdiyi üçüncü tərəflərin bu siyasətdə müəyyən edilmiş qaydalara uyğunluğuna nəzarət edir.\n5.10 Əgər tərəfdaşların şəxsi məlumatların istifadəsinə etirazı varsa, bunu əsaslandırmaqla FitNest-dən məlumatların istifadəsinin dayandırılmasını tələb edə bilərlər.\n5.11 Əgər tərəfdaşlar təqdim etdikləri məlumatın yanlış olduğunu düşünürlərsə və ya məlumatlarında dəyişiklik olarsa, məlumatların düzəldilməsi üçün FitNest-lə əlaqə saxlaya bilərlər. Şəxsi məlumatların düzəldilməsi üçün tərəfdaşlar fitnestazerbaijan@gmail.com ünvanına yaza bilərlər.",
  },
  {
    title: "Şəxsi məlumatların əldə edilməsinin əsas məqsədləri",
    text: "6.1 Tərəfdaşların FitNest tərəfindən təqdim olunan yeniliklər barədə məlumatlandırılması;\n6.2 Zərurət yarandıqda dövlət qurumlarına dəstəyin göstərilməsi;\n6.3 Həm daxildə, həm də üçüncü tərəflər vasitəsilə məxfi statistik təhlillərin və bazar araşdırmalarının aparılması və hazırlanması;\n6.4 Tərəfdaşların elektron hesablarının yaradılması və idarə edilməsi;\n6.5 Tərəfdaşlarla FitNest arasında əlaqənin daha da yaxşılaşdırılması, xidmətlərin və elektron platformanın inkişaf etdirilməsi;\n6.6 FitNest ilə əlaqəli satınalmaların, xidmətlərin, sifarişlərin, ödənişlərin və digər əməliyyatların idarə edilməsi;\n6.7 FitNest mobil tətbiqlərindən istifadə edən şəxslər üçün xidmətlərin daha da fərdiləşdirilməsi, səmərəliliyin artırılması və istifadəçi təcrübəsinin yaxşılaşdırılması;\n6.8 Qeyri-qanuni əməliyyatların, dələduzluğun və digər oxşar cinayət xarakterli fəaliyyətlərin qarşısının alınması.",
  },
  {
    title: "Şəxsi məlumatların ötürülməsi",
    text: "7.1 Texniki dəstəyin təmin edilməsi, xidmətlər barədə məlumatın verilməsi, istifadə olunan tətbiqin vaxtında yenilənməsi üçün zəruri hərəkətləri yerinə yetirir, FitNest tərəfdaşlarla əlaqə saxlayır, sorğulara cavab verir və digər xidmətləri göstərir. FitNest bu zəruri hərəkətlərin həyata keçirilməsi üçün əməkdaşlıq etdiyi üçüncü tərəflərə, o cümlədən tədqiqat məqsədləri üçün, tətbiqlə bağlı yenidənqurma işləri aparılarkən, müvafiq məqsədlər çərçivəsində, qanunla nəzərdə tutulmuş şərtlər və tərəfdaşların razılığı əsasında tərəfdaşlara aid şəxsi məlumatları ötürə bilər.\n7.2 Əldə edilmiş şəxsi məlumatlar qanunla tələb olunduğu hallarda müvafiq dövlət orqanlarına ötürülə bilər.\n7.3 Əgər FitNest hər hansı qanun pozuntusundan şübhələnərsə, qeyri-qanuni fəaliyyətin qarşısını almaq və tərəfdaşların şəxsi məlumatlarının təhlükəsizliyini təmin etmək üçün bəzi məlumatları müvafiq dövlət orqanları ilə paylaşa bilər.",
  },
  {
    title: "Toplanmış məlumatların silinməsi",
    text: "8.1 Tərəfdaşlar xidmətlərdən istifadə etdikdən sonra şəxsi məlumatların silinməsini FitNest-dən tələb edə bilərlər. Bunun üçün tərəfdaşlar FitNest tərəfindən məlumat məqsədilə yaradılmış e-poçt ünvanına müraciət etməlidirlər. Müraciətdən sonra tərəfdaşlara aid bütün şəxsi məlumatlar Azərbaycan Respublikasının “Şəxsi məlumatlar haqqında” Qanununun 9.4-cü maddəsi çərçivəsində FitNest serverlərindən silinəcək.\n8.1.1 Hüquqi tələblər əsasında bəzi məlumatlar, onların saxlanmasına ehtiyacın hələ də qüvvədə olması səbəbilə, tərəfdaşların müraciətindən sonra da silinməyə bilər.\n8.2 FitNest tərəfdaşlara aid şəxsi məlumatların təhlükəsizliyi ilə bağlı şübhə və ya qüsur hallarında şəxsi məlumatların qorunması üçün bütün ağlabatan zəruri və qabaqlayıcı tədbirləri görəcək.",
  },
  {
    title: "Dəyişikliklər",
    text: "9.1 FitNest vaxtaşırı bu Siyasətə dəyişiklik və əlavələr edə bilər. Belə dəyişikliklər edilməzdən əvvəl tərəfdaşların təqdim etdiyi əlaqə vasitələrinə və ya mobil tətbiq üzərindən əvvəlcədən bildiriş göndəriləcək. Siyasətin yenilənmiş versiyası veb-saytda yerləşdirildiyi tarixdən etibarən 3 (üç) təqvim günü ərzində qüvvəyə minmiş hesab edilir.\n9.2 Yenilənmiş versiya ilə Siyasət dərc edildikdən sonra tərəfdaşın mobil tətbiqdən və ya veb-saytdan istifadəsi onun bütün dəyişiklikləri qəbul etməsi kimi qiymətləndirilir. Əgər tərəfdaş dəyişikliklərlə razı deyilsə, tətbiqə və ya veb-sayta girişdən imtina etməli və tətbiqin material və xidmətlərindən istifadəni dayandırmalıdır.",
  },
  {
    title: "FitNest ilə əlaqə",
    text: "10.1 Tərəfdaşlar bu Məxfilik Siyasəti ilə bağlı əlavə məlumat və ya hər hansı sual üçün aşağıdakı e-poçt ünvanı vasitəsilə FitNest ilə əlaqə saxlaya bilərlər:\n\nEmail: fitnestazerbaijan@gmail.com\nƏlaqə nömrəsi: +99470 852 2425",
  },
];

const ruPrivacyItems: Messages["privacy"]["items"] = [
  {
    title: "Общая информация",
    text: "1.1 ООО “FitNest” (далее “FitNest”) получает и обрабатывает персональные данные, принадлежащие спортивным клубам, подписчикам и пользователям (далее все трое вместе - “партнеры”), с которыми сотрудничает. Настоящая Политика конфиденциальности (далее “Политика”) определяет объем таких персональных данных, цели получения, основания использования, права партнеров и иные связанные вопросы.\n1.2 Персональные данные означают любую информацию, позволяющую прямо или косвенно идентифицировать лицо.\n1.3 Обработка персональных данных означает операции, выполняемые с персональными данными (запись, систематизация, обновление, изменение, извлечение, обезличивание, хранение, передача, уничтожение персональных данных).\n1.4 FitNest является единственным контролером информации, который управляет всей информацией, связанной с партнерами. FitNest принимает решения о том, как, зачем и где использовать информацию, хранит и защищает эту информацию в информационном ресурсе для комплексного предоставления услуг.\n1.5 Партнеры имеют право требовать удаления персональных данных из информационного ресурса FitNest в соответствии с действующим законодательством Азербайджанской Республики.",
  },
  {
    title: "О FitNest",
    text: "2.1 FitNest предоставляет своим партнерам посреднические услуги (далее - “услуги”) для упрощения использования спортивных клубов через собственное мобильное приложение.\n2.2 Реализация этих услуг осуществляется через мобильное приложение, работающее на платформах IOS и Android, которое имеет ряд функций, позволяющих выбирать спортивные клубы и получать доступ.",
  },
  {
    title: "Принципы обработки и согласие",
    text: "3.1 Партнеры принимают Политику конфиденциальности путем электронного подтверждения при регистрации и тем самым дают согласие на предоставление услуг FitNest, сбор и обработку необходимых данных.\n3.2 FitNest будет обрабатывать персональные данные на следующих основаниях:\n3.2.1 Использование для конкретных, прозрачных целей и в соответствии с законодательством;\n3.2.2 Использование, связанное с целями, для которых данные получены, и ограниченное этими целями;\n3.2.3 Использование и защита в рамках, установленных соответствующим законодательством, в течение периода, определенного целями, для которых данные получены.",
  },
  {
    title: "Цели обработки данных",
    text: "4.1 Цели использования персональных данных, связанных с партнерами, для комплексного выполнения юридических обязательств FitNest:\n4.1.1 Обеспечение требований применимых законодательных актов и соответствующих государственных органов;\n4.1.2 Обеспечение безопасности электронных аккаунтов;\n4.1.3 Предотвращение существующих и потенциальных споров;\n4.1.4 Полное и всестороннее выполнение обязательств перед другими партнерами;\n4.1.5 Подготовка статистических отчетов, исследований и анализа;\n4.1.6 Повышение качества услуг, предоставляемых FitNest;\n4.1.7 Проведение внутренних аудитов;\n4.1.8 Обеспечение интересов FitNest.\n4.2 Кроме того, партнеры соглашаются на отправку необходимых писем на их адреса электронной почты, уведомлений внутри мобильного приложения и звонков на номера телефонов для ответа на их запросы, предоставления обновлений, связанных с услугами, и по другим связанным вопросам.\n4.3 Настоящая политика применяется к информации, собираемой FitNest. В этом случае точность персональных данных партнеров зависит от них самих, и они несут ответственность за ее точность. Неверно указанные данные, включая адрес электронной почты, могут помешать FitNest связаться со своими партнерами.\n4.4 Если политика сбора данных FitNest не удовлетворяет партнеров, партнеры могут отозвать свое согласие на сбор данных. Настоящая политика и согласие с политикой являются основной правовой базой для сбора данных FitNest. Партнеры также могут получать информацию об обработке персональных данных, их передаче третьим лицам, использовании в соответствии с ранее определенными целями и могут возражать против обработки, противоречащей применимому законодательству и целям.\n4.5 Партнерам следует знать, что при использовании мобильных приложений и веб-сайтов FitNest на их электронные устройства размещаются cookie-файлы для обеспечения использования электронных платформ. Соглашаясь с настоящей политикой, партнеры также дают согласие на размещение cookie-файлов FitNest.\n4.6 FitNest хранит полученные персональные данные только в связи с использованием приложений и услуг, в течение ограниченного периода времени, необходимого для достижения предусмотренных целей, и по истечении этих периодов, если отсутствуют основания для хранения персональных данных, уничтожает данные, связанные с партнерами, в соответствии со статьей 9.4 Закона о персональных данных.",
  },
  {
    title: "Объем политики конфиденциальности",
    text: "Следующие персональные данные собираются и обрабатываются FitNest:\n5.1 Персональные данные - собирается и обрабатывается информация, такая как имя, фамилия, пол, электронная почта, номер телефона лиц, использующих услуги;\n5.2 Данные о входе и выходе в спортивные клубы - FitNest собирает и обрабатывает информацию об использовании спортивных клубов партнерами в целях обеспечения безопасности партнеров и комплексного выполнения иных обязательств;\n5.3 Данные переписки и разговоров с FitNest - для повышения качества обслуживания, а также для расследования жалоб и разрешения споров FitNest собирает и обрабатывает информацию о коммуникациях с партнерами по электронной почте, телефонным звонкам и иным средствам;\n5.4 Электронные данные - при использовании услуг, веб-сайта и мобильных приложений последовательность доступа к страницам, используемое устройство, внутренняя информация об этом устройстве, IP-адрес, информация об операционной системе и браузере сохраняются на сервере, принадлежащем FitNest. Партнеры могут настроить ограничения в отношении этой информации в своих устройствах.\n5.5 Пользовательские данные - FitNest собирает и хранит информацию об имени пользователя, дате регистрации и паролях лиц, регистрирующихся в мобильном приложении, в целях безопасности.\n5.6 Информация о юридических документах - FitNest хранит банковские реквизиты партнеров и иную информацию, указанную в требуемых юридических документах, и обрабатывает ее в целях, указанных в настоящей политике.\n5.7 FitNest может направлять партнерам уведомления, чтобы они были более информированы об услугах.\n5.8 FitNest будет действовать в соответствии со своими интересами при использовании персональных данных своих партнеров.\n5.9 FitNest понимает чувствительность собираемых данных и поэтому контролирует конфиденциальность данных при их обработке и соответствие третьих лиц, с которыми он сотрудничает, правилам, установленным в настоящей политике.\n5.10 Если у партнеров есть возражения против использования персональных данных, они могут обратиться к FitNest с требованием прекратить использование данных, обосновав это.\n5.11 Если партнеры считают, что предоставленная ими информация неверна, или если в их данных произошли изменения, они могут обратиться в FitNest для исправления данных. Для исправления персональных данных партнеры могут написать на fitnestazerbaijan@gmail.com.",
  },
  {
    title: "Основные цели получения данных",
    text: "6.1 Информирование партнеров о нововведениях, предоставляемых FitNest;\n6.2 Оказание поддержки государственным органам при необходимости;\n6.3 Проведение и подготовка конфиденциальных статистических анализов и маркетинговых исследований как внутри компании, так и через третьих лиц;\n6.4 Создание и управление электронными аккаунтами партнеров;\n6.5 Дальнейшее улучшение коммуникации между партнерами и FitNest, развитие услуг и электронной платформы;\n6.6 Управление покупками, услугами, заказами, платежами и иными транзакциями, связанными с FitNest;\n6.7 Дальнейшая персонализация услуг, повышение эффективности и улучшение пользовательского опыта для лиц, использующих мобильные приложения FitNest;\n6.8 Предотвращение незаконных транзакций, мошенничества и иных аналогичных преступных действий.",
  },
  {
    title: "Передача персональных данных",
    text: "7.1 Выполняя необходимые действия для обеспечения технической поддержки, предоставления информации об услугах, своевременного обновления используемого приложения, FitNest взаимодействует с партнерами, отвечает на запросы и предоставляет иные услуги. Для реализации этих необходимых действий FitNest может передавать персональные данные партнеров третьим лицам, с которыми он сотрудничает, в том числе в исследовательских целях, при проведении работ по реконструкции, связанных с приложением, в рамках соответствующих целей, условий, предусмотренных законом, и согласия партнеров.\n7.2 Полученные персональные данные могут передаваться соответствующим государственным органам в случаях, когда этого требует закон.\n7.3 Если FitNest подозревает какое-либо нарушение закона, он может передавать часть информации соответствующим государственным органам для предотвращения незаконной деятельности и обеспечения безопасности персональных данных партнеров.",
  },
  {
    title: "Удаление собранных данных",
    text: "8.1 Партнеры могут запросить у FitNest удаление персональных данных после использования услуг. Для этого партнерам следует обратиться по адресу электронной почты, созданному FitNest в информационных целях. После запроса все персональные данные, связанные с партнерами, будут удалены с серверов FitNest в рамках статьи 9.4 Закона Азербайджанской Республики о персональных данных.\n8.1.1 На основании правовых требований некоторые данные могут не удаляться даже после запроса партнеров, если необходимость их хранения остается актуальной.\n8.2 FitNest примет все разумные необходимые и превентивные меры для защиты персональных данных в случаях сомнений или дефектов, связанных с безопасностью персональных данных партнеров.",
  },
  {
    title: "Изменения",
    text: "9.1 FitNest может время от времени вносить изменения и дополнения в настоящую Политику. До внесения таких изменений предварительное уведомление будет направлено на контактные данные, предоставленные партнерами, или через мобильное приложение. Обновленная версия Политики считается вступившей в силу в течение 3 (трех) календарных дней с даты ее размещения на веб-сайте.\n9.2 После публикации обновленной версии Политики использование партнером мобильного приложения или веб-сайта считается принятием им всех изменений. Если партнер не согласен с изменениями, он должен отказаться от доступа к приложению или веб-сайту и прекратить использование материалов и услуг приложения.",
  },
  {
    title: "Как связаться с FitNest",
    text: "10.1 Партнеры могут связаться с FitNest для получения дополнительной информации или по любым вопросам, связанным с настоящей Политикой конфиденциальности, по следующему адресу электронной почты:\n\nEmail: fitnestazerbaijan@gmail.com\nКонтактный номер: +99470 852 2425",
  },
];

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
    items: azPrivacyItems,
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
    items: enPrivacyItems,
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
    items: ruPrivacyItems,
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

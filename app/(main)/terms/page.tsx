import BannerContainer from "@/components/common/BannerContainer"
import AlertIcon from '@/public/icons/alert-circle.svg'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TermItem {
  id: string;
  title: string;
  content: string;
}

const termsData: TermItem[] = [
  {
    id: "1",
    title: "Ümumi müddəalar",
    content:
      "FitNest platformasından istifadə etməklə siz bu şərtlərlə razı olduğunuzu təsdiqləyirsiniz. Platforma sağlam həyat tərzini təşviq etmək məqsədi daşıyır və istifadəçilərə məşq, qidalanma və sağlamlıqla bağlı xidmətlər təqdim edir.",
  },
  {
    id: "2",
    title: "Qeydiyyat və istifadəçi hesabı",
    content:
      "Platformadan tam şəkildə yararlanmaq üçün istifadəçi hesabı yaratmaq tələb olunur. Qeydiyyat zamanı təqdim etdiyiniz məlumatların düzgün və aktual olmasına siz məsuliyyət daşıyırsınız. Hesabınızı üçüncü şəxslərlə paylaşmaq qadağandır.",
  },
  {
    id: "3",
    title: "Məlumatların məxfiliyi və təhlükəsizlik",
    content:
      "FitNest istifadəçi məlumatlarının qorunmasına böyük önəm verir. Bütün şəxsi məlumatlar məxfi saxlanılır və yalnız istifadəçinin razılığı ilə paylaşılır. Platforma müasir təhlükəsizlik standartlarından istifadə edir.",
  },
  {
    id: "4",
    title: "Xidmətlərin istifadəsi və məzmun",
    content:
      "FitNest üzvlərinə təqdim olunan məşq, diyet proqramları və digər məzmun yalnız məlumat məqsədilədir. Bu məlumatlar peşəkar fitness coachları ilə məsləhətlər nəticəsində paylaşılır. İstifadəçi proqramlardan şəxsi məsuliyyətlə yararlanır. İstifadə etməmişdən əvvəl mütləq həkim məsləhəti də alın.",
  },
  {
    id: "5",
    title: "Ödənişlər və abunəlik",
    content:
      "Bəzi xidmətlər ödənişli ola bilər. Abunəlik planlarının qiyməti, müddəti və ləğv qaydaları platformada ayrıca qeyd olunur. FitNest istənilən vaxt qiymətləri və xidmət şərtlərini dəyişmək hüququnu özündə saxlayır.",
  },
  {
    id: "6",
    title: "Qaydaların pozulması və hesabın dayandırılması",
    content:
      "İstifadəçi FitNest platformasından qanunsuz və ya etik qaydalara zidd məqsədlərlə istifadə edə bilməz. Qaydaların pozulması halında hesab xəbərdarlıq edilmədən müvəqqəti və ya daimi şəkildə bağlana bilər.",
  },
];

const Terms = () => {
  return (
    <BannerContainer
      title="İstifadə Şərtləri"
      subtitle={
        <>
          <span className="text-primary-700">FitNest</span>
          <span> xidmətlərindən istifadə zamanı tətbiq olunan qaydalar və məsuliyyət prinsipləri.</span>
        </>
      }
      iconUrl={AlertIcon.src}
    >
      <div className="space-y-4 sm:space-y-8">
        {
          termsData.map((item, index) => (
            <Card key={item.id}>
              <CardHeader className="text-s2 sm:text-h6 font-medium">
                <CardTitle>{index + 1}. {item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-50! text-b2 sm:leading-s1 font-[510px] leading-b2 sm:text-s1">
                {item.content}
              </CardContent>
            </Card>
          ))
        }
      </div>
    </BannerContainer>
  )
}

export default Terms
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/common/cardForPrivacy&Terms";

interface PolicyItem {
    id: number;
    title: string;
    text: string;
}
const context:PolicyItem[] = [
    {id:1,title:"Ümumi məlumat",text:"Bu məxfilik siyasəti istifadəçilərin şəxsi məlumatlarının necə toplandığını, istifadə edildiyini və qorunduğunu izah edir."},
    {id:2,title:"Toplanılan məlumatlar",text:"- Hesab məlumatları (ad, e-poçt)\n- Ödəniş məlumatları (əgər tətbiq olunursa)\n- İstifadəçi fəaliyyətləri və analitika"},
    {id:3,title:"Məlumatların istifadəsi",text:"Məlumatlar xidmətin optimallaşdırılması, ödənişlərin işlənməsi və istifadəçi dəstəyi məqsədi ilə istifadə olunur."},
    {id:4,title:"Məlumatların paylaşılması",text:"Biz sizin məlumatlarınızı üçüncü tərəflərlə yalnız qanunla tələb edilən hallarda və ya sizin razılığınız olduğu təqdirdə paylaşırıq."},
    {id:5,title:"Hüquqlarınız",text:"Siz məlumatlara çıxış, düzəliş və silinmə tələb edə bilərsiniz. Bu hüquqlardan istifadə üçün bizimlə əlaqə saxlayın."},
    {id:6,title:"Təhlükəsizlik",text:"Məlumatlar şifrələmə və təhlükəsizlik protokolları ilə qorunur. Lakin internetdə tam zəmanət olmadığını nəzərə alın."},
]

const PrivacyPolicy = () => {

    return (
        <div>
            <div id="bannerMexfilik" className="w-full h-[186px] min-[768px]:h-[365px] bg-[#5a6ca2]"></div>
            <div className="w-full flex flex-col gap-5 items-center mt-[-42px] min-[768px]:mt-[-147px] min-[1440px]:mt-[-81px] px-4 min-[768px]:px-5 min-[1440px]:px-[297px] mb-10 min-[768px]:mb-14 min-[1440px]:mb-20">
                {
                    context.map(item=>(
                        <Card key={item.id} className="shadow-[0px_5px_10px_0px_rgba(0,172,204,0.3)] min-h-[216px]">
                            <CardHeader>
                                <CardTitle>{item.id}. {item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-500 min-[1440px]:text-card-foreground font-sans">{item.text}</p>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default PrivacyPolicy
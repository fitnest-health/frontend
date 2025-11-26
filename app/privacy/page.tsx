import BannerContainer from "@/components/common/BannerContainer";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import ShieldIcon from '@/public/icons/shield.svg'

interface PolicyItem {
    id: number;
    title: string;
    text: string;
}
const context: PolicyItem[] = [
    { id: 1, title: "Ümumi məlumat", text: "Bu məxfilik siyasəti istifadəçilərin şəxsi məlumatlarının necə toplandığını, istifadə edildiyini və qorunduğunu izah edir." },
    { id: 2, title: "Toplanılan məlumatlar", text: "- Hesab məlumatları (ad, e-poçt)\n- Ödəniş məlumatları (əgər tətbiq olunursa)\n- İstifadəçi fəaliyyətləri və analitika" },
    { id: 3, title: "Məlumatların istifadəsi", text: "Məlumatlar xidmətin optimallaşdırılması, ödənişlərin işlənməsi və istifadəçi dəstəyi məqsədi ilə istifadə olunur." },
    { id: 4, title: "Məlumatların paylaşılması", text: "Biz sizin məlumatlarınızı üçüncü tərəflərlə yalnız qanunla tələb edilən hallarda və ya sizin razılığınız olduğu təqdirdə paylaşırıq." },
    { id: 5, title: "Hüquqlarınız", text: "Siz məlumatlara çıxış, düzəliş və silinmə tələb edə bilərsiniz. Bu hüquqlardan istifadə üçün bizimlə əlaqə saxlayın." },
    { id: 6, title: "Təhlükəsizlik", text: "Məlumatlar şifrələmə və təhlükəsizlik protokolları ilə qorunur. Lakin internetdə tam zəmanət olmadığını nəzərə alın." },
]

const PrivacyPolicy = () => {

    return (
        <BannerContainer
            title="Məxfilik siyasəti"
            subtitle='Şəxsi məlumatlarınızın qorunması bizim üçün prioritetdir'
            iconUrl={ShieldIcon.src}
        >
            <div className="w-full flex flex-col gap-5 items-center">
                {
                    context.map(item => (
                        <Card key={item.id}>
                            <CardHeader className="text-s2 sm:text-h6 font-medium">
                                <CardTitle>{item.id}. {item.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-neutral-50! text-b1 sm:leading-t1 font-normal leading-b1 sm:font-extralight sm:text-t1">
                                {item.text}
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </BannerContainer>
    )
}

export default PrivacyPolicy
import Container from '@/components/common/Container';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface PlanItem {
    id: number;
    title: string;
    text: string;
}
const context: PlanItem[] = [
    { id: 1, title: "Məlumatlarını daxil et", text: "Öz bədən göstəricilərini və gündəlik aktivliyini əlavə et — planın sənə uyğun tərtib olunsun." },
    { id: 2, title: "Məqsədini seç", text: "Arıqlamaq, əzələ artımı və ya balanslı qidalanma məqsədini seç — menyu buna əsasən fərdiləşdiriləcək." },
    { id: 3, title: "Planını yarat", text: "<span class='text-primary-700'>FitNest</span> sənin üçün fərdi menyunu hazırlasın və gündəlik qidalanmanı planlasın." },
]

const NutritionProgramme = () => {

    return (
       <Container className='mt-[173px]'>
            {/* hero common */}
            <div className='w-full py-5 md:pt-[60px] xl:pt-20 mb-6'>
                <h2 className='mb-4 md:mb-7 xl:mb-10 text-gray-50 font-medium text-s1 leading-s1 md:text-h6 md:leading-h6'>Qidalanma planı necə işləyir?</h2>
                <div className="w-full flex flex-col xl:flex-row xl:justify-between gap-5 items-center">
                    {
                        context.map(item => (
                            <Card key={item.id} className='bg-[#0E293D]/30! shadow-none! p-5! rounded-3xl! block! text-white! min-h-46 md:min-h-50 xl:min-h-56 w-full'>
                                <CardHeader className='pb-4'>
                                    <button className='gradient-border-diagonal mb-3 md:mb-5 bg-[#0E293D]/30 backdrop-blur-md rounded-full font-bold text-b2 leading-b2 w-8 h-8 md:w-9 md:h-9'>
                                        {item.id}
                                    </button>
                                    <CardTitle className='font-medium text-s2 leading-s2 md:text-t1 md:leading-t1'>{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="font-medium text-b2 leading-b2 md:text-b1 md:leading-b1" dangerouslySetInnerHTML={{ __html: item.text }}></CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
            {/* app yuklemek */}
       </Container>
    )
}

export default NutritionProgramme

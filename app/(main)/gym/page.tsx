import LangBtn from '@/app/footer/LangBtn'
import Container from "@/components/common/Container";
import HeroBanner from '@/components/common/HeroBanner';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import GymBannerImg from '@/public/images/GymBanner.jpg'

const steps = [
    {
        id: 1,
        title: "Məlumatlarını daxil et",
        desc: "Öz bədən göstəricilərini və gündəlik aktivliyini əlavə et — planın sənə uyğun tərtib olunsun.",
    },
    {
        id: 2,
        title: "Hədəfini seç",
        desc: "Arıqlamaq, əzələ artımı və ya balanslı forma hədəfini seç.",
    },
    {
        id: 3,
        title: "Məşq planını əldə et",
        desc: "FitNest sənə uyğun məşq ardıcıllığı və bərpa günlərini müəyyən edir.",
    },
];


const gym = () => {
    return (
        <>
            <HeroBanner
                imageUrl={GymBannerImg}
                subTitle={<h1 className=" font-bold mb-4 text-t2 leading-t2 md:text-h5 md:leading-h5">
                    Düymə səni
                    <span className="text-primary-700 "> FitNest</span> mobil tətbiqinə / tətbiq mağazasına yönləndirəcək.
                </h1>}
                title="Hədəfinə uyğun məşqlərlə daha güclü və balanslı ol!"
                buttonHref="#"
                buttonText="Tətbiqə keç"
            />
            <Container className="my-20 text-neutral-50">
                <h2 className="text-s1 leading-s1 sm:text-h6 sm:leading-h6 font-medium mb-4 sm:mb-7 lg:mb-10">
                    Məşq planı necə işləyir?
                </h2>



                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
                    {steps.map((step) => (
                        <Card
                            key={step.id}
                            className="gap-0 rounded-3xl p-5 gradient-border bg-[rgba(14,41,61,0.3)] shadow-none text-[rgba(255, 255, 255, 1)]"
                        >
                            <CardHeader className="p-0">
                                <LangBtn
                                    txt={step.id.toString()}
                                    enableClick={false}
                                    className="cursor-none font-bold text-b2 leading-b2 sm:text-b1 sm:leading-b1"
                                />
                            </CardHeader>

                            <CardContent className="p-0">
                                <CardTitle className="font-medium text-s2 leading-s2 sm:text-t1 sm:leading-t1 mb-5 mt-3 sm:mt-5">
                                    {step.title}
                                </CardTitle>

                                <p className="font-medium text-b2 leading-b2 sm:text-b1 sm:leading-b1">
                                    {step.desc}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </>
    )
}

export default gym


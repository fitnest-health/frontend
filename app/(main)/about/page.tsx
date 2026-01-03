import Container from "@/components/common/Container";
import Image from "next/image";

const aboutItems = [
    {
        title: "Məqsədimiz",
        text: (
            <>
                <span className="text-primary-700">FitNest</span>- in məqsədi insanların gündəlik həyatına sağlamlıq
                vərdişlərini gətirməkdir. Biz elmi əsaslara söykənən yanaşma, texnologiya və şəxsi dəstək sayəsində hər kəsin öz
                potensialını reallaşdırmasına kömək edirik. FitNest – yalnız fitness aləti deyil, sağlam həyat üçün bələdçidir.
            </>
        ),
        img: "/images/image1.png",
        alt: "Mission",
        reverse: false,
    },

    {
        title: "Vizyonumuz",
        text: (
            <>
                Bizim vizyonumuz regionun ən güvənilən rəqəmsal sağlamlıq ekosistemi olmaqdır. FitNest elə bir mühit yaradır
                ki, hər bir istifadəçi – istər başlanğıc səviyyəsində, istərsə də peşakar – öz məqsədinə uyğun plan və dəstəyi
                bir məkanda tapa bilsin. Biz texnologiya ilə motivasiyanı birləşdirərək insanların həyatına real dəyər qatırıq.
            </>
        ),
        img: "/images/image2.png",
        alt: "Vision",
        reverse: true,
    },
    {
        title: "Missiyamız",
        text: (
            <>
                <span className="text-primary-700">FitNest</span> – in missiyası sağlam həyat tərzini interaktiv və
                ilhamverici təcrübəyə çevirməkdir. Biz bədəni, zehni və motivasiyanı bir araya gətirən ağıllı sistem quraraq,
                istifadəçilərimizin uzunmüddətli nəticələr əldə etməsini təmin edirik. FitNest – bir tətbiqdən daha çox,
                sağlamlıq mədəniyyətini paylaşan icmadır.
            </>
        ),
        img: "/images/image3.png",
        alt: "Goal",
        reverse: false,
    },
];


const About = () => {
    return (
        <>
            <div className='flex justify-center md:pt-20 md:pb-[122px] sm:pt-12 sm:pb-[70px] py-6 px-4 mt-20 md:mt-[193px] text-white bg-blue-500 w-full bg-linear-to-l from-[#243665] to-[#0B1223]'>
                <div>
                    <h2 className='text-t1 text-center leading-t1 font-medium sm:text-h2 sm:leading-h2'>Sağlam Həyat. Güclü Sən.</h2>
                    <p className='text-b2 mx-auto text-center leading-b2 font-medium mt-3 sm:text-s2 sm:leading-s2 max-w-[360px] sm:max-w-[460px] md:max-w-[628px]'>
                        <span className="text-primary-700">FitNest</span>
                        <span> — sağlam həyat tərzini asan, maraqlı və davamlı edən bir platformadır.
                            Burada hər addım səni fərdi məşq proqramları, balanslı qidalanma planları və motivasiyaedici icma ilə öz ən güclü versiyana yaxınlaşdırır.
                        </span>
                    </p>
                </div>
            </div>
            <Container>
                <section className="md:mb-20 sm:mb-10 mb-4 mt-14">
                    <div className="md:space-y-[151px] sm:space-y-5 space-y-4">
                        {aboutItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative grid sm:grid-cols-2 grid-cols-1 items-stretch justify-between sm:gap-5"
                            >
                                <div className={`z-20 gradient-border rounded-4xl h-full order-2 sm:order-${item.reverse ? "2" : "1"}`}>
                                    <div className="p-8 h-full flex flex-col gap-6">
                                        <h2 className="text-t1 leading-t1 md:text-h4 font-bold md:leading-h4 text-neutral-50">
                                            {item.title}
                                        </h2>
                                        <p className="text-b1 leading-b1 md:text-t1 md:leading-t1 text-neutral-50">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>

                                <div className={`hidden sm:block relative h-full w-full rounded-4xl order-${item.reverse ? "1" : "2"}`}>
                                    <Image
                                        src={item.img}
                                        alt={item.alt}
                                        fill
                                        className="object-cover rounded-4xl"
                                        priority
                                    />
                                </div>

                                <div className="sm:hidden block absolute top-0 left-0 h-full w-full rounded-4xl opacity-60 ">
                                    <Image
                                        src={item.img}
                                        alt={item.alt}
                                        fill
                                        className="object-cover rounded-4xl"
                                        priority
                                    />
                                </div>
                            </div>

                        ))}
                    </div>

                    <div className="text-center md:mt-12 sm:mt-10 mt-7">
                        <h4 className="font-medium md:text-h4 md:leading-h4 sm:text-t1 sm:leading-t1 text-s2 leading-s2 text-neutral-50">
                            <span className="text-primary-700">FitNest</span> - Sənin sağlamlıq yol yoldaşındır.
                        </h4>
                        <p className="text-b3 leading-b3 sm:text-b1 sm:leading-b1 md:text-s1 md:leading-s1 mt-7 max-w-[780px] mx-auto text-neutral-50">
                            Biz inanırıq ki, hər dəyişiklik bir addımla başlayır.
                            <span className="text-primary-700"> FitNest</span> bu addımı atmaq üçün sənin yanındadır -
                            sağlam, balanslı və motivasiyalı həyat üçün.
                        </p>
                    </div>
                </section>

            </Container>
        </>
    );
};

export default About;



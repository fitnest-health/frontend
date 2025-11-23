import BannerContainer from "@/components/common/BannerContainer";

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
        <BannerContainer
            title="Sağlam Həyat. Güclü Sən."
            subtitle={
                <>
                    <span className="text-primary-700">FitNest</span>
                    <span> — sağlam həyat tərzini asan, maraqlı və davamlı edən bir platformadır.
                        Burada hər addım səni fərdi məşq proqramları, balanslı qidalanma planları və motivasiyaedici icma ilə öz ən güclü versiyana yaxınlaşdırır.
                    </span>
                </>
            }
        >
            <section className="w-full pt-14 pb-20 mt-8">
                {aboutItems.map((item, index) => (
                    <div
                        key={index}
                        className={`grid sm:grid-cols-2 grid-cols-1 items-stretch justify-between gap-5 mt-[151px] ${item.reverse ? "flex-row-reverse" : ""
                            }`}
                    >
                        <div className="gradient-border rounded-4xl h-full">
                            <div className="p-8 h-full flex flex-col gap-6">
                                <h2 className="text-t1 leading-t1 md:text-h4 font-bold md:leading-h4 text-neutral-50">
                                    {item.title}
                                </h2>

                                <p className="text-b1 leading-b1 md:text-t1 md:leading-t1 text-neutral-50">
                                    {item.text}
                                </p>
                            </div>
                        </div>

                        <div className="relative h-full w-full">
                            <div
                                className="absolute top-0 h-full w-full rounded-4xl bg-cover bg-center sm:hidden"
                                style={{ backgroundImage: `url(${item.img})` }}
                            ></div>

                            <img
                                src={item.img}
                                alt={item.alt}
                                className="hidden sm:block w-full h-full object-cover rounded-4xl"
                            />
                        </div>
                    </div>
                ))}

                <div className="text-center mt-12">
                    <h4 className="font-medium md:text-h4 md:leading-h4 sm:text-t1 sm:leading-t1 text-s2 leading-s2 text-neutral-50">
                        <span className="text-primary-700">FitNest</span> - Sənin sağlamlıq yol yoldaşındır.
                    </h4>
                    <p className="text-b3 leading-b3 sm:text-b1 sm:leading-b1 md:text-s1 md:leading-s1 mt-7 max-w-[780px] mx-auto text-neutral-50">
                        Biz inanırıq ki, hər dəyişiklik bir addımla başlayır.
                        <span className="color-primary-700">FitNest</span> bu addımı atmaq üçün sənin yanındadır -
                        sağlam, balanslı və motivasiyalı həyat üçün.
                    </p>
                </div>
            </section>

        </BannerContainer>
    );
};

export default About;



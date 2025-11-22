"use client";

const About = () => {
    return (
        <section className="w-full py-15 mt-9 md:px-12 lg:px-15 space-y-24">
            <div className="flex flex-row md:flex-row items-center justify-between gap-10">
                <div className="gradient-border rounded-4xl  w-[350px] h-[368px] md:w-[628px] md:h-[448px]">
                    <div className="r-[32px] p-8 h-full flex flex-col gap-6">
                        <h2 className="text-t1 leading-t1 md:text-h4 font-bold md:leading-h4 text-neutral-50">Məqsədimiz</h2>
                        <p className="text-b1 leading-b1 md:text-t1 md:leading-t1 text-neutral-50">
                            <span className="text-primary-700">FitNest</span>- in məqsədi insanların gündəlik həyatına sağlamlıq vərdişlərini gətirməkdir. Biz elmi əsaslara söykənən yanaşma, texnologiya və şəxsi dəstək sayəsində hər kəsin öz potensialını reallaşdırmasına kömək edirik. FitNest - yalnız fitness aləti deyil, sağlam həyat üçün bələdçidir.
                        </p>
                    </div>
                </div>
                <div className="w-[350px] h-[368px] md:w-[628px] md:h-[448px]">
                    <img
                        src="/images/image1.png"
                        className="w-full h-full object-cover rounded-[32px]"
                        alt="Mission"
                    />
                </div>
            </div>
            <div className="flex flex-row md:flex-row items-center justify-between gap-10">
                <div className="w-[350px] h-[368px] md:w-[628px] md:h-[448px]">
                    <img
                        src="/images/image2.png"
                        className="w-full h-full object-cover rounded-[32px]"
                        alt="Vision"
                    />
                </div>
                <div className="gradient-border  rounded-4xl  w-[350px] h-[368px] md:w-[628px] md:h-[448px]">
                    <div className="r-[32px] p-8 h-full flex flex-col gap-6">
                        <h2 className="text-t1 leading-t1 md:text-h4 font-bold md:leading-h4 text-neutral-50">Vizyonumuz</h2>
                        <p className="text-b1 leading-b1 md:text-t1 md:leading-t1 text-neutral-50">
                            Bizim vizyonumuz regionun ən güvənilən rəqəmsal sağlamlıq ekosistemi olmaqdır. FitNest elə bir mühit yaradır ki, hər bir istifadəçi - istər başlanğıc səviyyəsində, istərsə də peşakar - öz məqsədinə uyğun plan və dəstəyi bir məkanda tapa bilsin. Biz texnologiya ilə motivasiyanı birləşdirərək insanların həyatına real dəyər qatırıq.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row md:flex-row items-center justify-between gap-10">
                <div className="gradient-border rounded-4xl  w-[350px] h-[368px] md:w-[628px] md:h-[448px]">
                    <div className="r-[32px] p-8 h-full flex flex-col md:gap-6 gap-0">
                        <h2 className="text-t1 leading-t1 md:text-h4 font-bold md:leading-h4 text-neutral-50">Missiyamız</h2>
                        <p className="text-b1 leading-b1 md:text-t1 md:leading-t1 text-neutral-50">
                            <span className="text-primary-700">FitNest</span> - in missiyası sağlam həyat tərzini interaktiv və ilhamverici təcrübəyə çevirməkdir. Biz bədəni, zehni və motivasiyanı bir araya gətirən ağıllı sistem quraraq, istifadəçilərimizin uzunmüddətli nəticələr əldə etməsini təmin edirik. FitNest - bir tətbiqdən daha çox,sağlamlıq mədəniyyətini paylaşan icmadır.
                        </p>
                    </div>
                </div>
                <div className="w-[350px] h-[368px] md:w-[628px] md:h-[448px]">
                    <img
                        src="/images/image3.png"
                        className="w-full h-full object-cover rounded-[32px]"
                        alt="Goal"
                    />
                </div>
            </div>
            <div className="text-center mt-12">
                <h4 className="text-t1 leading-t1 md:text-h4 font-medium md:leading-h4 text-neutral-50">
                    <span className="text-primary-700">FitNest</span> - Sənin sağlamlıq yol yoldaşındır.
                </h4>
                <p className="text-s1 leading-s1 mt-10 max-w-[780px] mx-auto font-normal text-neutral-50">
                    Biz inanırıq ki, hər dəyişiklik bir addımla başlayır. <span className="color-primary-700">FitNest</span> bu addımı atmaq üçün sənin yanındadır - sağlam, balanslı və motivasiyalı həyat üçün.
                </p>
            </div>
        </section>
    );
};

export default About;



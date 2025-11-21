"use client";

const AboutSection = () => {
    return (
        <section className="w-full py-15 mt-9 md:px-12 lg:px-15 space-y-24">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="gradient-border rounded-4xl  w-[628px] h-[448px]">
                    <div className="bg-[#0D1224] r-[32px] p-8 h-full flex flex-col gap-6">
                        <h2 className="text-[40px] font-bold leading-[60px]">Məqsədimiz</h2>
                        <p className="text-[26px] leading-[40px]">
                            <span className="text-[var(--color-primary-700)]">FitNest</span>- in məqsədi insanların gündəlik həyatına sağlamlıq vərdişlərini gətirməkdir. Biz elmi əsaslara söykənən yanaşma, texnologiya və şəxsi dəstək sayəsində hər kəsin öz potensialını reallaşdırmasına kömək edirik. FitNest - yalnız fitness aləti deyil, sağlam həyat üçün bələdçidir.
                        </p>
                    </div>
                </div>
                <div className="w-[628px] h-[448px]">
                    <img
                        src="/images/image1.png"
                        className="w-full h-full object-cover r-[32px]"
                        alt="Mission"
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="w-[628px] h-[448px]">
                    <img
                        src="/images/image2.png"
                        className="w-full h-full object-cover r-[32px]"
                        alt="Vision"
                    />
                </div>
                <div className="gradient-border  rounded-4xl  w-[628px] h-[448px]">
                    <div className="bg-[#0D1224] r-[32px] p-8 h-full flex flex-col gap-6">
                        <h2 className="text-[40px] font-bold leading-[60px]">Vizyonumuz</h2>
                        <p className="text-[26px] leading-[40px]">
                            Bizim vizyonumuz regionun ən güvənilən rəqəmsal sağlamlıq ekosistemi olmaqdır. FitNest elə bir mühit yaradır ki, hər bir istifadəçi - istər başlanğıc səviyyəsində, istərsə də peşakar - öz məqsədinə uyğun plan və dəstəyi bir məkanda tapa bilsin. Biz texnologiya ilə motivasiyanı birləşdirərək insanların həyatına real dəyər qatırıq.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="gradient-border rounded-4xl  w-[628px] h-[448px]">
                    <div className="bg-[#0D1224] r-[32px] p-8 h-full flex flex-col gap-6">
                        <h2 className="text-[40px] font-bold leading-[60px]">Missiyamız</h2>
                        <p className="text-[26px] leading-[40px]">
                            <span className="text-[var(--color-primary-700)]">FitNest</span> - in missiyası sağlam həyat tərzini interaktiv və ilhamverici təcrübəyə çevirməkdir. Biz bədəni, zehni və motivasiyanı bir araya gətirən ağıllı sistem quraraq, istifadəçilərimizin uzunmüddətli nəticələr əldə etməsini təmin edirik. FitNest - bir tətbiqdən daha çox,sağlamlıq mədəniyyətini paylaşan icmadır.
                        </p>
                    </div>
                </div>
                <div className="w-[628px] h-[448px]">
                    <img
                        src="/images/image3.png"
                        className="w-full h-full object-cover r-[32px]"
                        alt="Goal"
                    />
                </div>
            </div>
            <div className="text-center mt-[48px]">
                <h4 className="text-[40px] font-medium leading-[60px]">
                    <span className="text-[var(--color-primary-700)]">FitNest</span> - Sənin sağlamlıq yol yoldaşındır.
                </h4>
                <p className="text-[20px]  leading-[30px] mt-[28px] max-w-[780px] mx-auto font-normal">
                    Biz inanırıq ki, hər dəyişiklik bir addımla başlayır. <span className="text-[var(--color-primary-700)]">FitNest</span> bu addımı atmaq üçün sənin yanındadır - sağlam, balanslı və motivasiyalı həyat üçün.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;



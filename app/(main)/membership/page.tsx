'use client';
import { useState } from 'react';
import Container from '@/components/common/Container';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import ArctionsTapscroll from "@/public/icons/arcticons_tapscroll.svg";

const memberships = [
    {
        id: "standart",
        label: "Standart",
        discount: "5%",
        description: "FitNest-in əsas xidmətlərindən istifadə və partnyor mağazalarda 5% endirim imkanı təqdim edir.",
        type: "Standart",
        fee: "50",
    },
    {
        id: "gold",
        label: "Gold",
        discount: "10%",
        description: "FitNest daxilində daha geniş xidmətlərdən yararlanmaq və bütün partnyor mağazalarda 10% endirim əldə etmək imkanı verir.",
        type: "Gold",
        fee: "100",
    },
    {
        id: "premium",
        label: "Premium",
        discount: "15%",
        description: "Maksimum imtiyazlar təqdim edir: bütün FitNest xidmətlərinə giriş və bütün partnyor platformalarda 15%",
        type: "Premium",
        fee: "150",
    },
];

const Page = () => {
    const [openMobileCard, setOpenMobileCard] = useState<string | null>(null);
    const [openTabletCard, setOpenTabletCard] = useState<string | null>(null);

    const handleMobileCardClick = (id: string) => {
        setOpenMobileCard(prev => (prev === id ? null : id));
    };

    const handleTabletTapClick = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setOpenTabletCard(prev => (prev === id ? null : id));
    };

    return (
        <>
            {/* BANNER */}
            <div className='flex justify-center md:pt-20 md:pb-[122px] sm:pt-12 sm:pb-[70px] py-6 px-4 mt-20 md:mt-[193px] text-white bg-linear-to-l from-[#243665] to-[#0B1223] w-full'>
                <div>
                    <h2 className='text-t1 text-center leading-t1 font-medium sm:text-h2 sm:leading-h2'>
                        Sağlam Həyat. Güclü Sən.
                    </h2>
                    <p className='text-b2 mx-auto text-center leading-b2 font-medium mt-3 sm:text-s2 sm:leading-s2 max-w-[360px] sm:max-w-[460px] md:max-w-[628px]'>
                        <span className="text-primary-700">FitNest</span>
                        <span> — sağlam həyat tərzini asan, maraqlı və davamlı edən bir platformadır.</span>
                    </p>
                </div>
            </div>

            <Container>
                <section className="md:mb-14 sm:mb-20 mb-10 mt-20 md:space-y-10 sm:space-y-5 space-y-4">
                    {memberships.map(item => (
                        <div
                            key={item.id}
                            className='md:px-10 md:py-[50px] sm:p-[26px] p-4 md:rounded-4xl rounded-3xl flex flex-col md:flex-row md:gap-[60px] sm:gap-5 bg-softblue-1100 text-neutral-50'
                            onClick={() => {
                                if (window.innerWidth < 640) {
                                    handleMobileCardClick(item.id);
                                }
                            }}
                        >

                            {/* ======== LEFT CARD ======== */}

                            {/* Desktop */}
                            <div className='hidden md:flex md:w-9/20 p-6 md:p-10 rounded-3xl bg-softblue-1000 flex-col justify-between'>
                                <div className='flex justify-between'>
                                    <h5>{item.label}</h5>
                                    <h5>{item.discount}</h5>
                                </div>
                                <div className='flex justify-end'>
                                    <Image src="/Logo.png" alt="logo" width={52} height={50} />
                                </div>
                            </div>

                            {/* Tablet */}
                            <div className='hidden sm:flex md:hidden w-full sm:h-[376px] p-6 rounded-3xl bg-softblue-1000 flex-col justify-between'>
                                <div className='flex justify-between'>
                                    <h5>{item.label}</h5>
                                    <h5>{item.discount}</h5>
                                </div>
                                <div className='flex justify-end'>
                                    <Image src="/Logo.png" alt="logo" width={52} height={50} />
                                </div>
                            </div>

                            {/* Mobile */}
                            <div className={`sm:hidden w-full h-[220px] p-6 rounded-3xl bg-softblue-1000 flex-col justify-between ${openMobileCard === item.id ? 'hidden' : 'flex'}`}>
                                <div className='flex justify-between'>
                                    <h5>{item.label}</h5>
                                    <h5>{item.discount}</h5>
                                </div>
                                <div className='flex justify-end'>
                                    <Image src="/Logo.png" alt="logo" width={52} height={50} />
                                </div>
                            </div>

                            {/* DESKTOP CONTENT */}
                            <div className='hidden md:block md:flex-1'>
                                <h5 className='mb-5'>{item.label} üzvlük kartı</h5>
                                <p className='mb-10'>{item.description}</p>

                                <div className='flex justify-between mb-10'>
                                    <div>
                                        <p>Növü</p>
                                        <p>{item.type}</p>
                                    </div>
                                    <div>
                                        <p>Müddəti</p>
                                        <p>Aylıq</p>
                                    </div>
                                    <div>
                                        <p>Xidmət haqqı</p>
                                        <p>{item.fee}</p>
                                    </div>
                                </div>

                                <Button size="lg">Üzv ol</Button>
                            </div>

                            {/* TABLET TAP SCROLL */}
                            <div className='hidden sm:block md:hidden'>
                                <Image
                                    src={ArctionsTapscroll}
                                    alt="tap-scroll"
                                    className='m-auto cursor-pointer'
                                    onClick={(e) => handleTabletTapClick(item.id, e)}
                                />

                                {openTabletCard === item.id && (
                                    <div className='mt-4'>
                                        <p className='mb-5'>{item.description}</p>

                                        <div className='flex justify-between mb-5'>
                                            <div>
                                                <p>Növü</p>
                                                <p>{item.type}</p>
                                            </div>
                                            <div>
                                                <p>Müddəti</p>
                                                <p>Aylıq</p>
                                            </div>
                                            <div>
                                                <p>Xidmət haqqı</p>
                                                <p>{item.fee}</p>
                                            </div>
                                        </div>

                                        <Button size="lg">Üzv ol</Button>
                                    </div>
                                )}
                            </div>

                            {/* MOBILE CONTENT */}
                            <div className={`sm:hidden ${openMobileCard === item.id ? 'block' : 'hidden'}`}>
                                <p className='mb-5 mt-4'>{item.description}</p>

                                <div className='flex justify-between mb-5'>
                                    <div>
                                        <p>Növü</p>
                                        <p>{item.type}</p>
                                    </div>
                                    <div>
                                        <p>Müddəti</p>
                                        <p>Aylıq</p>
                                    </div>
                                    <div>
                                        <p>Xidmət haqqı</p>
                                        <p>{item.fee}</p>
                                    </div>
                                </div>

                                <Button size="lg">Üzv ol</Button>
                            </div>

                        </div>
                    ))}
                </section>
            </Container>
        </>
    );
};

export default Page;

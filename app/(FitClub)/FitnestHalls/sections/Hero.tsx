import Image from 'next/image'
import React from 'react'
import mesqZaliSecHeroImg from '@/public/images/mesqZaliSecHeroImg.jpg';
import Container from '@/components/common/Container';

const Hero = () => {

    return (
        <div className='mt-[-152px] lg:h-screen md:h-[450px] h-[205px] relative'>
            <div className='absolute inset-0 size-full'>
                <Image src={mesqZaliSecHeroImg} alt="arrow" className='size-full object-cover' />
                <div className='absolute inset-0 bg-linear-to-b from-[#1A2A2D] from-40% to-[#000000] opacity-60' />
            </div>
            <Container className='absolute z-20 inset-0 mt-15 md:mt-28 lg:mt-33 flex flex-col justify-end md:justify-center min-[1440px]:justify-end! pb-5 min-[1440px]:pb-12'>
                <div className='text-gray-50 w-full'>
                    <h2 className='text-s1 leading-s1 md:text-h6 md:leading-h6 min-[1440px]:text-h4 min-[1440px]:leading-h4 font-semibold mb-0.5 md:mb-3 min-[1440px]:mb-6'>Öz məşq tərzinizə uyğun zal tapın</h2>
                    <p className='text-b2 leading-b3 md:text-s2 md:leading-s2 min-[1440px]:text-t2 min-[1440px]:leading-t2 max-w-[320px] md:max-w-[440px] min-[1440px]:max-w-[588px]'>Axtardığınız idman mühitini tapmaq üçün yüzlərlə opsiyanı kəşf edin.</p>
                </div>
            </Container>
        </div>
    )
}

export default Hero

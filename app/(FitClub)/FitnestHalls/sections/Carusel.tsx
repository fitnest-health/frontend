import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ArrowForward from '@/public/icons/arrow-forward.svg';
import LocationBoz from '@/public/icons/locationBoz.svg';
import CallBoz from '@/public/icons/clockBoz.svg';
import ClockBoz from '@/public/icons/callBoz.svg';
import hallCaruselImg1 from '@/public/images/hallCaruselImg1.jpg';
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';

interface SlideItem {
    id: number;
    title: string;
    text: string;
    src: StaticImageData;
    href: string;
}
const caruselContext: SlideItem[] = [
    { id: 1, title: "Power Gym", text: "<span class='text-primary-700'>FitNest</span>-in mütəxəssisləri illərin bilik və təcrübəsini sənin gündəlik inkişafına yönəldir.", src: hallCaruselImg1, href: '/' },
    { id: 2, title: "Strong Gym", text: "Sağlam bədən düzgün qidalanmadan başlayır — <span class='text-primary-700'>FitNest</span> sənə bunun üçün yol göstərir.", src: hallCaruselImg1, href: '/' },
    { id: 3, title: "Basqa Gym", text: "Məşqçilərimiz həm proqramlarınla, həm də gündəlik tövsiyələri ilə inkişafına dəstək olur.", src: hallCaruselImg1, href: '/' },
]


const Carusel = () => {
  return (
    <div className='mb-10'>
        <Carousel
            opts={{
                loop: true,
                align: "start",
            }}
            className="w-full">
            <CarouselContent className='-ml-5'>
                {caruselContext.map((item) => (
                    <CarouselItem key={item.id} className='pl-5 min-[468px]:basis-1/2 min-[1440px]:basis-1/3!'>
                        <div className=' rounded-2xl p-4 md:p-7 bg-softblue-950 flex flex-col gap-2 md:gap-6'>
                            <div className='w-full md:relative rounded-[12px] overflow-hidden h-[150px] xl:min-h-[250px]'>
                                <Image src={item.src} alt="arrow" className='size-full object-cover md:absolute md:inset-0 md:z-1' />
                                <div className='max-md:hidden absolute z-2 text-b1 leading-b1 font-bold py-4 px-7 text-white rounded-4xl gradient-border-diagonal bg-[#123B55/30%] max-w-[100px] md:hidden backdrop-blur-2xl'>Standart</div>
                            </div>
                            <div className='text-b3 leading-b3 font-bold py-4 px-6 text-white rounded-4xl gradient-border-diagonal bg-[#123B55/30%] max-w-[100px] md:hidden'>Standart</div>
                            <div className='flex flex-col gap-0.5 md:gap-4'>
                                <h2 className='text-b2 leading-b2 md:text-s1 md:leading-s1 font-semibold ' dangerouslySetInnerHTML={{ __html: item.title }}></h2>
                                <p className='text-b3 leading-b3 md:text-b2 md:leading-b2 text-primary-700 font-medium md:font-bold'>Cardio & Ağırlıq</p>
                            </div>
                            <div className='flex flex-col md:flex-row md:justify-between'>
                                <div id='credetentials' className='max-[1440px]:pl-2 text-neutral-500 flex flex-col gap-1 md:gap-3'>
                                    <div  className='flex items-center min-h-[30px] gap-2 text-[#C1C1CC]'>
                                        <Image src={LocationBoz} alt='locationIcon' className='md:w-5! aspect-square' width={14} height={14} />
                                        <p className='text-b3 leading-b3 md:font-medium md:text-b2 md:leading-b2'>Bakı, Nizami 123</p>
                                    </div>
                                    <div  className='flex items-center gap-2 text-[#C1C1CC] min-h-[30px]'>
                                        <Image src={CallBoz} alt='callIcon'className='md:w-5! aspect-square' width={14} height={14} />
                                        <p className='text-b3 leading-b3 md:font-medium md:text-b2 md:leading-b2'>+994 55 555 55 55</p>
                                    </div>
                                    <div className='flex items-center gap-2 text-[#C1C1CC] min-h-[30px]'>
                                        <Image src={ClockBoz} alt='clockIcon' className='md:w-5! aspect-square' width={14} height={14} />
                                        <p className='text-b3 leading-b3 md:font-medium md:text-b2 md:leading-b2'>İş saatları: 09:00  -20:00</p>
                                    </div>
                                </div>
                                <Link href={item.href} className="self-end h-6 md:h-12 rounded-full aspect-square cursor-pointer gradient-border-diagonal bg-[#0E293D]/30 backdrop-blur-md">
                                    <Image src={ArrowForward} alt="arrow" />
                                </Link>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className='mt-5'>
                <CarouselPrevious />
                <CarouselNext />
            </div>
        </Carousel>
    </div>
  )
}

export default Carusel

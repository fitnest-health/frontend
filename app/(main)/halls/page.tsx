'use client'
import Container from '@/components/common/Container'
import Hero from '@/components/common/halls-page/Hero'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import ArrowForward from '@/public/icons/arrow-forward.svg';
import LocationBoz from '@/public/icons/locationBoz.svg';
import CallBoz from '@/public/icons/clockBoz.svg';
import ClockBoz from '@/public/icons/callBoz.svg';
import hallCaruselImg1 from '@/public/images/hallCaruselImg1.jpg';

interface SlideItem {
    id: number;
    title: string;
    text: string;
    src: StaticImageData;
    href: string;
}
const caruselContext: SlideItem[] = [
    { id: 1, title: "Power Gym", text: "<span class='text-primary-700'>FitNest</span>-in mütəxəssisləri illərin bilik və təcrübəsini sənin gündəlik inkişafına yönəldir.", src: hallCaruselImg1, href: '/' },
    { id: 2, title: "Sənin qida balansın", text: "Sağlam bədən düzgün qidalanmadan başlayır — <span class='text-primary-700'>FitNest</span> sənə bunun üçün yol göstərir.", src: hallCaruselImg1, href: '/' },
    { id: 3, title: "<span class='text-primary-700'>FitNest</span> Coachları: Səni Yönləndirən Güc və İlham", text: "Məşqçilərimiz həm proqramlarınla, həm də gündəlik tövsiyələri ilə inkişafına dəstək olur.", src: hallCaruselImg1, href: '/' },
]

const HallsMainPage = () => {

    return (
        <>
            <Hero />
            <Container className='py-10 min-[1440px]:py-20 text-gray-50'>
                <div className='flex max-md:items-center md:flex-col min-[1440px]:items-start min-[1440px]:flex-row justify-between gap-4 md:gap-6 mb-4 md:mb-7'>
                    <div className='max-md:max-w-[232px] '>
                        <h2 className='text-b1 leading-b1 font-medium md:text-h6 md:leading-h6 min-[1440px]:text-h3 min-[1440px]:leading-h3 md:mb-2'>İdmansevərlərin Seçimi</h2>
                        <p className='text-b3 leading-b3 md:font-medium md:text-s2 md:leading-s2 min-[1440px]:text-t2 min-[1440px]:leading-t2'>Son zamanların ən çox maraq görən idman məkanları.</p>
                    </div>
                    <Link 
                    href={''}
                    className='text-b3 leading-b3 md:text-b2 md:leading-b2 md:font-medium py-[13px] px-2.5 w-[134px] md:w-[268px] text-nowrap text-center rounded-4xl border border-primary-700 text-primary-700'>Hamısına bax</Link>
                </div>
                {/* <div id="carusel" className='max-sm:grid max-sm:grid-cols-1 min-h-[270px] w-full xl:col-span-5 xl:w-[calc(42%-10px)]'> */}
                    <Carousel
                        opts={{
                            loop: true,
                            align: "start",
                        }}
                        className="w-full">
                        <CarouselContent className='-ml-4'>
                            {caruselContext.map((item) => (
                                <CarouselItem key={item.id} className='pl-4 md:basis-1/2 min-[1440px]:basis-1/3!'>
                                    <div className=' rounded-2xl p-4 bg-softblue-950 flex flex-col gap-2'>
                                        <div className='w-full rounded-[12px] overflow-hidden max-h-[100px]'>
                                            <Image src={item.src} alt="arrow" className='size-full object-cover' />
                                        </div>
                                        <div className='text-b3 leading-b3 font-bold py-4 px-6 text-white rounded-4xl gradient-border-diagonal bg-[#123B55/30%] max-w-[100px]'>Standart</div>
                                        <div className='flex flex-col gap-0.5'>
                                            <h2 className='text-b2 leading-b2 font-semibold' dangerouslySetInnerHTML={{ __html: item.title }}></h2>
                                            <p className='text-b3 leading-b3 text-primary-700 font-medium'>Cardio & Ağırlıq</p>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div id='credetentials' className='pl-2 text-neutral-500 flex flex-col gap-1'>
                                                <div  className='flex items-center gap-2 text-[#C1C1CC]'>
                                                    <Image src={LocationBoz} alt='locationIcon' width={14} height={14} />
                                                    <p className='text-b3 leading-b3'>Bakı, Nizami 123</p>
                                                </div>
                                                <div  className='flex items-center gap-2 text-[#C1C1CC]'>
                                                    <Image src={CallBoz} alt='callIcon' width={14} height={14} />
                                                    <p className='text-b3 leading-b3'>+994 55 555 55 55</p>
                                                </div>
                                                <div  className='flex items-center gap-2 text-[#C1C1CC]'>
                                                    <Image src={ClockBoz} alt='clockIcon' width={14} height={14} />
                                                    <p className='text-b3 leading-b3'>İş saatları: 09:00  -20:00</p>
                                                </div>
                                            </div>
                                            <Link href={item.href} className="self-end h-6 rounded-full aspect-square cursor-pointer gradient-border-diagonal bg-[#0E293D]/30 backdrop-blur-md">
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
                {/* </div> */}
            </Container>
        </>
    )
}

export default HallsMainPage

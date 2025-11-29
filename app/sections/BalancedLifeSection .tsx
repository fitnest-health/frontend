import ArrowForward from '@/public/icons/arrow-forward.svg';
import Coaches from '@/public/images/coaches.jpg';
import FoodBalance from '@/public/images/foodBalance.jpg';
import StartChanging from '@/public/images/startChanging.jpg';
import Image,{ StaticImageData } from 'next/image';
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi
} from "@/components/ui/carousel"
import Fade from "embla-carousel-fade"
import Heading from '@/components/common/Heading';

interface SlideItem {
    id: number;
    title: string;
    text: string;
    src:StaticImageData;
}
const caruselContext: SlideItem[] = [
    { id: 1, title: "Dəyişimi başlat", text: "<span class='text-primary-700'>FitNest</span>-in mütəxəssisləri illərin bilik və təcrübəsini sənin gündəlik inkişafına yönəldir.",src:StartChanging },
    { id: 2, title: "Sənin qida balansın", text: "Sağlam bədən düzgün qidalanmadan başlayır — <span class='text-primary-700'>FitNest</span> sənə bunun üçün yol göstərir.",src:FoodBalance },
    { id: 3, title: "<span class='text-primary-700'>FitNest</span> Coachları: Səni Yönləndirən Güc və İlham", text: "Məşqçilərimiz həm proqramlarınla, həm də gündəlik tövsiyələri ilə inkişafına dəstək olur.",src:Coaches },
]

const BalancedLifeSection  = () => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        if (!api) return

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])
    
    return (
        <div className="bg-softblue-1000 py-10 md:pt-8 xl:py-20 text-gray-50 ">
            <Heading title="Balanslı həyatın başlanğıcı" number={1}/>
            <div className="flex max-xl:flex-col w-full xl:items-top gap-10 md:gap-20 xl:gap-5 xl:grid-cols-12">
                <div id="carusel" className='grid grid-cols-1 w-full xl:col-span-5 xl:w-[calc(42%-10px)]'>
                    <Carousel 
                    setApi={setApi} 
                    plugins={[Fade()]}
                    opts={{ 
                        loop: true,  
                    }} 
                    className="size-full ">
                      <CarouselContent>
                        {caruselContext.map((item) => (
                          <CarouselItem key={item.id}>
                              <div className='min-h-[270px] lg:min-h-[512px] max-w-full flex flex-col p-4 md:p-[70px] xl:p-[50px] relative rounded-4xl'>
                                  <a className="absolute xl:right-[30px] h-12 md:h-[73px] xl:h-[62px] aspect-square xl:bottom-[30px] right-5 bottom-5 cursor-pointer rounded-full bg-[#0E293D]/30 backdrop-blur-md z-3">
                                      <div className='size-full max-md:gradient-border gradient-border-diagonal z-10 rounded-full'><Image src={ArrowForward} fill alt="arrow"/></div>
                                  </a>
                                  <div className='absolute inset-0 rounded-4xl overflow-hidden'>
                                      <Image src={item.src} alt={item.title } fill className='size-full object-cover rounded-4xl'/>
                                  </div>
                                  <div className="size-full flex flex-col max-md:flex-1 md:gap-4 max-md:justify-between max-md:py-[60px] items-start md:mt-auto z-2">
                                      <h2 className='font-semibold text-s2 leading-s2 xl:text-h3 xl:leading-h3' dangerouslySetInnerHTML={{ __html: item.title }}></h2>
                                      <p className="font-semibold text-b2 leading-b2 xl:text-s2 xl:leading-s2 max-w-[362px]" dangerouslySetInnerHTML={{ __html: item.text }} ></p>
                                  </div>
                              </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className='md:mt-5'>
                        <CarouselPrevious  />
                        <CarouselNext />
                      </div>
                    </Carousel>
                </div>
                <div className="xl:flex-1 xl:flex xl:flex-col xl:min-h-[270px] xl:col-span-7">
                    <div className="max-xl:hidden w-full max-h-[270px] items-center gap-5 grid grid-cols-2">
                        <div className="size-full flex p-5 relative aspect-360/270">
                            <div className='absolute inset-0 rounded-4xl overflow-hidden'>
                              <Image src={caruselContext[(current+1)%caruselContext.length]?.src} alt="arrow" className=' object-cover size-full'/>
                            </div>
                            <div className="w-full flex justify-between items-center self-end z-2">
                                <p className="font-semibold text-t2 leading-s2 max-w-[194px]" dangerouslySetInnerHTML={{ __html: caruselContext[(current+1)%caruselContext.length]?.title }}></p>
                                <a className="cursor-pointer gradient-border-diagonal h-[62px] aspect-square rounded-full bg-[#0E293D]/30 backdrop-blur-md grid place-items-center">
                                    <Image src={ArrowForward} fill alt="arrow" />
                                </a>
                            </div>
                        </div>
                        <div className="size-full flex p-5 relative aspect-360/270">
                            <div className='absolute inset-0 rounded-4xl overflow-hidden'>
                              <Image src={caruselContext[(current+2)%caruselContext.length]?.src} fill alt="arrow" className=' object-cover size-full'/>
                            </div>
                            <div className="w-full flex justify-between items-center self-end z-2">
                                <p className="font-semibold text-s2 leading-s2 max-w-[228px]" dangerouslySetInnerHTML={{ __html: caruselContext[(current+2)%caruselContext.length]?.title }}></p>
                                <a className="cursor-pointer gradient-border-diagonal h-[62px] aspect-square rounded-full bg-[#0E293D]/30 backdrop-blur-md grid place-items-center ">
                                    <Image src={ArrowForward} fill alt="arrow" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full xl:h-full xl:pt-[55px] pt-10 xl:pl-[45px]">
                        <p className="font-medium text-b1 leading-b1 text-left md:text-t1 md:leading-t1 xl:text-h6 xl:leading-h6 ">
                            <span className="text-primary-700">FitNest</span> sənə bədənini tanımaq, balansı qorumaq və ən yaxşı formana çatmaq üçün fərdi məşq və qidalanma proqramları təqdim edir.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BalancedLifeSection 
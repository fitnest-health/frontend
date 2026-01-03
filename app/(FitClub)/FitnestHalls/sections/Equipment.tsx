import Pic1 from '@/public/images/pic1.jpg';
import Pic2 from '@/public/images/pic2.jpg';
import Dumbbel from '@/public/icons/dumbbel.svg';
import Coach from '@/public/icons/coach.svg';
import Health from '@/public/icons/health.svg';
import Relax from '@/public/icons/relax.svg';
import Image, { StaticImageData } from 'next/image';

interface Content {
    id:number;
    icon: StaticImageData; 
    title: string;
    desc: string;
}
interface OneQuarter {
    id: number;
    content?: Content[];
    image?: StaticImageData; 
}
const quarters: OneQuarter[]=[
    {id:1,image:Pic1},
    {id:2,content:[
        {
            id:1,
            icon:Dumbbel,
            title:'Müasir avadanlıq',
            desc:'Geniş və təhlükəsiz avadanlıqlarla hər səviyyədə məşq edə bilərsiniz.'
        },
        {
            id:2,
            icon:Coach,
            title:'Təcrübəli məşqçilər',
            desc:'Sertifikatlı məşqçilərimiz fərdi və qrup məşqlərində sizə rəhbərlik edir.'
        }
    ]},
    {id:3,image:Pic2},
    {id:4,content:[
        {
            id:1,
            icon:Health,
            title:'Sağlam həyat tərzi',
            desc:'Müntəzəm idmanla sağlamlıq və enerji səviyyənizi artırın.'
        },
        {
            id:2,
            icon:Relax,
            title:'Rahat və motivasiyaedici mühit',
            desc:'Təmiz, təhlükəsiz və komfortlu mühitdə məşq etmək daha asan və motivasiyalıdır.'
        }
    ]},
]

const Equipment = () => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <div className="w-full flex flex-col items-center gap-1 md:gap-2 min-[1440px]:mb-9 min-[1440px]:mt-5">
            <h2 className="text-s2 leading-s2 md:text-h6 md:leading-h6 min-[1440px]:text-h3 min-[1440px]:leading-h3 font-medium">Hədəfin üçün ideal mühit</h2>
            <p className="text-b2 leading-b3 md:text-s2 md:leading-s2 min-[1440px]:text-t2 min-[1440px]:leading-t2 text-center">Məşq prosesinizi daha effectiv etmək üçün təqdim etdiyimiz üstünlüklər</p>
        </div>
        <div className='flex flex-wrap md:items-stretch min-[1440px]:items-center! gap-5 w-full'>
            {
                quarters.map(quarter=>{
                    const rowIndex = Math.floor((quarter.id - 1) / 2); // 0 = id [1-2], 1 = id [3-4], 2 = id [5-6]
                    const isReversed = rowIndex % 2 !== 0; // true for rowIndex 1,3,5, false for 0,2,4
                    let visualOrder;
                    if (isReversed) {
                        visualOrder = ((quarter.id % 2) !== 0 )? quarter.id + 1 : quarter.id - 1;
                    } else {
                        visualOrder = quarter.id;
                    }
                    
                    return quarter.image ?
                    (<div key={quarter.id} className={`md:order-${visualOrder} w-full md:w-[calc(50%-10px)] rounded-2xl overflow-hidden max-h-[400px] min-[1440px]:max-h-[620px]`}>
                        <Image src={quarter.image} className='object-cover' alt='idman' />
                    </div>) :
                    (<div key={quarter.id} className={`md:order-${visualOrder} w-full md:w-[calc(50%-10px)] flex flex-col gap-[29.5px]  md:gap-[60px] min-[1440px]:gap-[70px] h-fit max-md:mt-[30px] mt-[30px]`}>
                        {
                            quarter.content?.map(elem=>(
                                <div key={elem.id} className='relative size-full rounded-[20px]  gradient-border p-6 '>
                                    <div className='md:py-4 flex flex-col items-center gap-2'>
                                        <h2 className='font-semibold text-s1 leading-s1 min-[1440px]:text-h6 min-[1440px]:leading-h6'>{elem.title}</h2>
                                        <p className='text-b2 leading-b3 min-[1440px]:text-s1 min-[1440px]:leading-s1 text-center max-w-[302px]'>{elem.desc}</p>
                                    </div>
                                    <div className={`absolute ${isReversed ? 'left-0' : 'right-0'} top-0 translate-y-[-50%]`}>
                                        <div className={`rounded-tl-[10px] ${isReversed? 'rounded-br-[10px]':'rounded-bl-[10px]'} rounded-tr-[10px] gradient-border bg-softblue-1100 p-3 w-[60px] h-[60px]`}>
                                            <Image src={elem.icon} alt='idman' className='size-full'/>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>)
                })
            }
        </div>
    </div>
  )
}

export default Equipment

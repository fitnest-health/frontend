import Pic1 from '@/public/images/pic1.jpg';
import Pic2 from '@/public/images/pic2.jpg';
import Dumbbel from '@/public/icons/dumbbel.svg';
import Coach from '@/public/icons/coach.svg';
import Health from '@/public/icons/health.svg';
import Relax from '@/public/icons/relax.svg';
import Image from 'next/image';

const Equipment = () => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <div className="w-full flex flex-col items-center gap-1 ">
            <h2 className="text-s2 leading-s2 font-medium">Hədəfin üçün ideal mühit</h2>
            <p className="text-b2 leading-b3 text-center">Məşq prosesinizi daha effectiv etmək üçün təqdim etdiyimiz üstünlüklər</p>
        </div>
        <div className='flex flex-wrap md:items-stretch min-[1440px]:items-center! gap-5 w-full'>
            <div className='w-full  md:w-[calc(50%-10px)] rounded-2xl overflow-hidden max-h-[400px] min-[1440px]:max-h-[620px]'>
                <Image src={Pic1} className='object-cover object-[60%_30%]' alt='idman' />
            </div>
            <div className='w-full md:w-[calc(50%-10px)] flex flex-col gap-[29.5px]  md:gap-[60px] min-[1440px]:gap-[70px] h-fit max-md:mt-[30px] mt-[30px]'>
                <div className='relative size-full rounded-[20px]  gradient-border p-6 '>
                    <div className='md:py-4 flex flex-col items-center gap-2'>
                        <h2 className='font-semibold text-s1 leading-s1 min-[1440px]:text-h6 min-[1440px]:leading-h6'>Müasir avadanlıq</h2>
                        <p className='text-b2 leading-b3 min-[1440px]:text-s1 min-[1440px]:leading-s1 text-center max-w-[302px]'>Geniş və təhlükəsiz avadanlıqlarla hər səviyyədə məşq edə bilərsiniz.</p>
                    </div>
                    <div className='absolute right-0 top-0 translate-y-[-50%] '>
                        <div className='rounded-tl-[10px] rounded-bl-[10px] rounded-tr-[10px] gradient-border bg-softblue-1100 p-3 w-[60px] h-[60px]'>
                            <Image src={Dumbbel} alt='idman' className='size-full'/>
                        </div>
                    </div>
                </div>
                <div className='relative size-full rounded-[20px]  gradient-border p-6 '>
                    <div className='md:py-4 flex flex-col items-center gap-2'>
                        <h2 className='font-semibold text-s1 leading-s1 min-[1440px]:text-h6 min-[1440px]:leading-h6'>Təcrübəli məşqçilər</h2>
                        <p className='text-b2 leading-b3 min-[1440px]:text-s1 min-[1440px]:leading-s1 text-center max-w-[302px]'>Sertifikatlı məşqçilərimiz fərdi və qrup məşqlərində sizə rəhbərlik edir.</p>
                    </div>
                    <div className='absolute right-0 top-0 translate-y-[-50%] '>
                        <div className='rounded-tl-[10px] rounded-bl-[10px] rounded-tr-[10px] gradient-border bg-softblue-1100 p-3 w-[60px] h-[60px]'>
                            <Image src={Coach} alt='idman' className='size-full'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full md:order-3 md:w-[calc(50%-10px)] rounded-2xl overflow-hidden max-h-[400px] min-[1440px]:max-h-[620px]'>
                <Image src={Pic2} className='object-cover' alt='idman' />
            </div>
            <div className='w-full md:order-2 md:w-[calc(50%-10px)] flex flex-col gap-[29.5px]  md:gap-[60px] min-[1440px]:gap-[70px] h-fit max-md:mt-[30px] mt-[30px]'>
                <div className='relative size-full rounded-[20px]  gradient-border p-6 '>
                    <div className='md:py-4 flex flex-col items-center gap-2'>
                         <h2 className='font-semibold text-s1 leading-s1 min-[1440px]:text-h6 min-[1440px]:leading-h6'>Sağlam həyat tərzi</h2>
                        <p className='text-b2 leading-b3 min-[1440px]:text-s1 min-[1440px]:leading-s1 text-center max-w-[302px]'>Müntəzəm idmanla sağlamlıq və enerji səviyyənizi artırın.</p>
                    </div>
                    <div className='absolute left-0 top-0 translate-y-[-50%] '>
                        <div className='rounded-tl-[10px] rounded-br-[10px] rounded-tr-[10px] gradient-border bg-softblue-1100 p-3 w-[60px] h-[60px]'>
                            <Image src={Health} alt='idman' className='size-full'/>
                        </div>
                    </div>
                </div>
                <div className='relative size-full rounded-[20px]  gradient-border p-6 '>
                    <div className='md:py-4 flex flex-col items-center gap-2'>
                        <h2 className='font-semibold text-s1 leading-s1 min-[1440px]:text-h6 min-[1440px]:leading-h6'>Rahat və motivasiyaedici mühit</h2>
                        <p className='text-b2 leading-b3 min-[1440px]:text-s1 min-[1440px]:leading-s1 text-center max-w-[302px]'>Təmiz, təhlükəsiz və komfortlu mühitdə məşq etmək daha asan və motivasiyalıdır.</p>
                    </div>
                    <div className='absolute left-0 top-0 translate-y-[-50%] '>
                        <div className='rounded-tl-[10px] rounded-br-[10px] rounded-tr-[10px] gradient-border bg-softblue-1100 p-3 w-[60px] h-[60px]'>
                            <Image src={Relax} alt='idman' className='size-full'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Equipment

'use client'
import Container from '@/components/common/Container'
import Hero from '@/app/(FitClub)/FitnestHalls/sections/Hero'
import Carusel from './sections/Carusel'
import ViewAll from './sections/ViewAll'
import Equipment from './sections/Equipment'
import HeroBanner from '@/components/common/HeroBanner'
import mesqZaliSecHeroImg from '@/public/images/mesqZaliSecHeroImg.jpg';

const page = () => {
  
  return (
    <>
      {/* <Hero /> */}
      <div className="mt-[-152px]">
          <HeroBanner withButton={false} 
                  subTitle={<h2 className='text-s1 leading-s1 md:text-h6 md:leading-h6 min-[1440px]:text-h4 min-[1440px]:leading-h4 font-semibold mb-0.5 md:mb-3 min-[1440px]:mb-6'>Öz məşq tərzinizə uyğun zal tapın</h2>} 
                  title={'Axtardığınız idman mühitini tapmaq üçün yüzlərlə opsiyanı kəşf edin.'}  
                  imageUrl={mesqZaliSecHeroImg} 
                  imagePosition="object-top"  />
      </div>
      
      <Container className='py-10 min-[1440px]:py-20 text-gray-50'>
          <ViewAll />
          <Carusel />
          <Equipment />
      </Container>
    </>
  )
}

export default page
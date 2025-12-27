'use client'
import Container from '@/components/common/Container'
import Hero from '@/app/(FitClub)/FitnestHalls/sections/Hero'
import Carusel from './sections/Carusel'
import ViewAll from './sections/ViewAll'
import Equipment from './sections/Equipment'

const page = () => {
  
  return (
    <>
      <Hero />
      <Container className='py-10 min-[1440px]:py-20 text-gray-50'>
          <ViewAll />
          <Carusel />
          <Equipment />
      </Container>
    </>
  )
}

export default page
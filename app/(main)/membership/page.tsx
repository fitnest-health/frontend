import BannerContainer from '@/components/common/BannerContainer'
import Container from '@/components/common/Container'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
    return (
        <BannerContainer

            title="Üzvlük"
            subtitle={
                <>
                    <span className="text-primary-700">FitNest</span>
                    <span> haqqında ən çox soruşulan suallar</span>
                </>
            }
            className="pb-[122px]!"
        >
            <Container className='mx-20'>
                <section className='space-y-10 mt-40 mb-14 text-neutral-50'>
                <div className='px-10 py-[50px] rounded-4xl flex gap-[60px] bg-softblue-1100'>
                    <div className='w-[550px] h-[376px] p-10 rounded-3xl bg-softblue-1000 flex justify-between'>
                        <h5 className='text-gray-50 font-medium lg:text-h5 lg:leading-h5'>Standart</h5>
                        <h2 className='text-gray-50 font-medium lg:text-h5 lg:leading-h5'>5%</h2>
                    </div>
                    <div>
                        <h5 className='mt-2 mb-5 font-medium lg:text-h5 lg:leading-h5'>Standart üzvlük kartı</h5>
                        <p className='mb-10 lg:text-s1 lg:leading-s1'>FitNest-in əsas xidmətlərindən istifadə və partnyor mağazalarda 5% endirim imkanı təqdim edir.</p>
                        <div className='flex justify-between mb-[60px]'>
                            <div className='flex flex-col gap-2 items-center'>
                                <p className='text-neutral-500 lg:text-s1 lg:leading-s1'>Növü</p>
                                <p className='text-gray-50 font-medium lg:text-t1 lg:leading-t1'>Standart</p>
                            </div>
                            <div className='flex flex-col gap-2 items-center'>
                                <p className='text-neutral-500 lg:text-s1 lg:leading-s1'>Müddəti</p>
                                <p className='text-gray-50 font-medium lg:text-t1 lg:leading-t1'>Aylıq</p>
                            </div>
                            <div className='flex flex-col gap-2 items-center'>
                                <p className='text-neutral-500 lg:text-s1 lg:leading-s1'>Xidmət haqqı</p>
                                <p className='text-gray-50 font-medium lg:text-t1 lg:leading-t1'>50</p>
                            </div>
                        </div>
                        <Button size="lg" className='w-[200px] h-12'>Üzv ol</Button>
                    </div>
                </div>
            </section>
            </Container>
        </BannerContainer>
    )
}

export default page
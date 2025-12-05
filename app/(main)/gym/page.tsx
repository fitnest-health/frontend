import LangBtn from '@/app/footer/LangBtn'
import React from 'react'

const gym = () => {
    return (
        <div>
            <div className='mt-20 text-neutral-50'>
                <h2 className='text-s1 leading-s1 sm:text-h6 sm:leading-h6 font-medium '>Məşq olanı necə işləyir?</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-[75px] mb-4 sm:mb-7 lg:mb-10'>
                    <div className='rounded-3xl p-5 border border-aqua-900'>
                        <LangBtn txt="1" />
                        <h3 className='font-medium text-s2 leading-s2 sm:text-t1 sm:leading-t1 mb-5 mt-3 sm:mt-5'>Məlumatlarını daxil et</h3>
                        <p className='font-medium text-b2 leading-b2 sm:text-b1 sm:leading-b1'>Öz bədən göstəricilərini və gündəlik aktivliyini əlavə et — planın sənə uyğun tərtib olunsun.</p>
                    </div>
                    <div className='rounded-3xl p-5 border border-aqua-900'>
                        <LangBtn txt="1" />
                        <h3 className='font-medium text-s2 leading-s2 sm:text-t1 sm:leading-t1 mb-5 mt-3 sm:mt-5'>Məlumatlarını daxil et</h3>
                        <p className='font-medium text-b2 leading-b2 sm:text-b1 sm:leading-b1'>Öz bədən göstəricilərini və gündəlik aktivliyini əlavə et — planın sənə uyğun tərtib olunsun.</p>
                    </div>
                    <div className='rounded-3xl p-5 border border-aqua-900'>
                        <LangBtn txt="1" />
                        <h3 className='font-medium text-s2 leading-s2 sm:text-t1 sm:leading-t1 mb-5 mt-3 sm:mt-5'>Məlumatlarını daxil et</h3>
                        <p className='font-medium text-b2 leading-b2 sm:text-b1 sm:leading-b1'>Öz bədən göstəricilərini və gündəlik aktivliyini əlavə et — planın sənə uyğun tərtib olunsun.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default gym
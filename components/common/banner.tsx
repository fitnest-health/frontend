import React from 'react'

interface BannerProps {
    title: string;
    subtitle: string | React.ReactNode;
    iconUrl: string;
    iconAlt?: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, iconUrl, iconAlt }) => {
    return (
        <div className='z-10 absolute flex justify-center left-0 md:pt-20 md:pb-[173px] sm:pt-12 sm:pb-[70px] pt-6 pb-[90px] px-4 top-[193px] text-white bg-blue-500 w-full bg-linear-to-l from-[#243665] to-[#0B1223]'>
            <div>
                <div className='flex items-center gap-3'>
                    <img src={iconUrl} alt={iconAlt} />
                    <h2 className='text-t1-size leading-t1 font-medium sm:text-h2-size sm:leading-h2'>{title}</h2>
                </div>
                <p className='text-b2-size leading-b2 font-medium mt-3 sm:text-s2-size sm:leading-s2'>{subtitle}</p>
            </div>
        </div>
    )
}

export default Banner
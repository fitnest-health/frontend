import React from 'react'

interface BannerProps {
    title: string;
    subtitle: string | React.ReactNode;
    iconUrl: string;
    iconAlt?: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, iconUrl, iconAlt }) => {
    return (
        <div className='absolute flex justify-center left-0 pt-20 pb-[173px] top-[193px] text-white bg-blue-500 w-full bg-linear-to-l from-[#243665] to-[#0B1223]'>
            <div>
                <div className='flex items-center gap-3'>
                    <img src={iconUrl} alt={iconAlt} />
                    <h2 className='text-h2-size leading-h2 font-medium'>{title}</h2>
                </div>
                <p className='text-s2-size leading-s2 font-medium mt-3'>{subtitle}</p>
            </div>
        </div>
    )
}

export default Banner
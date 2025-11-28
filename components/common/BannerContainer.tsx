import React from 'react'
import { type LucideIcon } from "lucide-react";

interface BannerProps {
    title: string;
    subtitle: string | React.ReactNode;
    icon?: LucideIcon;
    iconClassName?: string;
    iconUrl?: string;
    children: React.ReactNode;
}

const BannerContainer: React.FC<BannerProps> = ({ title, subtitle, icon: Icon, children, iconClassName, iconUrl }) => {
    return (
        <>
            <div className='absolute flex justify-center left-0 md:pt-20 md:pb-[173px] sm:pt-12 sm:pb-[70px] pt-6 pb-[90px] px-4 top-20 md:top-[193px] text-white bg-blue-500 w-full bg-linear-to-l from-[#243665] to-[#0B1223]'>
                <div>
                    <div className='flex justify-center items-center gap-3'>
                        {
                            iconUrl
                                ? <img src={iconUrl} className='sm:w-12 sm:h-12 w-7 h-7' />
                                : Icon && <Icon className={`${iconClassName} sm:w-12 sm:h-12 w-7 h-7 `} />
                        }
                        <h2 className='text-t1 leading-t1 font-medium sm:text-h2 sm:leading-h2'>{title}</h2>
                    </div>
                    <p className='text-b2 text-center leading-b2 font-medium mt-3 sm:text-s2 sm:leading-s2 max-w-[360px] sm:max-w-[460px] md:max-w-[628px]'>{subtitle}</p>
                </div>
            </div>
            <div className='md:pt-[332px] sm:pt-52 pt-36 lg:max-w-7xl m-auto'>
                {children}
            </div>
        </>
    )
}

export default BannerContainer
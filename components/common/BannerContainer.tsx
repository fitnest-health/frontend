import React from 'react'
import { type LucideIcon } from "lucide-react";
import Container from './Container';

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
            <div className='md:mt-[173px] mt-20 flex justify-center md:pt-20 md:pb-[173px] sm:pt-12 sm:pb-[70px] pt-6 pb-[90px] px-4 text-white bg-blue-500 w-full bg-linear-to-l from-[#243665] to-[#0B1223]'>
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
            <Container className='lg:px-0!'>
                <div className='transform -translate-y-12 sm:-translate-y-10 md:-translate-y-20 z-20 relative pb-10 sm:pb-14 md:pb-20 max-w-[1062px] mx-auto'>
                    {children}
                </div>
            </Container>
        </>
    )
}

export default BannerContainer
"use client";

import LogoImg from '@/public/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from "@/lib/i18n/provider";
import { addLocaleToPathname } from "@/lib/i18n/config";

const Logo = () => {
    const { locale } = useI18n();

    return (
        <div className="min-w-11 h-10 md:w-20 md:h-18 relative">
            <Link href={addLocaleToPathname("/", locale)}>
                <Image src={LogoImg} alt="Logo" fill loading='eager' sizes='w-20 h-18' className='object-contain' />
            </Link>
        </div>
    )
}

export default Logo

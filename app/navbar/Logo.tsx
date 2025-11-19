import LogoImg from '@/public/Logo.png'
import Image from 'next/image'

const Logo = () => {
    return (
        <div className="w-20 h-18 relative">
            <Image src={LogoImg} alt="Logo" fill loading='eager' sizes='w-20 h-18' />
        </div>
    )
}

export default Logo
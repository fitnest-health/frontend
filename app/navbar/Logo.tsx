import LogoImg from '@/public/Logo.png'
import Image from 'next/image'

const Logo = () => {
    return (
        <div className="min-w-11 h-10 md:w-20 md:h-18 relative">
            <Image src={LogoImg} alt="Logo" fill loading='eager' sizes='w-20 h-18' className='object-contain' />
        </div>
    )
}
 
export default Logo
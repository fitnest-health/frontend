import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export const NavLinks = [
    {
        name: 'Əsas səhifə',
        href: '/'
    },
    {
        name: 'Bizi tanıyın',
        href: '/about'
    },
    {
        name: 'FitClub',
        href: '/#',
        icon: <ChevronDown className='w-[18px] h-[18px] flex items-center justify-center' />
    },
    {
        name: 'Üzvlük',
        href: '/#'
    },
]

const Navication = () => {
    return (
        <div className='hidden  md:flex  md:justify-center xl:justify-normal w-full'>
            <nav className="flex justify-between text-white! w-full gradient-border py-4 px-7 rounded-4xl bg-[#0E293D4D] backdrop-blur-md lg:max-w-[528px]">
                {
                    NavLinks.map((item, index) => (
                        <Link key={index} href={item.href} className="text-lg flex items-center gap-1 cursor-pointer z-10 leading-6 font-medium">
                            {item.name}
                            {item.icon && <span className='mr-2'>{item.icon}</span>}
                        </Link>
                    ))
                }
            </nav>
        </div>
    )
}

export default Navication
import Link from 'next/link'

const NavLinks = [
    {
        name: 'Əsas səhifə',
        href: '/'
    },
    {
        name: 'Bizi tanıyın',
        href: '/#'
    },
    {
        name: 'FitClub',
        href: '/#',
        icon: 'fitclub-icon'
    },
    {
        name: 'Üzvlük',
        href: '/#'
    },
]

const Navication = () => {
    return (
        <div className='hidden justify-end items-center md:flex'>
            <nav className="flex justify-between text-white! gradient-border py-4 px-7 rounded-4xl bg-[#0E293D4D] backdrop-blur-md md:min-w-[532px]">
                <Link href="/" className="text-lg leading-6 font-medium hover:text-slate-900">
                    Əsas səhifə
                </Link>
                <Link href="/products" className="text-lg leading-6 font-medium hover:text-slate-900">
                    Bizi tanıyın
                </Link>
                <Link href="/about" className="text-lg leading-6 font-medium hover:text-slate-900">
                    FitClub
                </Link>
                <Link href="/contact" className="text-lg leading-6 font-medium hover:text-slate-900">
                    Üzvlük
                </Link>
            </nav>
        </div>
    )
}

export default Navication
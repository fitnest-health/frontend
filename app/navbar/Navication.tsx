'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export const NavLinks = [
    { name: 'Əsas səhifə', href: '/' },
    { name: 'Bizi tanıyın', href: '/about' },
    {
        name: 'FitClub',
        icon: <ChevronDown className='w-[18px] h-[18px]' />,
        options: [
            { name: 'Wellness Zone', href: '/WellnessZone' },
            { name: 'Su Balansı', href: '/#' },
            { name: 'FitNest Zallar', href: '/#' },
            { name: 'FitMarket', href: '/#' },
            { name: 'İstirahət və Sağlamlıq mərkəzləri', href: '/#' },
        ]
    },
    { name: 'Üzvlük', href: '/#' },
]

const Navication = () => {
    const [open, setOpen] = useState<boolean>(false)
    const pathname = usePathname()

    return (
        <div className='hidden md:flex md:justify-center xl:justify-normal w-full'>
            <nav className="flex justify-between text-white! w-full gradient-border py-4 px-7 rounded-4xl bg-[#0E293D4D] backdrop-blur-md lg:max-w-[528px]">
                {NavLinks.map((item, index) => (
                    <div key={item.name}>
                        {item.options ? (
                            <div className="relative">
                                <div
                                    onClick={() => setOpen(prev => !prev)}
                                    className={`text-lg flex items-center gap-1 cursor-pointer z-10 leading-6 font-medium 
                                        ${open ? "text-primary-700" : ""}`}
                                >
                                    {item.name}
                                    {item.icon &&
                                        <span className={`${open ? 'rotate-180' : ''} mr-2 transition-all duration-300`}>
                                            {item.icon}
                                        </span>}
                                </div>

                                <AnimatePresence>
                                    {open && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-5 bg-[#0E293D] text-center rounded-4xl py-4 px-7 w-[331px]"
                                        >
                                            {item.options.map((opt) => (
                                                <Link
                                                    key={opt.name}
                                                    href={opt.href}
                                                    onClick={() => setOpen(false)}
                                                    className="block py-2 px-4 text-white! hover:text-primary-700!"
                                                >
                                                    {opt.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <Link
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`text-lg flex items-center gap-1 cursor-pointer z-10 leading-6 font-medium
                                    ${pathname === item.href ? "text-primary-700" : ""}`}
                            >
                                {item.name}
                            </Link>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    )
}

export default Navication

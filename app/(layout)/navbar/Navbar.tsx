"use client"

import { useEffect, useState } from "react"
import HamburgerMenu from "./HamburgerMenu"
import Logo from "./Logo"
import NavbarRight from "./NavbarRight"
import Navication from "./Navication"
// import UserAuth from "./UserAuth"

// const initialUser = {
//     // name: 'Fermayil'
// }

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        handleScroll()
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-softblue-1000/95 backdrop-blur-md shadow-lg" : "bg-transparent"
                }`}
        >
            <header className="flex items-center py-5 px-3 sm:px-5 xl:px-0 md:py-6 gap-3 lg:gap-0 justify-between text-cswhite w-full md:max-w-[1288px] mx-auto flex-nowrap">
                <div className="mr-0 md:mr-0">
                    <Logo />
                </div>
                <div className="flex items-center ml-auto md:ml-0 w-auto md:w-full lg:max-w-[887px] gap-1 md:gap-0 min-w-0">
                    <Navication />
                    {/* <UserAuth initialUser={initialUser} /> */}
                    <NavbarRight />
                    <div className="md:hidden h-8 w-px bg-[#898989]" />
                    <HamburgerMenu />
                </div>
            </header>
        </div>
    )
}

export default Navbar

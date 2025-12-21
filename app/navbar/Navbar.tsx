import HamburgerMenu from "./HamburgerMenu"
import Logo from "./Logo"
import Navication from "./Navication"
import UserAuth from "./UserAuth"

const initialUser = {
    // name: 'Fermayil'
}

const Navbar = () => {
    return (
        <header className="z-50 flex absolute transform translate-x-[-50%] lg:top-5 left-1/2 items-center py-5 px-5 xl:px-0 md:py-10 gap-4 lg:gap-0 justify-between text-cswhite w-full md:max-w-[1288px] mx-auto">
            <Logo />
            <div className="flex items-center justify- w-full lg:max-w-[887px]">
                <Navication />
                <UserAuth initialUser={initialUser} />
            </div>
            <HamburgerMenu />
        </header>
    )
}

export default Navbar
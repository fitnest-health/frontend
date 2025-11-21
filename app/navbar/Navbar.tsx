import HamburgerMenu from "./HamburgerMenu"
import Logo from "./Logo"
import Navication from "./Navication"
import UserAuth from "./UserAuth"

const initialUser = {
    // name: 'Fermayil'
}

const Navbar = () => {
    return (
        <header className="flex items-center gap-4 lg:gap-0 justify-between bg-cswhite text-cswhite w-full md:max-w-[1288px] mx-auto">
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
import Logo from "./Logo"
import Navication from "./Navication"
import UserAuth from "./UserAuth"

const initialUser = {
    // name: 'Fermayil'
}

const Navbar = () => {
    return (
        <header className="flex items-center justify-between bg-cswhite text-cswhite md:max-w-[1288px] mx-auto w-full">
            <Logo />
            <div className="flex items-center justify-between flex-1 md:max-w-[887px]">
                <Navication />
                <UserAuth initialUser={initialUser} />
            </div>
        </header>
    )
}

export default Navbar
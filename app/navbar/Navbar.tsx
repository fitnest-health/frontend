"use client";

import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import NavbarRight from "./NavbarRight";
import Navication from "./Navication";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-50 fixed top-0 left-0 right-0 w-full transition-all duration-300 ${
        scrolled ? "bg-primary-950 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center py-4 px-5 xl:px-10 2xl:px-0 gap-4 lg:gap-0 justify-between text-cswhite w-full max-w-[1288px] mx-auto">
        <Logo />
        <div className="hidden md:flex items-center justify-end w-full lg:max-w-[887px]">
          <Navication />
          <NavbarRight />
        </div>
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Navbar;

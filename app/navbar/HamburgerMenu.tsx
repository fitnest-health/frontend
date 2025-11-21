'use client'
import { ChevronRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { NavLinks } from "./Navication";
import Link from "next/link";
import UserAuth from "./UserAuth";

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden w-full relative">
            {/* ICON */}
            <button onClick={() => setOpen(!open)} className="relative z-20 flex justify-end w-full">
                <AnimatePresence mode="wait" initial={false}>
                    {!open ? (
                        <motion.div
                            key="menu"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Menu className="text-primary-700" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="close"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="text-primary-700" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>

            {/* MENU */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ x: "100%" }}      // sağdan başlayır
                        animate={{ x: 0 }}           // ekrana girir
                        exit={{ x: "100%" }}         // bağlananda yenə sağa gedir
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="pt-16 absolute -top-6 -right-5 w-screen xs:w-[320px] h-screen bg-softblue-1000  shadow-md z-10"
                    >
                        <div className="bg-[#0E293D4D] h-full p-5 flex flex-col text-neutral-50">
                            <ul >
                                {
                                    NavLinks.map((item, index) => (
                                        <Link href={item.href} key={index} className="py-4 px-2 flex justify-between items-center active:text-primary-700 gradient-border-bottom leading-b1 text-b1 font-medium">
                                            {item.name}
                                            <ChevronRight />
                                        </Link>
                                    ))
                                }
                            </ul>
                            <UserAuth initialUser={{}} isMobileMode/>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HamburgerMenu;

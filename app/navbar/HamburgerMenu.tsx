'use client'
import { ChevronRight, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { NavLinks } from "./Navication";
import Link from "next/link";
import UserAuth from "./UserAuth";
import { usePathname } from "next/navigation";

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const pathname = usePathname();

    return (
        <div className="md:hidden w-full relative z-20">

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
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="pt-16 absolute  -top-7 -right-5 w-screen xs:w-[320px] min-h-screen bg-softblue-1000 shadow-md z-10"
                    >
                        <div className="bg-[#0E293D4D] h-full p-5 flex flex-col text-neutral-50">

                            <ul>
                                {NavLinks.map((item, index) => (
                                    <div key={index}>

                                        {/* ==== MENU LINK ==== */}
                                        {!item.options ? (
                                            <Link
                                                href={item.href}
                                                onClick={() => setOpen(false)}
                                                className={`py-4 px-2 flex justify-between items-center  leading-b1 text-b1 font-medium 
                                                    ${pathname === item.href ? "text-primary-700 gradient-border-bottom" : "border-b border-neutral-900"}`}
                                            >
                                                {item.name}
                                                <ChevronRight />
                                            </Link>
                                        ) : (
                                            <>
                                                <div
                                                    onClick={() => setDropdown(!dropdown)}
                                                    className={`py-4 px-2 flex justify-between items-center  leading-b1 text-b1 font-medium cursor-pointer
                                                        ${dropdown ? "text-primary-700 gradient-border-bottom" : "border-b border-neutral-900"}`}
                                                >
                                                    {item.name}
                                                    <span className="px-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="none">
                                                            <path d="M8.12549 11.2505H0.625492C0.501807 11.2504 0.380875 11.287 0.278004 11.3557C0.175132 
                                                        11.4243 0.0949484 11.522 0.0476031 11.6362C0.000257809 11.7505 -0.0121201 11.8763 0.0120364 
                                                        11.9976C0.0361929 12.1189 0.0957973 12.2303 0.183304 12.3177L3.9333 16.0677C3.99135 16.1258 
                                                        4.06028 16.1719 4.13615 16.2033C4.21203 16.2348 4.29336 16.251 4.37549 16.251C4.45763 16.251
                                                        4.53896 16.2348 4.61483 16.2033C4.6907 16.1719 4.75963 16.1258 4.81768 16.0677L8.56768 12.3177C8.65519
                                                        12.2303 8.71479 12.1189 8.73895 11.9976C8.7631 11.8763 8.75073 11.7505 8.70338 11.6362C8.65604 11.522
                                                        8.57585 11.4243 8.47298 11.3557C8.37011 11.287 8.24918 11.2504 8.12549 11.2505ZM4.37549 14.7419L2.13409
                                                        12.5005H6.6169L4.37549 14.7419ZM0.625492 5.00049H8.12549C8.24918 5.00059 8.37011 4.96399 8.47298 4.89532C8.57585 
                                                        4.82665 8.65604 4.729 8.70338 4.61474C8.75073 4.50047 8.7631 4.37473 8.73895 4.25343C8.71479 4.13212 8.65519 4.02071
                                                        8.56768 3.9333L4.81768 0.183304C4.75963 0.125194 4.6907 0.0790944 4.61483 0.0476417C4.53896 0.016189 4.45763 0 4.37549 
                                                        0C4.29336 0 4.21203 0.016189 4.13615 0.0476417C4.06028 0.0790944 3.99135 0.125194 3.9333 0.183304L0.183304 3.9333C0.0957973 
                                                        4.02071 0.0361929 4.13212 0.0120364 4.25343C-0.0121201 4.37473 0.000257809 4.50047 0.0476031 4.61474C0.0949484 4.729 0.175132 
                                                        4.82665 0.278004 4.89532C0.380875 4.96399 0.501807 5.00059 0.625492 5.00049ZM4.37549 1.50909L6.6169 3.75049H2.13409L4.37549 1.50909Z"
                                                                fill={`${dropdown ? '#00B4CC' : '#FAFAFA'}`}
                                                            />
                                                        </svg>
                                                    </span>
                                                </div>

                                                {/* ==== DROPDOWN ==== */}
                                                <AnimatePresence>
                                                    {dropdown && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="ml-4 mt-2 flex flex-col gap-2"
                                                        >
                                                            {item.options.map((opt, idx) => (
                                                                <Link
                                                                    key={idx}
                                                                    href={opt.href}
                                                                    onClick={() => setOpen(false)}
                                                                    className="py-2 px-2 text-sm hover:text-primary-700 border-b border-neutral-900"
                                                                >
                                                                    {opt.name}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        )}

                                    </div>
                                ))}
                            </ul>

                            <UserAuth initialUser={{}} isMobileMode />

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HamburgerMenu;

'use client'
import { ChevronRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n/provider";
import { addLocaleToPathname, stripLocaleFromPathname } from "@/lib/i18n/config";

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const normalizedPathname = stripLocaleFromPathname(pathname || "/");
    const { t, locale } = useI18n();
    const navLinks = [
      { name: t.nav.halls, href: "/" },
      { name: t.nav.plans, href: "/offers" },
      { name: t.nav.market, href: "/fit-market" },
      { name: t.nav.faq, href: "/faq" },
      { name: t.nav.bmi, href: "/bmi" },
    ];

    return (
        <div className="md:hidden w-auto relative z-20">

            {/* ICON */}
            <button onClick={() => setOpen(!open)} className="relative z-20 flex justify-end w-auto">
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
                        className="pt-16 absolute  -top-8 -right-3 w-screen xs:w-[320px] min-h-screen bg-softblue-1000 shadow-md z-10"
                    >
                        <div className="bg-[#0E293D4D] h-full p-5 flex flex-col text-neutral-50">

                            <ul>
                                {navLinks.map((item, index) => (
                                    <div key={index}>
                                        <Link
                                            href={addLocaleToPathname(item.href, locale)}
                                            onClick={() => setOpen(false)}
                                            className={`py-4 px-2 flex justify-between items-center  leading-b1 text-b1 font-medium 
                                                    ${normalizedPathname === item.href ? "text-primary-700 gradient-border-bottom" : "border-b border-neutral-900"}`}
                                        >
                                            {item.name}
                                            <ChevronRight />
                                        </Link>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HamburgerMenu;

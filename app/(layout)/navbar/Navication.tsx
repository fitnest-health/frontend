"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n/provider";
import { addLocaleToPathname, stripLocaleFromPathname } from "@/lib/i18n/config";

const Navication = () => {
  const pathname = usePathname();
  const normalizedPathname = stripLocaleFromPathname(pathname || "/");
  const { t, locale } = useI18n();
  const navLinks = [
    { name: t.nav.halls, href: "/fitness-centers" },
    { name: t.nav.plans, href: "/offers" },
    { name: t.nav.market, href: "/fit-market" },
    { name: t.nav.faq, href: "/faq" },
    { name: t.nav.bmi, href: "/bmi" },
  ];

  return (
    <div className="hidden md:flex md:justify-center xl:justify-normal w-full">
      <nav className="flex justify-between text-white! w-full gradient-border py-4 px-7 rounded-4xl bg-[#0E293D4D] backdrop-blur-md lg:max-w-[528px]">
        {navLinks.map((item) => (
          <div key={item.name}>
            <Link
              href={addLocaleToPathname(item.href, locale)}
              className={`text-lg flex items-center gap-1 cursor-pointer z-10 leading-6 font-medium
                                    ${normalizedPathname === item.href ? "text-primary-700" : ""}`}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navication;

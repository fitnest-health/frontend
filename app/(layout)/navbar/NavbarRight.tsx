"use client";

import { Button } from "@/components/ui/button";
import SearchIcon from "@/public/icons/search-gradient.svg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useI18n } from "@/lib/i18n/provider";
import { useMemo, useState } from "react";
import Image from "next/image";
import AzerbaijanFlag from "@/public/images/AzerbaijanFlag.svg";
import EnglishFlag from "@/public/images/EnglishFlag.svg";
import RussianFlag from "@/public/images/RussianFlag.svg";

const NavbarRight = () => {
  const { locale, setLocale } = useI18n();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const locales = useMemo(
    () => ({
      az: { label: "Azərbaycan", flag: AzerbaijanFlag },
      en: { label: "English", flag: EnglishFlag },
      ru: { label: "Русский", flag: RussianFlag },
    }),
    []
  );

  const currentLocale = locales[locale as "az" | "en" | "ru"] ?? locales.az;
  const languageOptions = (["az", "en", "ru"] as const).filter((lang) => lang !== locale);

  return (
    <div className="relative flex items-center gap-1.5 md:gap-4 md:ml-2">
      <div className="relative md:hidden flex items-center">
        <div
          className={`overflow-hidden ${isSearchOpen
            ? "w-[clamp(10.5rem,56vw,16rem)] h-10 rounded-full border border-[#2E5A74] bg-[#082038D9]"
            : "w-10 h-10 rounded-full border border-transparent bg-transparent"
            }`}
          style={{ transition: "width 300ms ease-out" }}
        >
          <div className="h-full flex items-center">
            <Button
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="size-10 min-w-10 rounded-full bg-transparent border-0 shadow-none hover:bg-transparent"
            >
              <Image src={SearchIcon} alt="Search" width={26} height={26} className="min-w-[26px] min-h-[26px]" />
            </Button>
            <input
              className="w-full pr-4 bg-transparent text-white placeholder:text-white/80 text-sm leading-none outline-none"
              style={{ opacity: isSearchOpen ? 1 : 0, transition: "opacity 200ms ease-out" }}
              placeholder="Axtar....."
              aria-label="Axtar"
            />
          </div>
        </div>

      </div>

      <div className="relative hidden md:flex items-center">
        <div
          className={`overflow-hidden ${isSearchOpen
            ? "w-[clamp(12rem,18vw,16rem)] h-12 rounded-full border border-[#4D6880] bg-[#123B554D]"
            : "w-12 h-12 rounded-full border border-[#4D6880] bg-[#123B554D]"
            }`}
          style={{ transition: "width 300ms ease-out" }}
        >
          <div className="h-full flex items-center">
            <Button
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="size-12 min-w-12 rounded-full bg-transparent border-0 shadow-none hover:bg-transparent"
              aria-label="Search"
            >
              <Image src={SearchIcon} alt="Search" width={26} height={26} className="min-w-[26px] min-h-[26px]" />
            </Button>
            <input
              className="w-full pr-4 bg-transparent text-white placeholder:text-white/80 text-sm leading-none outline-none"
              style={{ opacity: isSearchOpen ? 1 : 0, transition: "opacity 220ms ease-out" }}
              placeholder="Axtar....."
              aria-label="Axtar"
            />
          </div>
        </div>
      </div>

      <Select value={locale} onValueChange={(value) => setLocale(value as "az" | "en" | "ru")}>
        <SelectTrigger className="w-auto md:w-[85px] mr-1.5 md:mr-0 bg-transparent md:bg-[#123B554D] text-white rounded-full md:rounded-4xl py-0 md:py-3 px-0 md:px-4 h-auto md:h-12! border-0 md:border md:border-[#4D6880] shadow-none md:shadow-xs gap-0 [&>svg]:hidden md:[&>svg]:inline-flex md:[&>svg]:text-white md:[&>svg]:opacity-90">
          <div className="flex items-center gap-2 md:w-full md:justify-between">
            <span className="relative size-5 rounded-full overflow-hidden ring-1 ring-[#E7EEF433] md:hidden">
              <Image src={currentLocale.flag} alt={currentLocale.label} fill sizes="20px" className="object-cover" />
            </span>
            <span className="hidden md:inline text-b1 leading-none">{locale.toUpperCase()}</span>
          </div>
        </SelectTrigger>
        <SelectContent
          align="end"
          side="bottom"
          sideOffset={8}
          className="glass-fitnest mt-3 md:mt-1 min-w-[180px] md:min-w-20 md:w-[150px] text-gray-50 rounded-3xl md:rounded-2xl border border-transparent bg-[#0A1632] md:bg-[#0E293D4D] md:backdrop-blur-md shadow-lg md:shadow-[0_10px_24px_rgba(1,8,20,0.45),inset_0_1px_0_rgba(255,255,255,0.22)] p-4 md:px-7 md:py-4 data-[state=open]:duration-220 data-[state=open]:ease-out data-[state=open]:slide-in-from-top-1 data-[state=closed]:duration-150 data-[state=closed]:ease-in data-[state=closed]:slide-out-to-top-1"
        >
          <SelectGroup className="md:flex md:flex-col md:gap-3">
            {languageOptions.map((lang) => {
              const meta = locales[lang];
              return (
                <SelectItem
                  key={lang}
                  value={lang}
                  className="[&>span:first-child]:hidden rounded-2xl py-3 md:py-0 md:px-0 md:pr-0 md:pl-0 text-base data-[state=checked]:text-primary-700 data-[state=checked]:bg-transparent focus:bg-transparent hover:bg-transparent focus:text-primary-700"
                >
                  <div className="flex items-center gap-4 md:justify-center md:gap-0 w-full">
                    <span className="relative size-6 rounded-full overflow-hidden ring-1 ring-[#E7EEF433] md:hidden">
                      <Image src={meta.flag} alt={meta.label} fill sizes="24px" className="object-cover" />
                    </span>
                    <span className="text-b1 leading-none md:hidden">{meta.label}</span>
                    <span className="hidden md:inline text-b1 leading-none uppercase">{lang}</span>
                  </div>
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>

    </div>
  );
};

export default NavbarRight;

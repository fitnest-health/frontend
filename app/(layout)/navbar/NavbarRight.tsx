"use client";

import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useI18n } from "@/lib/i18n/provider";

const NavbarRight = () => {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex gap-10">
      <Button className="p-4 rounded-full size-12 bg-[#123B554D] border hover:bg-[#123B554D]">
        <SearchIcon className="size-6 text-primary-700" />
      </Button>
      <Select value={locale} onValueChange={(value) => setLocale(value as "az" | "en" | "ru")}>
        <SelectTrigger className="w-[90px] bg-[#123B554D] text-white rounded-4xl py-4 px-4 h-12! ">
          <SelectValue placeholder={locale.toUpperCase()} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="az">AZ</SelectItem>
            <SelectItem value="en">EN</SelectItem>
            <SelectItem value="ru">RU</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default NavbarRight;

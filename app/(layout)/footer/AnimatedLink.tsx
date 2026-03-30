"use client";

import Link from "next/link";
import React from "react";
import { useI18n } from "@/lib/i18n/provider";
import { addLocaleToPathname } from "@/lib/i18n/config";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
}

export const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href,
  children,
}) => {
  const { locale } = useI18n();

  return (
    <li>
      <Link
        href={addLocaleToPathname(href, locale)}
        className={`relative max-w-min group hover:text-primary-700`}
      >
        {children}
        <span
          className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-700 transition-all duration-300 group-hover:w-full`}
        ></span>
      </Link>
    </li>
  );
};

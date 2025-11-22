import Link from "next/link";
import React from "react";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  pathname?: string;
}

export const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href,
  children,
  pathname,
}) => (
  <li>
    <Link
      href={href}
      className={`relative max-w-min group ${
        href == pathname ? "text-primary-700" : ""
      } hover:text-primary-700`}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-700 transition-all duration-300 ${
          href == pathname ? "w-full" : ""
        } group-hover:w-full`}
      ></span>
    </Link>
  </li>
);

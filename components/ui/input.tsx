"use client";
import * as React from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type IconType = {
  src: string | StaticImageData;
  onClick?: () => void;
};

type InputProps = React.ComponentProps<"input"> & {
  leftIcon?: IconType | string | StaticImageData;
  rightIcon?: IconType | string | StaticImageData;
};

export function Input({
  className,
  type,
  leftIcon,
  rightIcon,
  ...props
}: InputProps) {
  const left = normalizeIcon(leftIcon);
  const right = normalizeIcon(rightIcon);

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full border border-primary-700 p-2 w-full",
        "bg-[#0C0E1266]"
      )}
    >
      {/* Left Icon */}
      {left && (
        <IconWrapper icon={left} />
      )}

      {/* Input */}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "w-full bg-transparent border-0 outline-none",
          "placeholder:text-neutral-700 dark:bg-transparent",
          "file:text-foreground selection:bg-primary selection:text-primary-foreground",
          "h-9 px-2 text-base md:text-sm",
          "disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      />

      {/* Right Icon */}
      {right && (
        <IconWrapper icon={right} />
      )}
    </div>
  );
}

/* Normalize icon prop to object format */
function normalizeIcon(
  icon?: IconType | string | StaticImageData
): IconType | undefined {
  if (!icon) return undefined;

  // string -> treat as src
  if (typeof icon === "string") {
    return { src: icon };
  }

  // object -> could be IconType or StaticImageData
  if (typeof icon === "object") {
    // StaticImageData from next/image has height/width properties
    if ("height" in icon || "width" in icon) {
      return { src: icon as StaticImageData };
    }

    // otherwise assume it's already IconType (has src and optional onClick)
    if ("src" in icon) {
      return icon as IconType;
    }
  }

  return undefined;
}

/* Icon component */
function IconWrapper({ icon }: { icon: IconType }) {
  const clickable = Boolean(icon.onClick);

  return (
    <button
      type="button"
      onClick={icon.onClick}
      className={cn(
        "rounded-full min-w-[38px] min-h-[38px] flex justify-center items-center",
        clickable ? "cursor-pointer" : "pointer-events-none",
        clickable ? "bg-transparent" : "bg-[#0E293D4D]",

      )}
    >
      <Image
        src={icon.src}
        alt="icon"
        width={18}
        height={18}
        className="w-[18px] h-[18px]"
      />
    </button>
  );
}

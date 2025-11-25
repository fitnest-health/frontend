"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import Image, { StaticImageData } from "next/image"

function Select({
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
    return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
    return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
    return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
    className,
    size = "default",
    children,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
    size?: "sm" | "default"
}) {
    return (
        <SelectPrimitive.Trigger
            data-slot="select-trigger"
            data-size={size}
            className={cn(
                "group p-2 data-placeholder:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                className
            )}
            {...props}
        >
            {children}

            <SelectPrimitive.Icon asChild>
                <ChevronDownIcon
                    className={cn(
                        "size-6 opacity-50 text-primary-700 transition-transform duration-200",
                        "group-data-[state=open]:rotate-180"
                    )}
                />
            </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
    )
}

function SelectContent({
    className,
    children,
    position = "popper",
    align = "center",
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
    return (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                data-slot="select-content"
                className={cn(
                    "bg-softblue-50 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-32 origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md shadow-md",
                    position === "popper" &&
                    "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
                    className
                )}
                position={position}
                align={align}
                {...props}
            >
                <SelectPrimitive.Viewport
                    className={cn(
                        "p-0",
                        position === "popper" &&
                        "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width) scroll-my-1"
                    )}
                >
                    {children}
                </SelectPrimitive.Viewport>
                <SelectScrollDownButton />
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    )
}

function SelectLabel({
    className,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
    return (
        <SelectPrimitive.Label
            data-slot="select-label"
            className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
            {...props}
        />
    )
}

function SelectItem({
    className,
    children,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
    return (
        <SelectPrimitive.Item
            data-slot="select-item"
            className={cn(
                "focus:bg-primary-700 focus:text-neutral-50 [&_svg:not([class*='text-'])]:text-primary-700 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
                className
            )}
            {...props}
        >
            <span className="absolute right-2 flex size-3.5 items-center justify-center">
                <SelectPrimitive.ItemIndicator>
                    <CheckIcon className="size-4" />
                </SelectPrimitive.ItemIndicator>
            </span>
            <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
    )
}

function SelectSeparator({
    className,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
    return (
        <SelectPrimitive.Separator
            data-slot="select-separator"
            className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
            {...props}
        />
    )
}

function SelectScrollDownButton({
    className,
    ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
    return (
        <SelectPrimitive.ScrollDownButton
            data-slot="select-scroll-down-button"
            className={cn(
                "flex cursor-default items-center justify-center py-1",
                className
            )}
            {...props}
        >
            <ChevronDownIcon className="size-4" />
        </SelectPrimitive.ScrollDownButton>
    )
}


//Customize edilir asagida

type IconType = {
    src: string | StaticImageData;
    onClick?: () => void;
};

type CustomSelectProps = {
    value?: string;
    onChange?: (v: string) => void;
    placeholder?: string;
    leftIcon?: IconType | string | StaticImageData;
    options?: { label: string; value: string }[];
};

export default function CustomSelect({
    value,
    onChange,
    placeholder,
    leftIcon,
    options,
}: CustomSelectProps) {
    const left = normalizeIcon(leftIcon);

    return (
        <div
            className={cn(
                "flex items-center gap-2 rounded-full border border-primary-700 p-2 w-full",
                "bg-[#0C0E1266]"
            )}
        >
            {/* Sol Icon */}
            {left && <IconWrapper icon={left} />}

            {/* Select */}
            <Select value={value} onValueChange={onChange}>
                <SelectTrigger
                    className={cn(
                        "w-full bg-transparent border-0 text-neutral-700! outline-none shadow-none px-2",
                        "h-9! text-base"
                    )}
                >
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>

                <SelectContent>
                    {options?.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

/* Normalize icon prop */
function normalizeIcon(
    icon?: IconType | string | StaticImageData
): IconType | undefined {
    if (!icon) return undefined;

    if (typeof icon === "string") return { src: icon };
    if (typeof icon === "object") {
        if ("height" in icon || "width" in icon)
            return { src: icon as StaticImageData };
        if ("src" in icon) return icon as IconType;
    }
    return undefined;
}

/* Icon Wrapper */
function IconWrapper({ icon }: { icon: IconType }) {
    return (
        <div className="rounded-full min-w-[38px] min-h-[38px] flex justify-center items-center bg-[#0E293D4D]">
            <Image
                src={icon.src}
                alt="icon"
                width={18}
                height={18}
                className="w-[18px] h-[18px]"
            />
        </div>
    );
}


export {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectScrollDownButton,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
}

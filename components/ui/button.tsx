import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:bg-gray-700 disabled:text-neutral-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary-600 text-primary-foreground hover:bg-primary-700  border-0 ",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 rounded-[32px] ",
        outline:
          "border bg-background shadow-xs hover:bg-primary-600 hover:text-primary-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 rounded-[32px]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          " hover:text-primary-600 dark:hover:bg-accent/50",
        link: "text-[#FAFAFA] underline-offset-4 hover:text-[#00B4CC]",
      },
      size: {
        default: " h-9 py-2.5 px-4  rounded-[32px] has-[>svg]:px-3 cursor-pointer",
        sm: "h-8 rounded-[32px] gap-1.5 px-4 py-2 has-[>svg]:px-2.5 cursor-pointer",
        lg: "h-10 rounded-[32px] px-6 has-[>svg]:px-4 cursor-pointer",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

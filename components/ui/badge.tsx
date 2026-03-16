import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center cursor-pointer justify-center gap-1 p-4 overflow-hidden rounded-full border border-[#22262F]  text-s2 leading-s2 font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-transparent text-primary-foreground [a&]:hover:bg-primary/90 text-s1 text-white",
        bronze:
          "bg-linear-to-r from-[#D8A67300] to-[#B97A3C] text-white! [a&]:hover:bg-white/90 text-h3 leading-h3 px-12  py-6",
        silver:
          "bg-linear-to-r from-[#E5E8EC00] to-[#9BAAC7] text-white! [a&]:hover:bg-white/90 text-h3 leading-h3 px-12  py-6",
        gold: "bg-linear-to-r from-[#E7B75F00] to-[#F8D57E] text-white! [a&]:hover:bg-white/90 text-h3 leading-h3 px-12  py-6",
        platinum:
          "bg-linear-to-r from-[#313131] via-[#515254] via-[#5B5B5D] to-[#565857] text-white! text-h3 leading-h3 [a&]:hover:bg-white/90 px-12  py-6",
        secondary:
          "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
        outline:
          "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [a&]:hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };

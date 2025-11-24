import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-[22px] border border-primary-700 p-2 w-full",
        "bg-[#0C0E1266]"
      )}
    >
      <textarea
        data-slot="textarea"
        className={cn(
          "border-input outline-0  focus-visible:border-0 focus-visible:ring-ring/0 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm placeholder:text-neutral-700",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { Textarea };

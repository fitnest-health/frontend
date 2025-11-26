import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type BillingPeriod } from "@/components/common/offer-section/offers.types";

interface PeriodOption {
  value: BillingPeriod;
  label: string;
}

interface OfferPeriodToggleProps {
  value: BillingPeriod;
  options: PeriodOption[];
  onChange: (value: BillingPeriod) => void;
  className?: string;
}

const OfferPeriodToggle = ({
  value,
  options,
  onChange,
  className,
}: OfferPeriodToggleProps) => {
  return (
    <Tabs
      value={value}
      onValueChange={(nextValue) => onChange(nextValue as BillingPeriod)}
      className={className}
    >
      <TabsList className="inline-flex items-center rounded-full p-1 gradient-border bg-transparent h-auto">
        {options.map((option) => (
          <TabsTrigger
            key={option.value}
            value={option.value}
            className={cn(
              "min-w-[140px] h-12 flex items-center justify-center rounded-full text-b2 font-medium transition-all md:min-w-[180px] lg:min-w-[200px]",
              "data-[state=active]:bg-linear-to-r data-[state=active]:from-[#00C0D9] data-[state=active]:to-[#007499]",
              "data-[state=active]:text-white data-[state=active]:shadow-[0_0_20px_rgba(0,192,217,0.3)]",
              "data-[state=inactive]:text-neutral-400 data-[state=inactive]:hover:text-neutral-200",
              "data-[state=inactive]:bg-transparent"
            )}
          >
            {option.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export type { PeriodOption };
export { OfferPeriodToggle };

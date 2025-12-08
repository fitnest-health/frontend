import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  type BillingPeriod,
  type PeriodOption,
} from "@/components/common/offer-section/offers.types";

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
  const activeIndex = options.findIndex((o) => o.value === value);

  return (
    <Tabs
      value={value}
      onValueChange={(nextValue) => onChange(nextValue as BillingPeriod)}
      className={className}
    >
      <TabsList className="inline-flex items-center rounded-full p-1 gradient-border bg-transparent h-auto">
        <div className="relative w-full flex">
          <span
            className="absolute top-0 left-0 h-12 bg-primary-700 rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${100 / options.length}%`,
              transform: `translateX(${activeIndex * 100}%)`,
            }}
          />
          {options.map((option) => (
            <TabsTrigger
              key={option.value}
              value={option.value}
              className={cn(
                "min-w-[140px] h-12 flex items-center justify-center z-10 rounded-full text-b2 font-medium transition-all md:min-w-[180px] lg:min-w-[200px]",
                "data-[state=active]:bg-primary-700",
                "data-[state=active]:text-white",
                "data-[state=inactive]:text-neutral-400 data-[state=inactive]:hover:text-neutral-200",
                "data-[state=inactive]:bg-transparent"
              )}
            >
              {option.label}
            </TabsTrigger>
          ))}
        </div>
      </TabsList>
    </Tabs>
  );
};

export type { PeriodOption };
export { OfferPeriodToggle };

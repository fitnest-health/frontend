import { cn } from "@/lib/utils";

interface OfferPlanFeatureListProps {
  features: string[];
  className?: string;
}

const OfferPlanFeatureList = ({
  features,
  className,
}: OfferPlanFeatureListProps) => {
  return (
    <ul className={cn("space-y-3 text-b2 text-neutral-50", className)}>
      {features.map((feature, index) => (
        <li key={`${feature}-${index}`} className="flex items-start gap-3">
          <img src="/icons/weight.svg" alt="" className="mt-0.5 size-4" />
          <span className="flex-1 leading-b1">{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export { OfferPlanFeatureList };

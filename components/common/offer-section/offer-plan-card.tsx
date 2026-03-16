import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const OfferPlanCard = () => {
  return (
    <Card
      className={cn(
        "relative shadow-none h-full border-transparent font-sans text-neutral-50 md:h-[560px] h-[600px]",
      )}
    >
      <div className="relative flex h-full gap-6 flex-col overflow-hidden">
        <Image
          src="/images/offer-background.png"
          alt=""
          width={600}
          height={780}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 object-contain opacity-100"
          aria-hidden
        />

        <CardHeader className="relative z-10 w-full space-y-6 p-0 text-center">
          {/* SEO: <strong> signals keyword importance; visually unchanged */}
          <strong
            className={cn(
              "inline-flex min-w-28 items-center justify-center rounded-full py-4! px-7! text-s1 font-bold leading-s1 text-neutral-50 transition-all sm:min-w-36 sm:px-5 sm:py-1.5 not-italic",
              "bg-[linear-gradient(102.24deg,rgba(229,232,236,0)_4.05%,#9BAAC7_90.14%)]",
            )}
          >
            Premium
          </strong>

          {/* SEO: <h2> for card title / plan description */}
          <h2 className="font-sans text-b2 leading-b2 text-neutral-200 font-normal">
            Başlayanlar üçün əsas imkanlar — seçilmiş zallara rahat giriş.
          </h2>

          {/* Price row: old (struck-through) + new price side by side */}
          <div className="py-4 flex items-center justify-center gap-3">
            {/* Old price with red diagonal vector */}
            <span className="relative inline-block">
              <del
                className="text-h5 font-semibold text-neutral-400 no-underline"
                aria-label="Köhnə qiymət: 200 manat"
              >
                200 ₼
              </del>
              {/* Red diagonal SVG vector drawn over old price */}
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 w-full h-full overflow-visible"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="text-h4">-</span>

            {/* SEO: <h3> for the current/active price */}
            <h3 className="text-h6 font-semibold leading-tight text-neutral-50 sm:text-h3 m-0">
              150 ₼
            </h3>
          </div>
        </CardHeader>

        <CardContent className="relative z-10 flex w-full flex-1 flex-col gap-6 p-0 text-left text-neutral-50">
          {/* SEO: role + aria-label describe the list purpose to screen readers */}
          <ul
            role="list"
            aria-label="Premium plan xüsusiyyətləri"
            className={cn("space-y-3 text-b2 text-neutral-50")}
          >
            <li className="flex items-start gap-3">
              <img src="/icons/weight.svg" alt="" className="mt-0.5 size-4" aria-hidden />
              <span className="flex-1 leading-b1">Zallara giriş sayı - 12</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="/icons/weight.svg" alt="" className="mt-0.5 size-4" aria-hidden />
              <span className="flex-1 leading-b1">Məşq proqramı hədiyyə</span>
            </li>
            <li className="flex items-start gap-3">
              <img src="/icons/weight.svg" alt="" className="mt-0.5 size-4" aria-hidden />
              <span className="flex-1 leading-b1">Yalnız zala giriş</span>
            </li>
          </ul>

          <div className="mt-auto flex justify-end pt-4" />
        </CardContent>
      </div>
    </Card>
  );
};

export { OfferPlanCard };
"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Store } from "../api/types";
import { useI18n } from "@/lib/i18n/provider";

interface FitMarketCardProps {
  store: Store;
}

const FitMarketCard = ({ store }: FitMarketCardProps) => {
  const { t } = useI18n();

  return (
    <article className="rounded-4xl bg-[#111729] px-7 py-6">
      <div className="relative h-[250px] overflow-hidden rounded-3xl">
        <Image
          src={store.coverImageUrl}
          alt={store.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 410px"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/65" />
      </div>

      <div className="mt-5 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-semibold leading-s1 text-[#00B4CC]">
            {store.name}
          </h2>
          {store.discounts.length > 0 && (
            <div className="flex items-center gap-2">
              {store.discounts.map((discount) => (
                <span
                  key={discount}
                  className="flex size-9 items-center justify-center rounded-full bg-[linear-gradient(106.44deg,rgba(231,183,95,0)_4.93%,#F8D57E_95.07%)] text-xs text-[#ECECED]"
                >
                  {discount}
                </span>
              ))}
            </div>
          )}
        </div>

        {store.isNew && (
          <span className="inline-block rounded-full bg-[#00B4CC] px-3 py-1 text-xs font-bold text-white">
            {t.fitMarket.newBadge}
          </span>
        )}
      </div>

      <div className="mt-5 flex items-end justify-between gap-5">
        <div className="space-y-3">
          <p className="flex items-center gap-2 text-sm text-[#C1C1CC]">
            <MapPin className="size-5 text-[#C1C1CC]" />
            {store.address}, {store.city}
          </p>
          {store.distanceKm !== null && (
            <p className="text-sm text-[#C1C1CC]">
              {store.distanceKm.toFixed(1)} km
            </p>
          )}
        </div>

        <Link
          href={`/fit-market/${store.storeId}`}
          className="flex size-[62px] shrink-0 items-center justify-center rounded-full bg-[rgba(14,41,61,0.3)] transition hover:bg-[rgba(14,41,61,0.45)]"
          aria-label={`${store.name} ${t.fitMarket.cardDetailsAria}`}
        >
          <ArrowUpRight className="size-6 text-white" />
        </Link>
      </div>
    </article>
  );
};

export default FitMarketCard;

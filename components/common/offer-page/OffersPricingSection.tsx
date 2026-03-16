import { Badge } from "@/components/ui/badge";
import React from "react";

const OffersPricingSection = () => {
  return (
    <section className="space-y-10 md:space-y-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <Badge className=" w-full" variant="bronze">
          Bronze
        </Badge>
        <Badge className=" w-full " variant="default">
          Silver
        </Badge>
        <Badge className=" w-full" variant="default">
          Gold
        </Badge>
        <Badge className=" w-full" variant="default">
          Platinum
        </Badge>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6  w-4/5 mx-auto">
        <Badge className=" w-full border border-primary " variant="default">
          1 ay
        </Badge>
        <Badge className=" w-full" variant="default">
          3 ay
        </Badge>
        <Badge className=" w-full" variant="default">
          6 ay
        </Badge>
        <Badge className=" w-full" variant="default">
          12 ay
        </Badge>
      </div>

      <div className="w-full md:w-4/5 mx-auto space-y-8">
        <h2 className="text-neutral-50 text-h2 leading-h2 font-bold text-center">
          75 &#8380; - 65 &#8380;
        </h2>
        <p className="font-bold text-t1 leading-t1 text-neutral-50 text-center">
          <span className="text-primary-700">FitNest</span> planlarında səni
          nələr gözləyir?
        </p>
      </div>
    </section>
  );
};

export default OffersPricingSection;

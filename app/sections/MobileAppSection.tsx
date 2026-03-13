import Heading from "@/components/common/Heading";
import Container from "@/components/common/Container";
import React from "react";
import Image from "next/image";
import { QrCode } from "lucide-react";
import phoneScreen from "@/public/images/phone-window.webp";
import splash from "@/public/images/splash.png";

const MobileAppSection = () => {
  return (
    <Container className="py-7 md:pt-15 md:pb-0">
      <Heading
        title="Mobil <span class='text-primary-700'>FitNest</span>"
        number={3}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-8 md:gap-0">
        <div className="space-y-5 text-center flex flex-col justify-center items-center h-full py-8 md:py-0">
          <h2 className="font-medium text-s1 leading-s1 md:text-h6 md:leading-h6">
            Sağlam həyat tərzinə bir addım da yaxınlaş
          </h2>
          <p className="font-medium text-b1 leading-b1 md:text-t2 md:leading-t2">
            <span className="text-primary-700">FitNest</span> ilə bədənini,
            zehnini və motivasiyanı balansda saxla.
          </p>
          <QrCode size={200} className="md:hidden" />
          <QrCode size={300} className="hidden md:block" />
        </div>
        <div className="mx-auto overflow-clip">
          <div className="relative">
            {/* Phone frame */}
            <Image
              src={phoneScreen}
              alt="phone window"
              className="aspect-9/16 h-[350px] sm:h-[450px] md:h-[700px] w-auto relative z-10"
            />

            {/* Screen area */}
            <div className="absolute top-0 translate-y-1 md:translate-y-4 left-0 overflow-hidden aspect-9/16 h-[333px] sm:h-[430px] md:h-[665px] z-0 rounded-[35px] sm:rounded-[45px] md:rounded-[52px]">
              <Image src={splash} alt={"splash"} className="h-full w-full " />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MobileAppSection;

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
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between max-h-[700px]">
        <div className="space-y-5 text-center flex flex-col justify-center items-center h-full">
          <h2 className="font-medium text-h6 leading-h6">
            Sağlam həyat tərzinə bir addım da yaxınlaş
          </h2>
          <p className="font-medium text-t2 leading-t2">
            <span className="text-primary-700">FitNest</span> ilə bədənini,
            zehnini və motivasiyanı balansda saxla.
          </p>
          <QrCode size={300} />
        </div>
        <div className="mx-auto max-h-[700px] overflow-clip">
          <div className="relative">
            {/* Phone frame */}
            <Image
              src={phoneScreen}
              alt="phone window"
              className="aspect-9/16 h-[450px] md:h-[900px] w-auto relative z-10"
            />

            {/* Screen area */}
            <div className="absolute top-0 translate-y-1 md:translate-y-5 left-0 overflow-hidden aspect-9/16 h-[430px] md:h-[850px] z-0 rounded-[45px] md:rounded-[55px]">
              <Image src={splash} alt={"splash"} className="h-full w-full " />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MobileAppSection;

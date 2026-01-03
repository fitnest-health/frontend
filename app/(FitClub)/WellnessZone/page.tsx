import ButtonLink from "@/components/ui/button-link";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const boxes = [
  { title: "Stressin azalması", text: "SPA və yoga seansları ilə gündəlik gərginlikdən azad ol, zehnini sakitləşdir." },
  { title: "Enerji balansı", text: "SPA və yoga seansları ilə gündəlik gərginlikdən azad ol, zehnini sakitləşdir." },
  { title: "Zehni aydınlıq", text: "SPA və yoga seansları ilə gündəlik gərginlikdən azad ol, zehnini sakitləşdir." },
  { title: "Özünü yaxşı hiss et", text: "SPA və yoga seansları ilə gündəlik gərginlikdən azad ol, zehnini sakitləşdir." },
];

const page = () => {
  return (
    <div className="lg:max-w-7xl lg:mx-auto lg:mt-20">

      <div className="md:pt-10">
        <div className="relative mx-auto overflow-hidden rounded-4xl w-[360px] h-[447px] md:w-[728px] md:h-[449px] lg:max-w-7xl lg:w-full lg:h-[582px] sm:w-full">
          <Image src="/images/masaj.png" alt="image" fill className="object-cover" />
          <div className="absolute bottom-0 w-full h-2/4 bg-softblue-950/70 p-6 rounded-4xl lg:flex lg:items-center lg:justify-between lg:h-1/4 lg:pt-10">
            <div>
              <h2 className="text-s1 leading-s1 font-bold text-neutral-50 md:text-h6 md:leading-h6">
                Bədənini və zehnini rahatlaşdır
              </h2>
              <p className="mt-4 text-b3 leading-b3 text-neutral-50 md:text-s2 md:leading-s2 md:mb-9">
                Gərginlikdən uzaqlaş, <span className="text-primary-700">FitNest</span>-in SPA və yoga proqramları ilə balansını yenidən qur.
              </p>
            </div>
            <div className="mt-9 mb-6 lg:min-w-[306px] lg:mb-10 md:mt-2">
              <ButtonLink className="font-semibold">Kəşf et!</ButtonLink>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:my-20">
        <div className="mt-10 mb-8 ml-4">
          <h4 className="text-neutral-50 font-medium text-s1 leading-s1 md:text-h6 md:leading-h6">
            Bu proqramların sənə qazandıracağı rahatlıq
          </h4>
          <p className="mt-2 text-neutral-50 font-medium text-b2 leading-b2 md:text-s2 md:leading-s2">
            Hər seans bədənini yeniləyir, zehnini sakitləşdirir və gündəlik balansını qorumağa kömək edir.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 items-stretch mb-14">
          <div className="relative w-full mx-auto max-w-[728px] aspect-square lg:max-w-[632px] lg:aspect-square overflow-hidden rounded-4xl">
            <Image
              src="/images/wellness.png"
              alt="image"
              fill
              className="object-center"
            />
          </div>
          <div className="grid grid-cols-1 gap-5 mt-6 lg:mt-0 max-w-[624px] w-full">
            {boxes.map((box, index) => (
              <Card key={index} className="min-h-[194px]">
                <CardContent className="px-5 py-6">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full gradient-border font-semibold text-white text-s2 leading-s2 sm:text-t2 sm:leading-b1">
                    {index + 1}
                  </div>
                  <CardTitle className="mt-6 md:mt-8 text-white text-b1 leading-b1 sm:text-s1 sm:leading-s1 font-semibold">
                    {box.title}
                  </CardTitle>
                  <p className="mt-3 text-b2 leading-b3 sm:text-b1 sm:leading-b1 text-gray-400">
                    {box.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

import ButtonLink from "@/components/ui/button-link";
import Image from "next/image"
import { Card, CardContent, CardTitle } from "@/components/ui/card"


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
        <div className="relative w-[360px] h-[447px] rounded-4xl overflow-hidden mx-auto md:w-[728px] md:h-[449px] lg:w-7xl lg:h-[582px] sm:w-full">
          <Image
            src="/images/masaj.png"
            alt="image"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 w-full h-2/4 bg-softblue-950/70 p-6 rounded-4xl lg:flex lg:justify-between lg:pt-10 lg:items-center lg:h-1/4">
            <div>
              <h2 className="text-s1 leading-s1 font-bold text-neutral-50 md:text-h6 md:leading-h6">
                Bədənini və zehnini rahatlaşdır
              </h2>
              <p className="text-b3 leading-b3 text-neutral-50 mt-4 md:text-s2 md:leading-s2 md:mb-9 md:mt-4">
                Gərginlikdən uzaqlaş, <span className="text-primary-700">FitNest</span>-in
                SPA və yoga proqramları ilə balansını yenidən qur.
              </p>
            </div>
            <div className="lg:min-w-[306px] mt-9 mb-6">
              <ButtonLink className="font-semibold  lg:mb-10 md:mt-2">
                Kəşf et!
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-20 lg:mb-20">
        <div className="mb-8 mt-10 ml-4">
          <h4 className="text-neutral-50 text-s1 leading-s1 font-medium md:text-h6 md:leading-h6 lg:text-h6 lg:leading-h6">
            Bu proqramların sənə qazandıracağı rahatlıq
          </h4>
          <p className="text-neutral-50 text-b2 leading-b2 font-medium mt-2 md:text-s2 md:leading-s2 lg:text-s2 lg:leading-s2">
            Hər seans bədənini yeniləyir, zehnini sakitləşdirir və gündəlik balansını qorumağa kömək edir.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:mt-15 gap-x-6 mb-14 md:mx-auto">
          <div className="rounded-4xl relative w-[360px] h-[329px] md:w-[728px] md:h-[534px] lg:w-[632px] lg:h-[836px] md:mx-auto bg-amber-200 lg:mr-6 mb-6 mx-auto sm:w-full">
            <Image
              src="/images/wellness.png"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="grid grid-cols-1 gap-5">
              {boxes.map((box, index) => (
                <Card key={index} className="md:mt-6 lg:mt-0">
                  <CardContent>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full gradient-border text-white font-bold mb-2">
                      {index + 1}
                    </div>
                    <CardTitle className="text-white mt-6 md:mt-8">
                      {box.title}
                    </CardTitle>
                    <p className="text-neutral-50 mt-3">
                      {box.text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default page;
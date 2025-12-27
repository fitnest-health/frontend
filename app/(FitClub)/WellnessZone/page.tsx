import ButtonLink from "@/components/ui/button-link";
import Image from "next/image"

const boxes = [
  { title: "Stressin azalması", text: "SPA və yoga seansları ilə gündəlik gərginlikdən azad ol, zehnini sakitləşdir." },
  { title: "Enerji balansı", text: "SPA və yoga seansları ilə gündəlik gərginlikdən azad ol, zehnini sakitləşdir." },
  { title: "Zehni aydınlıq", text: "SPA və yoga seansları ilə gündəlik gərginlikdən azad ol, zehnini sakitləşdir." },
  { title: "Özünü yaxşı hiss et", text: "SPA və yoga seansları ilə gündəlik gərginlikdən azad ol, zehnini sakitləşdir." },
];

const page = () => {
  return (
    <div className="container-lg grow w-full bg-softblue-950 lg:py-24">
      <div className="md:pt-10">
        <div className="relative w-[360px] h-[447px] rounded-4xl overflow-hidden mx-auto md:w-[728px] md:h-[449px] lg:w-7xl lg:h-[582px]">
          <Image
            src="/images/masaj.png"
            alt="image"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 w-full h-2/4 bg-softblue-950/70 p-6 rounded-4xl lg:flex lg:justify-between lg:items-center lg:h-1/4">
            <div>
              <h2 className="text-s1 leading-s1 font-bold text-neutral-50 md:text-h6 md:leading-h6">
                Bədənini və zehnini rahatlaşdır
              </h2>
              <p className="text-b3 leading-b3 text-neutral-50 mt-4 md:text-s2 md:leading-s2 md:mb-9 md:mt-4">
                Gərginlikdən uzaqlaş, <span className="text-primary-700">FitNest</span>-in
                SPA və yoga proqramları ilə balansını yenidən qur.
              </p>
            </div>
            <div className="lg:min-w-[306px]">
              <ButtonLink className="font-semibold mt-8 lg:mb-16 md:mt-2">
                Kəşf et!
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-7 lg:py-24">
        <div>
          <h4 className="text-neutral-50 text-s1 leading-s1 font-medium md:text-h6 md:leading-h6 lg:text-h6 lg:leading-h6">
            Bu proqramların sənə qazandıracağı rahatlıq
          </h4>
          <p className="text-neutral-50 text-b2 leading-b2 font-medium mt-2 md:text-s2 md:leading-s2 lg:text-s2 lg:leading-s2">
            Hər seans bədənini yeniləyir, zehnini sakitləşdirir və gündəlik balansını qorumağa kömək edir.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:mt-15 gap-x-6">
          <div className="relative  w-[360px] h-[329px] md:w-[728px] md:h-[534px] lg:w-[632px] lg:h-[836px] md:mx-auto">
            <Image
              src="/images/wellness.png"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
              {boxes.map((box, index) => (
                <div
                  key={index}
                  className="rounded-4xl flex flex-col gradient-border md:p-6 md:mt-6 lg:mt-0"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full gradient-border text-white font-bold mb-2">
                    {index + 1}
                  </div>

                  <h5 className="text-white text-b1 leading-b1 font-semibold mt-6 md:text-s1 md:leading-s1 md:mt-8">{box.title}</h5>
                  <p className="text-neutral-50 text-b2 leading-b3 mt-3 md:mt-3 md:text-b1 md:leading-b1">{box.text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
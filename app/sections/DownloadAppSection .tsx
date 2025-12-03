import Container from "@/components/common/Container"
import Image from "next/image"
import Link from "next/link"

const DownloadAppSection = () => {
  return (
    <div className=" bg-softblue-950 grow flex flex-col w-full lg:py-24">

      <Container className="grid grid-cols-1 xl:gap-15 md:grid-cols-2 sm:grid-cols-2  lg:m-auto">
        <div className="relative w-[360px] h-[347px]  md:w-[358px] md:h-[342px] lg:w-[519px] lg:h-[500px] max-w-full scale-[1]">
          <Image
            src="/images/Group11.png"
            alt="phones"
            fill
            className="object-contain"
          />
        </div>
        <div className="md:mt-15 xl:mt-17 lg:mt-33 sm:mt-20">
          <h6 className="text-neutral-50 text-b1 leading-b1 font-medium md:text-h6 md:leading-h6 xl:text-h2 xl:leading-h2">
            Sağlam həyat tərzinə bir addım da yaxınlaş
          </h6>

          <p className="text-neutral-50 text-b2 leading-b2 font-medium mt-3 mb-5 md:text-b1 md:leading-b1 xl:text-t2 xl:leading-t2 xl:mt-5">
            <span className="text-primary-700">FitNest</span> ilə bədənini, zehnini və motivasiyanı balansda saxla.
          </p>
          <div className="flex xl:mt-18 xl:gap-4">
            <Link
              href="#"
              className="flex min-w-[170px] h-[47px] rounded-4xl gradient-border bg-softblue-950 items-center gap-3 px-3 py-1 md:w-[175px] md:h-11 md:gap-3 md:px-3 md:py-1 xl:w-[193px] xl:h-[50px] xl:gap-3 xl:px-3 xl:py-1"
            >
              <Image
                src="/icons/apple.svg"
                alt="App Store"
                width={32}
                height={32}
              />
              <div className="text-gray-50">
                <p className="text-[10px] md:text-[10px] xl:text-[10px] font-medium">Download on the</p>
                <span className="capitalize font-medium">App Store</span>
              </div>
            </Link>
            <Link
              href="#"
              className="flex min-w-[170px] h-[50px] rounded-4xl border gap-2 items-center bg-softblue-950 text-neutral-500 md:w-[175px] md:h-11 md:gap-1 xl:w-[193px] xl:h-[50px] xl:gap-3 py-1 px-3"
            >
              <Image
                src="/icons/play.svg"
                alt="Google Play"
                width={26}
                height={29}
              />
              <div className="ml-2 text-gray-50">
                <p className="uppercase text-[10px] font-medium">get it on</p>
                <span className="capitalize font-medium">Google Play</span>
              </div>
            </Link>
          </div>
        </div>
      </Container>

    </div >
  )
}

export default DownloadAppSection 
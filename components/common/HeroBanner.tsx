import Image, { StaticImageData } from "next/image";
import ButtonLink from "@/components/ui/button-link";
import { memo } from "react";
import Link from "next/link";

interface HeroBannerProps {
  withButton?: boolean;
  title: string;
  subTitle: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
  imageUrl: StaticImageData;
  imagePosition?: 'object-top' | 'object-bottom' | 'object-center';
}

const HeroBanner = ({ withButton = true, subTitle, title, buttonHref, buttonText, imageUrl, imagePosition = 'object-top' }: HeroBannerProps) => {
  return (
    <>
      <div className="relative h-[670px]">
        <Image
          src={imageUrl}
          alt="Coaches"
          fill
          className={`${imagePosition} object-cover top-0 left-0 brightness-50`}
          priority
        />

        <div className={`relative z-10 flex flex-col md:flex-row  ${withButton && "justify-end md:justify-between " || "justify-center"}   gap-5  md:items-end h-full text-white py-[50px] w-[90%] md:w-5/6 mx-auto`}>
          <div>
            {subTitle}
            <p className="max-w-4xl text-s2 leading-s2 md:text-t2 md:leading-t2">
              {title}
            </p>
          </div>

          {withButton && (
            <Link className="w-2/4 md:max-w-[300px] " href={`${buttonHref}`}>
              <ButtonLink>{buttonText}</ButtonLink>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(HeroBanner);

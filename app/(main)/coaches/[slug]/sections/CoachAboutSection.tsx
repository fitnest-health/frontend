import Image from "next/image";
import CoachPlaceholderImage from "@/public/images/coach-placeholder.webp";
import { Button } from "@/components/ui/button";
import PhoneIcon from "@/public/icons/phone.svg";
import MailIcon from "@/public/icons/mail.svg";
import LocationIcon from "@/public/icons/location.svg";
import ClockIcon from "@/public/icons/clock.svg";
import Link from "next/link";
import FacebookIcon from "@/public/icons/facebook-black.svg";
import InstagramIcon from "@/public/icons/instagram-black.svg";
import LinkedinIcon from "@/public/icons/linkedin-black.svg";
import { COACH_LIST } from "@/config/constants";

const contactDetails = [
  {
    icon: PhoneIcon,
    title: "Telefon",
    desc: "050 555 55 55",
  },
  {
    icon: MailIcon,
    title: "E-poçt",
    desc: "G6d0C@example.com",
  },
  {
    icon: LocationIcon,
    title: "Ünvan",
    desc: "Bakı, Azərbaycan",
  },
  {
    icon: ClockIcon,
    title: "İş saatları",
    desc: "10:00 - 20:00",
  },
];

const getCoach = (slug: string) => {
  return COACH_LIST.find((coach) => coach.slug === slug);
};

const CoachAboutSection = async ({ slug }: { slug: string }) => {
  return (
    <>
      <h2 className="text-h4 text-center font-semibold leading-h4 text-neutral-50 mt-5">
        Xoş Gəlmisiniz FitZone Gym{" "}
      </h2>
      <p className="text-primary-700 text-center text-s1 leading-s1 font-medium">
        {getCoach(slug)?.jobTitle}
      </p>

      <div className="bg-softblue-950 w-full p-7 rounded-4xl mt-14 space-y-7">
        <div className=" flex flex-col md:flex-row items-center gap-7">
          <Image
            src={getCoach(slug)?.imageSrc || CoachPlaceholderImage}
            width={1288}
            height={520}
            alt="coach-detail"
            className="object-cover w-full max-w-[500px] h-[360px] md:h-[700px] rounded-4xl"
          />
          <div className="space-y-20 w-full">
            <div className="space-y-12">
              <h2 className="text-neutral-50 text-t2 leading-t2 md:text-h4 md:leading-h4 font-semibold">
                Haqqımda
              </h2>

              <div className=" space-y-7">
                <div className="flex justify-between">
                  <p className="text-primary-700 text-s2 leading-s2 md:text-t1 md:leading-t1">
                    {getCoach(slug)?.name}
                  </p>
                  <div className="socialMediaIcons flex gap-3">
                    <div className="w-10 h-10 p-px flex justify-center items-center rounded-full bg-linear-to-r from-[#C6A7F5] to-[#01A2BC]">
                      <Link
                        href={getCoach(slug)?.socials.facebook || "#"}
                        className="flex w-full h-full items-center justify-center rounded-full bg-white p-2"
                      >
                        <Image
                          src={FacebookIcon}
                          alt="facebook"
                          width={20}
                          height={20}
                        />
                      </Link>
                    </div>

                    {/* insta */}
                    <div className="w-10 h-10 p-px flex justify-center items-center rounded-full bg-linear-to-r from-[#C6A7F5] to-[#01A2BC]">
                      <Link
                        href={getCoach(slug)?.socials.instagram || "#"}
                        className="flex w-full h-full items-center justify-center rounded-full bg-white p-2"
                      >
                        <Image
                          src={InstagramIcon}
                          alt="instagram"
                          width={20}
                          height={20}
                        />
                      </Link>
                    </div>

                    {/* linkedin */}

                    <div className="w-10 h-10 p-px flex justify-center items-center rounded-full bg-linear-to-r from-[#C6A7F5] to-[#01A2BC]">
                      <Link
                        href={getCoach(slug)?.socials.linkedin || "#"}
                        className="flex w-full h-full items-center justify-center rounded-full bg-white p-2"
                      >
                        <Image
                          src={LinkedinIcon}
                          alt="facebook"
                          width={20}
                          height={20}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <p className="text-neutral-50 text-b1 leading-b1">
                  {getCoach(slug)?.description}
                </p>
              </div>
            </div>
            <div className="space-y-7">
              <h2 className="text-neutral-50 text-t2 leading-t2 md:text-h4 md:leading-h4 font-semibold">
                Xidmətlər
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {getCoach(slug)?.services.map((item, index) => {
                  return (
                    <Button
                      key={index}
                      className="text-b1 leading-b1 text-neutral-50"
                      variant={"outline"}
                      size={"sm"}
                    >
                      {item.name}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-evenly gap-5">
          {contactDetails.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div className="space-y-1" key={index}>
                <div className="flex gap-1 items-center text-primary-700">
                  <Image
                    width={16}
                    height={16}
                    className="w-4 h-4"
                    src={IconComponent}
                    alt="phone"
                  />
                  <p className="text-b2 leading-b2 font-medium">{item.title}</p>
                </div>
                <p className="text-b3 leading-b3 text-neutral-50">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CoachAboutSection;

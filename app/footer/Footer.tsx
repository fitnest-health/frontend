import Image from "next/image";
import logo from "@/public/icons/footer.svg";
import facebookIcon from "@/public/icons/facebook.svg";
import instagramIcon from "@/public/icons/instagram.svg";
import linkedinIcon from "@/public/icons/linkedin.svg";
import tiktokIcon from "@/public/icons/tiktok.svg";
import yticon from "@/public/icons/youtube.svg";
import { AnimatedLink } from "./AnimatedLink";
import Link from "next/link";
// import headers from middleware
import roundedPhone from "@/public/icons/phone-rounded.svg";
import roundedMail from "@/public/icons/mail-rounded.svg";
import ToTopBtn from "./ToTopBtn";
import LangBtn from "./LangBtn";

const Footer = async () => {
  return (
    <footer className="text-white  bg-softblue-950 font-display! relative">
      <ToTopBtn />
      <div className="footer_inside max-w-7xl mx-auto py-[30px] sm:py-[60px] px-5 ">
        <div className="footer_top flex flex-col sm:flex-row justify-between gap-14 sm:gap-0 ">
          <Link className=" block sm:hidden mx-auto" href="/">
            <Image
              src={logo}
              className="w-20 h-12"
              alt="logo"
              width={80}
              height={50}
            />
          </Link>
          <div className="left-side flex w-full sm:w-3/4 justify-between mx-auto">
            <Link className=" hidden sm:block" href="/">
              <Image
                src={logo}
                className="w-20 h-12"
                alt="logo"
                width={80}
                height={50}
              />
            </Link>

            <ul className="flex flex-col gap-4 text-b1 leading-b1 text-neutral-50 font-medium ">
              <AnimatedLink href="/faq">FAQ</AnimatedLink>
              <AnimatedLink href="/privacy">Məxfilik siyasəti</AnimatedLink>
              <AnimatedLink href="/terms">İstifadə şərtləri</AnimatedLink>
              <AnimatedLink href="/feedback">Şikayətlər və təkliflər</AnimatedLink>
              <AnimatedLink href="/contact">Əlaqə</AnimatedLink>
            </ul>

            <ul className="flex flex-col gap-4 text-b1 leading-b1 text-neutral-50 font-medium ">
              <li>
                <a className="flex gap-3 items-center" href="#">
                  <Image
                    src={instagramIcon}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    alt="instagram"
                  />
                  Instagram
                </a>
              </li>
              <li>
                <a className="flex gap-3 items-center" href="#">
                  <Image
                    src={facebookIcon}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    alt="facebook"
                  />
                  Facebook
                </a>
              </li>

              <li>
                <a className="flex gap-3 items-center" href="#">
                  <Image
                    src={linkedinIcon}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    alt="linkedin"
                  />
                  Linkedin
                </a>
              </li>

              <li>
                <a className="flex gap-3 items-center" href="#">
                  <Image
                    src={tiktokIcon}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    alt="tiktok"
                  />
                  Tiktok
                </a>
              </li>

              <li>
                <a className="flex gap-3 items-center" href="#">
                  <Image
                    src={yticon}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    alt="youtube"
                  />
                  Youtube
                </a>
              </li>
            </ul>
          </div>

          <div className="right-side sm:w-1/2 flex justify-end">
            <div className="contact flex flex-col sm:items-end gap-14 w-full">
              <div className="lang flex gap-9 justify-between sm:justify-start">
                <LangBtn txt="AZ" />
                <LangBtn txt="EN" />
                <LangBtn txt="RU" />
              </div>

              <div className="contact_details text-b1 leading-b1 text-neutral-50 font-medium space-y-5">
                <div className="flex gap-2 items-center">
                  <Image
                    src={roundedPhone}
                    className="w-8 h-8"
                    width={32}
                    height={32}
                    alt="phone"
                  />
                  <p>+994 70 852 24 25</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Image
                    src={roundedMail}
                    className="w-8 h-8"
                    width={32}
                    height={32}
                    alt="mail"
                  />
                  <p>fitnestazerbaijan@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-neutral-800 pt-5 sm:pt-[37px]"></div>
        <div className="footer_bottom h-full flex justify-center items-center">
          <p className=" p-3 sm:pt-14 text-b3 leading-b3 font-medium">© 2025 FitNest</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

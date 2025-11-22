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
import { headers } from "next/headers";

const Footer = async () => {
  const headerList = await headers();
  const pathname = headerList.get("x-current-path");
  console.log(pathname);
  
  return (
    <footer className="text-white py-[60px] bg-softblue-950 font-display!">
      <div className="footer_inside max-w-7xl mx-auto">
        <div className="footer_top flex justify-between">
          <div className="left-side flex w-1/2 justify-between">
            <Link href="/">
              <Image
                src={logo}
                className="w-20 h-12"
                alt="logo"
                width={80}
                height={50}
              />
            </Link>

            <ul className="flex flex-col gap-4 text-b1 leading-b1 text-neutral-50 font-medium">
              <AnimatedLink pathname={pathname || ""} href="/faq">
                FAQ
              </AnimatedLink>
              <AnimatedLink pathname={pathname || ""} href="#">Məxfilik siyasəti</AnimatedLink>
              <AnimatedLink pathname={pathname || ""} href="#">İstifadə şərtləri</AnimatedLink>
              <AnimatedLink pathname={pathname || ""} href="#">Şikayətlər və təkliflər</AnimatedLink>
              <AnimatedLink pathname={pathname ?? undefined} href="/about">Əlaqə</AnimatedLink>
            </ul>

            <ul className="flex flex-col gap-4 text-b1 leading-b1 text-neutral-50 font-medium">
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

          <div className="right-side flex w-1/2">
            <div className="contact flex flex-col gap-14 ml-auto">
              <div className="lang flex gap-9">
                <div>a</div>
                <div>b</div>
                <div>c</div>
              </div>

              <div className="contact_details">
                <p>+1 234 567 890</p>
                <p>email</p>
              </div>
            </div>
          </div>

          <div className="socialLinks"></div>
        </div>

        <div className="footer_bottom"></div>
      </div>
    </footer>
  );
};

export default Footer;

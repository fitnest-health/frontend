import type { Metadata } from "next";
import Navbar from "../../(layout)/navbar/Navbar";
import Footer from "../../(layout)/footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "FitNest",
    template: "%s | FitNest",
  },
};

export default function LocaleMainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen bg-softblue-1000">
        <Navbar />
        <main className="grow flex flex-col w-full mx-auto">{children}</main>
      </div>
      <Footer />
    </>
  );
}

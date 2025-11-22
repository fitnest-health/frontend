"use client";
import Image from "next/image";
import ArrowUp from "@/public/icons/arrow-up.svg";

const ToTopBtn = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0 })}
      className="bg-linear-to-r from-[#C6A7F5] to-[#01A2BC] text-white  p-px absolute rounded-full -top-[30px] right-10 sm:right-20 cursor-pointer"
    >
      <span className="flex w-full bg-softblue-950 text-white rounded-full p-3.5 ">
        <Image src={ArrowUp} alt="arrow" />
      </span>
    </button>
  );
};

export default ToTopBtn;

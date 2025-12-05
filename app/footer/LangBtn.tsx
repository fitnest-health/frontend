"use client";

interface LangBtnProps {
  txt: string;
  isActive?: boolean;
  className?: string;
  enableClick?: boolean; 
}

const LangBtn = ({
  txt,
  isActive,
  className,
  enableClick = true,}: LangBtnProps) => {
  const handleClick = () => {
    if (!enableClick) return; 
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
    return (
    <button
      onClick={handleClick}
      className={`bg-linear-to-r ${isActive ? "from-[#C6A7F5] to-[#01A2BC]" : "from-[#7c8da0] via-0% to-[#7c8da0]"}  text-neutral-50 text-b1 leading-b1 font-medium  p-px  rounded-full cursor-pointer w-10 h-10 ${className}`}
    >
      <span className="flex justify-center items-center w-full bg-softblue-950 text-white rounded-full p-2  ">
        {txt}
      </span>
    </button>
  );
};

export default LangBtn;

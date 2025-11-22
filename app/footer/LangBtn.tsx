"use client";

const LangBtn = ({ txt }: { txt: string }) => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0 })}
      className="bg-linear-to-r from-[#C6A7F5] to-[#01A2BC] text-neutral-50 text-b1 leading-b1 font-medium  p-px  rounded-full cursor-pointer w-10 h-10"
    >
      <span className="flex w-full bg-softblue-950 text-white rounded-full p-2  ">
        {txt}
      </span>
    </button>
  );
};

export default LangBtn;

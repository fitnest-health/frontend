import { cn } from "@/lib/utils";

interface HeadingProps {
    title: string;
    number: number;
    className?: string;
}
const Heading = ({ title, number, className }: HeadingProps) => {
    return (
        <div className={cn("flex  w-full items-center gap-5 md:gap-7 pb-5 md:pb-7 xl:pb-[60px]", className)}>
            <div className="circle w-10 h-10 sm:w-[60px] sm:h-[60px] text-b1 leading-b1 xs:text-s1 xs:leading-s1 font-bold ">
                {number}
            </div>
            <h3 className="text-s1 md:text-h4 font-semibold leading-s1 md:leading-h4">{title}</h3>
        </div>
    )
}

export default Heading
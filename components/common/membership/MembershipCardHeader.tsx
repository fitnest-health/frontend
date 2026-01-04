import Image from "next/image";

interface Props {
    label: string;
    discount: string;
    glowColor: string;
}

export default function MembershipCardHeader({ label, discount, glowColor }: Props) {
    return (
        <>
            <div className="absolute sm:top-[188px] sm:-left-[154px] -left-[120px] top-[122px] sm:w-[329px] sm:h-[329px] w-[236px] h-[236px] rounded-full blur-[100px] pointer-events-none"

                style={{
                    background: `radial-gradient(circle, ${glowColor} 0%)`,
                }}

            />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between p-2">
                    <h5 className="text-gray-50 font-medium text-h5 leading-h5">
                        {label}
                    </h5>
                    <h5 className="text-gray-50 font-medium text-h5 leading-h5">
                        {discount}
                    </h5>
                </div>

                <div className="flex justify-end mt-6">
                    <Image
                        src="/Logo.png"
                        alt="logo"
                        width={52}
                        height={50}
                        className="w-[34px] sm:w-[52px] h-auto"
                    />
                </div>
            </div>

        </>
    );
}

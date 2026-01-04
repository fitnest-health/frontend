import Image from "next/image";

interface Props {
    label: string;
    discount: string;
}

export default function MembershipCardHeader({ label, discount }: Props) {
    return (
        <>
            <div className="flex justify-between p-2">
                <h5 className="text-gray-50 font-medium text-h5 leading-h5'">{label}</h5>
                <h5  className="text-gray-50 font-medium text-h5 leading-h5'">{discount}</h5>
            </div>

            <div className="flex justify-end mt-6">
                <Image src="/Logo.png" alt="logo" width={52} height={50} className="w-[34px] sm:w-[52px] h-auto" />
            </div>
        </>
    );
}

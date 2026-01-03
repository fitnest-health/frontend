import Image from "next/image";

interface Props {
    label: string;
    discount: string;
}

export default function MembershipCardHeader({ label, discount }: Props) {
    return (
        <>
            <div className="flex justify-between">
                <h5>{label}</h5>
                <h5>{discount}</h5>
            </div>

            <div className="flex justify-end mt-6">
                <Image src="/Logo.png" alt="logo" width={52} height={50} />
            </div>
        </>
    );
}

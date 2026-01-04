import { Button } from '@/components/ui/button';

export default function MembershipDetails({ item }: any) {
    return (
        <>
            <h5 className="md:mt-2 sm:mb-5 mb-3 font-medium md:text-h5 md:leading-h5 sm:text-s1 sm:leading-s1 text-b1 leading-b1">{item.label} üzvlük kartı</h5>
            <p className="sm:mb-10 mb-3 md:text-s1 md:leading-s1 sm:text-b1 sm:leading-b1 text-b3 leading-b3">{item.description}</p>

            <div className="flex justify-between md:mb-[60px] sm:mb-10 mb-5">
                <Info label="Növü" value={item.type} />
                <Info label="Müddəti" value="Aylıq" />
                <Info label="Xidmət haqqı" value={item.fee} />
            </div>

            <Button size="lg" className='md:w-[200px] w-full h-12 font-medium text-b2 leading-b2'>Üzv ol</Button>
        </>
    );
}

function Info({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <p className="text-neutral-500 place-self-center sm:mb-2 mb-1 md:text-s1 md:leading-s1 sm:text-b1 sm:leading-b1">{label}</p>
            <p className='text-gray-50 place-self-center font-medium md:text-t1 md:leading-t1 sm:text-b1 sm:leading-b1'>{value}</p>
        </div>
    );
}

import { Button } from '@/components/ui/button';

export default function MembershipDetails({ item }: any) {
    return (
        <>
            <h5 className="mb-4">{item.label} üzvlük kartı</h5>
            <p className="mb-6">{item.description}</p>

            <div className="flex justify-between mb-6">
                <Info label="Növü" value={item.type} />
                <Info label="Müddəti" value="Aylıq" />
                <Info label="Xidmət haqqı" value={item.fee} />
            </div>

            <Button size="lg">Üzv ol</Button>
        </>
    );
}

function Info({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <p className="text-sm opacity-70">{label}</p>
            <p>{value}</p>
        </div>
    );
}

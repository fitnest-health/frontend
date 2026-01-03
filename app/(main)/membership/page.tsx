import Container from '@/components/common/Container';
import MembershipCard from '@/components/common/membership/MembershipCard';

const memberships = [
    {
        id: "standart",
        label: "Standart",
        discount: "5%",
        description:
            "FitNest-in əsas xidmətlərindən istifadə və partnyor mağazalarda 5% endirim imkanı təqdim edir.",
        type: "Standart",
        fee: "50",
    },
    {
        id: "gold",
        label: "Gold",
        discount: "10%",
        description:
            "FitNest daxilində daha geniş xidmətlərdən yararlanmaq və bütün partnyor mağazalarda 10% endirim əldə etmək imkanı verir.",
        type: "Gold",
        fee: "100",
    },
    {
        id: "premium",
        label: "Premium",
        discount: "15%",
        description:
            "Maksimum imtiyazlar təqdim edir: bütün FitNest xidmətlərinə giriş və bütün partnyor platformalarda 15%",
        type: "Premium",
        fee: "150",
    },
];

export default function Page() {
    return (
        <>
            {/* ===== BANNER ===== */}
            <div className="flex justify-center py-10 mt-20 text-white bg-linear-to-l from-[#243665] to-[#0B1223]">
                <div>
                    <h2 className="text-center text-t1 sm:text-h2">
                        Sağlam Həyat. Güclü Sən.
                    </h2>
                    <p className="mt-3 text-center max-w-[600px] mx-auto">
                        <span className="text-primary-700">FitNest</span> — sağlam həyat tərzini
                        asan, maraqlı və davamlı edən platformadır.
                    </p>
                </div>
            </div>

            <Container>
                <section className="space-y-6 my-20">
                    {memberships.map(item => (
                        <MembershipCard key={item.id} item={item} />
                    ))}
                </section>
            </Container>
        </>
    );
}

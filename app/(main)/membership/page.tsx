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
            <div className='flex justify-center md:pt-20 md:pb-[122px] sm:pt-12 sm:pb-[70px] py-6 px-4 mt-20 md:mt-[193px] text-white bg-blue-500 w-full bg-linear-to-l from-[#243665] to-[#0B1223]'>
                <div>
                    <h2 className='text-t1 text-center leading-t1 font-medium sm:text-h2 sm:leading-h2'>Üzvlük</h2>
                    <p className='text-b2 mx-auto text-center leading-b2 font-medium mt-3 sm:text-s2 sm:leading-s2 max-w-[360px] sm:max-w-[460px] md:max-w-[628px]'>
                        <span className="text-primary-700">FitNest</span> üzvlük ilə həm zal xidmətlərində, həm də partnyor
                        mağazalarda, qida əlavələrində, spa və digər xidmətlərdə xüsusi endirimlər qazanırsan. Sənin üçün uyğun paketi seç və bütün üstünlüklərdən dərhal faydalan.
                    </p>
                </div>
            </div>

            <Container>
                <section className="md:mb-14 sm:mb-20 mb-10 mt-20 md:space-y-10 space-y-5">
                    {memberships.map(item => (
                        <MembershipCard key={item.id} item={item} />
                    ))}
                </section>
            </Container>
        </>
    );
}

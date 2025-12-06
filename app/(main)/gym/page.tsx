import LangBtn from '@/app/footer/LangBtn'

const steps = [
  {
    id: 1,
    title: "Məlumatlarını daxil et",
    desc: "Öz bədən göstəricilərini və gündəlik aktivliyini əlavə et — planın sənə uyğun tərtib olunsun.",
  },
  {
    id: 2,
    title: "Hədəfini seç",
    desc: "Arıqlamaq, əzələ artımı və ya balanslı forma hədəfini seç.",
  },
  {
    id: 3,
    title: "Məşq planını əldə et",
    desc: "FitNest sənə uyğun məşq ardıcıllığı və bərpa günlərini müəyyən edir.",
  },
];


const gym = () => {
    return (
        <div>
            <div className='mt-20 lg:max-w-7xl mx-4 sm:mx-5 lg:m-auto text-neutral-50'>
                <h2 className='text-s1 leading-s1 sm:text-h6 sm:leading-h6 font-medium mb-4 sm:mb-7 lg:mb-10'>Məşq olanı necə işləyir?</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-[75px]'>
                    {steps.map((step) => (
                        <div key={step.id} className='rounded-3xl p-5 border border-aqua-900'>
                            <LangBtn txt={step.id.toString()} enableClick={false} className='cursor-none font-bold text-b2 leading-b2 sm:text-b1 sm:leading-b1'/>
                            <h3 className='font-medium text-s2 leading-s2 sm:text-t1 sm:leading-t1 mb-5 mt-3 sm:mt-5'>{step.title}</h3>
                            <p className='font-medium text-b2 leading-b2 sm:text-b1 sm:leading-b1'>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default gym
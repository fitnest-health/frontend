import Link from 'next/link'

const ViewAll = () => {
  return (
        <div className='flex max-md:items-center md:flex-col min-[1440px]:items-start min-[1440px]:flex-row justify-between gap-4 md:gap-6 mb-4 md:mb-7'>
            <div className='max-md:max-w-[232px] '>
                <h2 className='text-b1 leading-b1 font-medium md:text-h6 md:leading-h6 min-[1440px]:text-h3 min-[1440px]:leading-h3 md:mb-2'>İdmansevərlərin Seçimi</h2>
                <p className='text-b3 leading-b3 md:font-medium md:text-s2 md:leading-s2 min-[1440px]:text-t2 min-[1440px]:leading-t2'>Son zamanların ən çox maraq görən idman məkanları.</p>
            </div>
            <Link 
            href={''}
            className='text-b3 leading-b3 md:text-b2 md:leading-b2 md:font-medium py-[13px] px-2.5 w-[134px] md:w-[268px] text-nowrap text-center rounded-4xl border border-primary-700 text-primary-700'>Hamısına bax</Link>
        </div>
  )
}

export default ViewAll
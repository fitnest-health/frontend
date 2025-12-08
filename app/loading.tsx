
import LoadingGift from '@/public/Loading.gif'

const loading = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <img src={LoadingGift.src} alt="loading" className='w-full md:w-1/4 h-45' />
        </div>
    )
}

export default loading
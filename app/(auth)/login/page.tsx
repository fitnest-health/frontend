import React from 'react'
import LoginClientPage from './LoginClient'

const Login = () => {
  return (
   <div className='text-gray-400 loginCnt flex justify-start items-center px-4 sm:px-20'>
        <div className='mt-20 w-full lg:w-1/2'>
            <h1 className='text-center text-white text-h5 leading-h5 font-bold'>Təkrar xoş Gəldin!</h1>
            <p className='text-center text-white mt-5 text-b1 leading-b1 font-medium'>Hesabına daxil ol və <span className='text-primary-700'>Fitnest</span> ekosistemini araşdır.</p>

            <LoginClientPage />
        </div>
    </div>
  )
}

export default Login
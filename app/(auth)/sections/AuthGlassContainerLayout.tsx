import React from 'react'

const AuthGlassContainerLayout = ({children,className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={`w-full max-w-[518px]  bg-[#0E293D4D] rounded-4xl border-neutral-700 border px-5 py-10 ${className}`}>{children}</div>
  )
}

export default AuthGlassContainerLayout
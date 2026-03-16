// app/payment-error/page.tsx

import { Card } from '@/components/ui/card'
import { XCircle, CreditCard, AlertTriangle, Clock } from 'lucide-react'

interface Props {
  searchParams: Promise<{ last4?: string; reason?: string }>
}

const PaymentErrorPage = async ({ searchParams }: Props) => {
  const { last4, reason } = await searchParams

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-primary-1000'>
      <Card className='max-w-4xl flex flex-col items-center'>

        <div className='w-18 h-18 rounded-full  flex items-center justify-center mb-2'>
          <XCircle className='text-red-500' size={40} strokeWidth={1.5} />
        </div>

        <h1 className='text-h2 leading-h2 text-center font-semibold text-primary-700'>Fitnest</h1>
        <p className='text-t2 leading-t2'>ödənişiniz uğursuz oldu</p>

        {reason && (
          <div className='w-full flex items-start gap-2 rounded-lg px-4 py-3 mt-2 text-lg'>
            <AlertTriangle size={24} className='text-red-400 mt-0.5 shrink-0' />
            <p className=' text-red-600'>{reason}</p>
          </div>
        )}

        <div className='w-full border-t border-border mt-4 pt-4 flex flex-col gap-2.5'>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-muted-foreground flex items-center gap-1.5'>
              <CreditCard size={14} /> Ödəniş üsulu
            </span>
            <span className='text-sm font-medium'>
              {last4 ? `•••• ${last4}` : '––'}
            </span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-muted-foreground flex items-center gap-1.5'>
              <Clock size={14} /> Tarix
            </span>
            <span className='text-sm font-medium'>13 Mart 2026</span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-muted-foreground flex items-center gap-1.5'>
              <XCircle size={14} /> Status
            </span>
            <span className='text-xs bg-red-50 text-red-600 px-3 py-0.5 rounded-full font-medium'>
              Uğursuz
            </span>
          </div>
        </div>

      </Card>
    </div>
  )
}

export default PaymentErrorPage



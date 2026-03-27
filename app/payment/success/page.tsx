// app/payment-success/page.tsx

import { Card } from "@/components/ui/card";
import { CheckCircle, CreditCard, Clock, CheckSquare } from "lucide-react";
import { getMessages } from "@/lib/i18n/server";

interface Props {
  searchParams: Promise<{ last4?: string }>;
}

const PaymentSuccessPage = async ({ searchParams }: Props) => {
  const { last4 } = await searchParams;
  const { messages } = await getMessages();

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-primary-1000">
      <Card className="max-w-4xl flex flex-col items-center">
        <div className="w-18 h-18 rounded-full bg-primary-950 flex items-center justify-center mb-2">
          <CheckCircle className="text-green-500" size={40} strokeWidth={1.5} />
        </div>

        <h1 className="text-h2 leading-h2 text-center font-semibold text-primary-700">
          Fitnest
        </h1>
        <p className="text-t2 leading-t2">{messages.payment.success}</p>

        <div className="w-full border-t border-border mt-4 pt-4 flex flex-col gap-2.5">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground flex items-center gap-1.5">
              <CreditCard size={14} /> {messages.payment.paymentMethod}
            </span>
            <span className="text-sm font-medium">
              {last4 ? `•••• ${last4}` : "––"}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground flex items-center gap-1.5">
              <Clock size={14} /> {messages.payment.date}
            </span>
            <span className="text-sm font-medium">13 Mart 2026</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground flex items-center gap-1.5">
              <CheckSquare size={14} /> {messages.payment.status}
            </span>
            <span className="text-xs  px-3 py-0.5 rounded-full font-semibold">
              {messages.payment.successStatus}
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PaymentSuccessPage;

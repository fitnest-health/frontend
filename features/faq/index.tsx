import BannerContainer from "@/components/common/BannerContainer"
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"
import MessageIcon from '@/public/icons/message-question-circle.svg'
import { getMessages } from "@/lib/i18n/server";

interface AccordionData {
    title: string
    content: string
}

const FaqPage = async () => {
    const { messages } = await getMessages();
    const accordionItems: AccordionData[] = messages.faq.items;

    return (
        <BannerContainer
            title={messages.faq.title}
            subtitle={
                <>
                    <span className="text-primary-700">FitNest</span>
                    <span> {messages.faq.subtitle}</span>
                </>
            }
            iconUrl={MessageIcon.src}
        >
            <div className="m-auto">
                <Accordion type="single" collapsible className="w-full space-y-6">
                    {accordionItems.map((item, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border gradient-border bg-softblue-950 text-white px-8 sm:py-8 py-3 sm:rounded-4xl rounded-3xl overflow-hidden"

                        >
                            <AccordionTrigger className="text-t2 leading-t2 sm:text-h6 sm:leading-h6">
                                {item.title}
                            </AccordionTrigger>
                            <AccordionContent className="text-s2 leading-s2 sm:text-t2-size sm:leading-t2">
                                {item.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </BannerContainer>
    )
}

export default FaqPage;

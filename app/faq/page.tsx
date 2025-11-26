import BannerContainer from "@/components/common/BannerContainer"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import MessageIcon from '@/public/icons/message-question-circle.svg'

interface AccordionData {
  title: string
  content: string
}

const accordionItems: AccordionData[] = [
  { title: "lorem ipsum 1", content: "Content 1 lorem ipsum..." },
  { title: "lorem ipsum 2", content: "Content 2 lorem ipsum..." },
  { title: "lorem ipsum 3", content: "Content 3 lorem ipsum..." },
  { title: "lorem ipsum 4", content: "Content 4 lorem ipsum..." },
  { title: "lorem ipsum 5", content: "Content 5 lorem ipsum..." },
]

const Faq = () => {
  return (
    <BannerContainer
      title="FAQs"
      subtitle={
        <>
          <span className="text-primary-700">FitNest</span>
          <span> haqqında ən çox soruşulan suallar</span>
        </>
      }
      iconUrl={MessageIcon.src}
    >
      <div>
        <Accordion type="single" collapsible className="w-full space-y-6 ">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border gradient-border bg-softblue-950 text-white px-8 py-4 rounded-4xl overflow-hidden"

            >
              <AccordionTrigger className="text-t2 leading-t2 font-medium sm:text-h6 sm:leading-h6">
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

export default Faq
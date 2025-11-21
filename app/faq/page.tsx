import Banner from "@/components/common/banner"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

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
    <div>
      <Banner
        title="FAQs"
        subtitle={
          <>
            <span className="text-primary-700">FitNest</span>
            <span> haqqında ən çox soruşulan suallar</span>
          </>
        }
        iconUrl="/public/icons/mail.svg"
        iconAlt="FAQ Icon"
      />
    <div>
      <Accordion type="single" collapsible className=" relative z-50 w-full space-y-6 md:pt-[332px] sm:pt-64 pt-52 md:px-40">
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`} 
          className="border gradient-border bg-softblue-950 text-white px-8 py-4 rounded-4xl overflow-hidden"

        >
          <AccordionTrigger className="text-t2-size leading-t2 font-medium sm:text-h6-size sm:leading-h6">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-s2-size leading-s2 sm:text-t2-size sm:leading-t2">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    </div>

    </div>
  )
}

export default Faq
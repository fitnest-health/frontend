import Banner from "@/components/common/banner"

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
    </div>
  )
}

export default Faq
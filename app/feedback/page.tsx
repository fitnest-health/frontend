'use client'
import BannerContainer from "@/components/common/BannerContainer"
import { Card } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { MessageCircleQuestionMark } from "lucide-react"
import { useForm } from "react-hook-form"
import mailIcon from "@/public/icons/mail.svg";
import peopleIcon from "@/public/icons/people.svg";
import inboxIcon from "@/public/icons/direct-inbox.svg";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { feedbackSchema } from "@/config/schemas"
import { Button } from "@/components/ui/button"
import CustomSelect from "@/components/ui/select"

const Feedback = () => {

  const form = useForm<z.infer<typeof feedbackSchema>>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof feedbackSchema>) {
    // Do something with the form values.
    // form validasiya olmasa bu funksiya islemeyecek
    console.log(values);
  }

  const fields = [
    {
      name: "fullname",
      placeholder: "Ad, Soyad",
      leftIcon: peopleIcon,
      component: Input,
    },
    {
      name: "email",
      placeholder: "E-poçt",
      leftIcon: mailIcon,
      component: Input,
    },
    {
      name: "type",
      placeholder: "Müraciət növü",
      leftIcon: inboxIcon,
      component: CustomSelect,
      options: [
        { label: "Şikayət", value: "complaint" },
        { label: "Təklif", value: "suggestion" },
        { label: "Digər", value: "other" },
      ]
    },
    {
      name: "message",
      placeholder: "Mesajınızı daxil edin",
      component: Textarea,
    },
  ];

  return (
    <BannerContainer
      title="Şikayət və təkliflər"
      subtitle="Sizin fikirləriniz bizim üçün dəyərlidir – paylaşın, biz qulaq asırıq!"
      icon={MessageCircleQuestionMark}
    >
      <Card className="lg:max-w-[628px] mx-auto mt-4 mb-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full py-0 lg:py-10"
          >
            {fields.map((f) => (
              <FormField
                key={f.name}
                control={form.control}
                name={f.name as any}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-2 text-b1 leading-b1 text-gray-50">
                      {f.placeholder}
                    </FormLabel>

                    <FormControl>
                      {f.component === CustomSelect ? (
                        <CustomSelect
                          value={field.value}
                          onChange={field.onChange}
                          placeholder={f.placeholder}
                          leftIcon={f.leftIcon}
                          options={f.options}
                        />
                      ) : (
                        <f.component
                          {...field}
                          placeholder={f.placeholder}
                          {...(f.component === Input && f.leftIcon ? { leftIcon: f.leftIcon } : {})}
                        />
                      )}
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

            ))}

            <Button
              disabled={!form.formState.isValid}
              type="submit"
              className="px-10 py-2.5"
            >
              Göndər
            </Button>
          </form>
        </Form>
      </Card>
    </BannerContainer>
  )
}

export default Feedback
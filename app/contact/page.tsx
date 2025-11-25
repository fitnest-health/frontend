"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import peopleIcon from "@/public/icons/people.svg";
import phoneIcon from "@/public/icons/phone.svg";
import mailIcon from "@/public/icons/mail.svg";
import { contactFormSchema } from "@/config/schemas";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage, } from "@/components/ui/form";
import Image from "next/image";
import contactImg from "@/public/images/contact.jpg";
import { Textarea } from "@/components/ui/textarea";

export default function BugReportForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    // Do something with the form values.
    // form validasiya olmasa bu funksiya islemeyecek
    console.log(values);
  }

  const fields = [
    {
      name: "fullname",
      placeholder: "Ad",
      leftIcon: peopleIcon,
      component: Input,
    },
    {
      name: "email",
      placeholder: "Email",
      leftIcon: mailIcon,
      component: Input,
    },
    {
      name: "phone",
      placeholder: "Telefon",
      leftIcon: phoneIcon,
      component: Input,
    },
    {
      name: "message",
      placeholder: "Mesajınızı daxil edin",
      component: Textarea,
    },
  ];


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-14">
      <div className="rounded-[50px] h-[750px] hidden sm:block">
        <Image
          src={contactImg}
          className="rounded-[50px] grayscale w-full h-full object-cover"
          width={1000}
          height={760}
          alt="Contact"
        />
      </div>
      <Card className="w-full space-y-12 rounded-[50px]">
        <CardHeader>
          <h2 className="text-t1 leading-t1 sm:text-h2 sm:leading-h2 font-normal">
            Bizimlə əlaqə saxla
          </h2>
          <p className="font-light text-b1 leading-b1 sm:text-t2 sm:leading-t2">
            Komandamız səninlə əlaqə saxlayacaq
          </p>
        </CardHeader>

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
                    <FormControl>
                      <f.component
                        {...field}
                        placeholder={f.placeholder}
                        {...(f.component === Input && f.leftIcon
                          ? { leftIcon: f.leftIcon }
                          : {})}
                      />
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
    </div>
  );
}

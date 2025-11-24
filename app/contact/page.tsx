"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { useForm } from "react-hook-form";

import peopleIcon from "@/public/icons/people.svg";
import phoneIcon from "@/public/icons/phone.svg";
import mailIcon from "@/public/icons/mail.svg";

import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import Image from "next/image";
import contactImg from "@/public/images/contact.jpg";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  fullname: z.string().min(2).max(50),
  phone: z.string().min(2).max(50),
  email: z.email(),
  message: z.string().min(2).max(500),
});

export default function BugReportForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-14">
      <div className="rounded-[50px] h-[750px] ">
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
          <h2 className="text-h2 leading-h2 font-normal">
            Bizimlə əlaqə saxla
          </h2>
          <p className="font-light text-t2 leading-t2">
            Komandamız səninlə əlaqə saxlayacaq
          </p>
        </CardHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full py-10"
          >
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      leftIcon={peopleIcon}
                      placeholder="Ad"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      leftIcon={mailIcon}
                      placeholder="Email"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      leftIcon={phoneIcon}
                      placeholder="Telefon"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Mesajinizi daxil edin" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
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

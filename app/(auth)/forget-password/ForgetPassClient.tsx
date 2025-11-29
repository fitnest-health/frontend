"use client";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import mailIcon from "@/public/icons/mail.svg";

import { Input } from "@/components/ui/input";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgetPassSchema } from "@/config/schemas";
import { Button } from "@/components/ui/button";

import AuthGlassContainerLayout from "../sections/AuthGlassContainerLayout";


const ForgetPassClient = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof ForgetPassSchema>>({
    resolver: zodResolver(ForgetPassSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof ForgetPassSchema>) {
    // Do something with the form values.
    // form validasiya olmasa bu funksiya islemeyecek
    console.log(values);
     router.push(`/forget-password?mail=${values.email}`);
  }

  const fields = [
    {
      name: "email",
      type: "email",
      placeholder: "E-poçt",
      leftIcon: mailIcon,
      component: Input,
    },
  ];

  return (
    <AuthGlassContainerLayout className=" mx-auto mt-4 mb-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full "
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
                      type={f.type}
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
            className="px-10 py-5 w-full"
          >
            Şifrəni sıfırla
          </Button>
        </form>
      </Form>
    </AuthGlassContainerLayout>
  );
};

export default ForgetPassClient;

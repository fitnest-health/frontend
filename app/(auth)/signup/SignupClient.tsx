"use client";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import mailIcon from "@/public/icons/mail.svg";

import eyeIcon from "@/public/icons/eye.svg";
import eyeSlashIcon from "@/public/icons/eye-slash.svg";
import passIcon from "@/public/icons/password.svg";
import googleIcon from "@/public/icons/google.svg";

import { Input } from "@/components/ui/input";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "@/config/schemas";
import { Button } from "@/components/ui/button";

import AuthGlassContainerLayout from "../sections/AuthGlassContainerLayout";
import Image from "next/image";
import Link from "next/link";

const SignUpClient = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      passwordRepeat: "",
    },
  });

  function onSubmit(values: z.infer<typeof SignupSchema>) {
    // Do something with the form values.
    // form validasiya olmasa bu funksiya islemeyecek
    console.log(values);

    router.push(`/signup?mail=${values.email}`);
  }

  const fields = [
    {
      name: "name",
      placeholder: "Ad",
      leftIcon: mailIcon,
      component: Input,
    },
    {
      name: "surname",
      placeholder: "Soyad",
      leftIcon: mailIcon,
      component: Input,
    },
    {
      name: "email",
      placeholder: "E-poçt",
      leftIcon: mailIcon,
      component: Input,
    },

    {
      name: "password",
      placeholder: "Şifrə",
      leftIcon: passIcon,
      rightIcon: {
        src: !showPassword ? eyeIcon : eyeSlashIcon,
        onClick: () => setShowPassword(!showPassword),
      },
      type: showPassword ? "text" : "password",
      component: Input,
      helperText: "* Minimum 8 simvol, 1 böyük hərf, 1 rəqəm",
      helperRoute: "",
    },
    {
      name: "passwordRepeat",
      placeholder: "Şifrə təkrarı",
      leftIcon: passIcon,
      rightIcon: {
        src: !showPasswordRepeat ? eyeIcon : eyeSlashIcon,
        onClick: () => setShowPasswordRepeat(!showPasswordRepeat),
      },
      type: showPasswordRepeat ? "text" : "password",
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
                      {...(f.component === Input && f.rightIcon
                        ? { rightIcon: f.rightIcon }
                        : {})}
                    />
                  </FormControl>

                  {f.helperText && (
                    <FormDescription
                      className="text-right text-b2 leading-b2 text-neutral-50 cursor-pointer"
                      onClick={() =>
                        f.helperRoute && router.push(f.helperRoute)
                      }
                    >
                      {f.helperText}
                    </FormDescription>
                  )}

                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button
            // disabled={!form.formState.isValid}
            type="submit"
            className="px-10 py-5 w-full"
          >
            Qeydiyyatdan keç
          </Button>

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="h-px bg-neutral-800"></div>
            <span>və ya</span>
            <div className="h-px bg-neutral-800"></div>
          </div>

          <Button
            onClick={() => router.push("/register")}
            variant={"outline"}
            className="px-10 py-5 w-full border border-neutral-800 text-neutral-50 bg-transparent hover:bg-transparent"
          >
            <Image
              src={googleIcon}
              alt="google"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="text-s2 leading-s2 font-medium font-display">
              Google ilə Qeydiyyatdan keç
            </span>
          </Button>

          <div className="text-center">
            Hesabın var?{" "}
            <Link
              href={'/login'}
              className="text-neutral-50 underline"
            >
              Daxil ol
            </Link>
          </div>
        </form>
      </Form>
    </AuthGlassContainerLayout>
  );
};

export default SignUpClient;

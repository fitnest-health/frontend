"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import peopleIcon from "@/public/icons/people.svg";
import phoneIcon from "@/public/icons/phone.svg";
import mailIcon from "@/public/icons/mail.svg";
import { contactFormSchema } from "@/schemas/schemas";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage, } from "@/components/ui/form";
import Image from "next/image";
import contactImg from "@/public/images/contact.jpg";
import { Textarea } from "@/components/ui/textarea";
import Container from "@/components/common/Container";
import { useI18n } from "@/lib/i18n/provider";

export default function ContactPage() {
    const { t } = useI18n();
    type ContactFormValues = z.infer<typeof contactFormSchema>;

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            fullname: "",
            phone: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: ContactFormValues) {
        // Do something with the form values.
        // form validasiya olmasa bu funksiya islemeyecek
        console.log(values);
    }

    const fields = [
        {
            name: "fullname",
            placeholder: t.contact.name,
            leftIcon: peopleIcon,
            component: Input,
        },
        {
            name: "email",
            placeholder: t.contact.email,
            leftIcon: mailIcon,
            component: Input,
        },
        {
            name: "phone",
            placeholder: t.contact.phone,
            leftIcon: phoneIcon,
            component: Input,
        },
        {
            name: "message",
            placeholder: t.contact.message,
            component: Textarea,
        },
    ] as const satisfies Array<{
        name: keyof ContactFormValues;
        placeholder: string;
        leftIcon?: string;
        component: typeof Input | typeof Textarea;
    }>;


    return (
        <Container className="mt-10 sm:mt-25 lg:mt-[173px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-[37px]">
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
                            {t.contact.title}
                        </h2>
                        <p className="font-light text-b1 leading-b1 sm:text-t2 sm:leading-t2">
                            {t.contact.subtitle}
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
                                    name={f.name}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <f.component
                                                    {...field}
                                                    placeholder={f.placeholder}
                                                    {...(f.component === Input && "leftIcon" in f && f.leftIcon
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
                                {t.contact.send}
                            </Button>
                        </form>
                    </Form>
                </Card>
            </div>
        </Container>
    );
}

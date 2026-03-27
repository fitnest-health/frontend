'use client'
import BannerContainer from "@/components/common/BannerContainer"
import { Card } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import MessageIcon from '@/public/icons/message-question-circle.svg'
import { useForm } from "react-hook-form"
import mailIcon from "@/public/icons/mail.svg";
import peopleIcon from "@/public/icons/people.svg";
import inboxIcon from "@/public/icons/direct-inbox.svg";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { feedbackSchema } from "@/schemas/schemas"
import { Button } from "@/components/ui/button"
import CustomSelect from "@/components/ui/select"
import { useI18n } from "@/lib/i18n/provider"

const FeedbackPage = () => {
    const { t } = useI18n()
    type FeedbackFormValues = z.infer<typeof feedbackSchema>;

    const form = useForm<FeedbackFormValues>({
        resolver: zodResolver(feedbackSchema),
        defaultValues: {
            fullname: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: FeedbackFormValues) {
        // Do something with the form values.
        // form validasiya olmasa bu funksiya islemeyecek
        console.log(values);
    }

    const fields = [
        {
            name: "fullname",
            placeholder: t.feedback.fullName,
            leftIcon: peopleIcon,
            component: Input,
        },
        {
            name: "email",
            placeholder: t.feedback.email,
            leftIcon: mailIcon,
            component: Input,
        },
        {
            name: "type",
            placeholder: t.feedback.requestType,
            leftIcon: inboxIcon,
            component: CustomSelect,
            options: [
                { label: t.feedback.complaint, value: "complaint" },
                { label: t.feedback.suggestion, value: "suggestion" },
                { label: t.feedback.other, value: "other" },
            ]
        },
        {
            name: "message",
            placeholder: t.feedback.message,
            component: Textarea,
        },
    ] as const;

    return (
        <BannerContainer
            title={t.feedback.title}
            subtitle={t.feedback.subtitle}
            iconUrl={MessageIcon.src}
        >
            <Card className="lg:max-w-[628px] mx-auto mb-10">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 w-full "
                    >
                        {fields.map((f) => (
                            <FormField
                                key={f.name}
                                control={form.control}
                                name={f.name}
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
                            {t.feedback.send}
                        </Button>
                    </form>
                </Form>
            </Card>
        </BannerContainer>
    )
}

export default FeedbackPage

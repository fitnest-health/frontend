"use client";

import BannerContainer from "@/components/common/BannerContainer";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import ShieldIcon from '@/public/icons/shield.svg'
import { useI18n } from "@/lib/i18n/provider";

interface PolicyItem {
    id: number;
    title: string;
    text: string;
}
const PrivacyPolicyPage = () => {
    const { t } = useI18n();
    const context: PolicyItem[] = t.privacy.items.map((item, index) => ({
        id: index + 1,
        title: item.title,
        text: item.text,
    }));

    return (
        <BannerContainer
            title={t.privacy.title}
            subtitle={t.privacy.subtitle}
            iconUrl={ShieldIcon.src}
        >
            <div className="w-full flex flex-col gap-5 items-center">
                {
                    context.map(item => (
                        <Card key={item.id}>
                            <CardHeader className="text-s2 sm:text-h6 font-medium">
                                <CardTitle>{item.id}. {item.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-50! text-b2 sm:leading-s1 font-[510px] leading-b2 sm:text-s1">
                                {item.text}
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </BannerContainer>
    )
}

export default PrivacyPolicyPage

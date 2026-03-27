import BannerContainer from "@/components/common/BannerContainer";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import ShieldIcon from '@/public/icons/shield.svg'
import { getMessages } from "@/lib/i18n/server";

interface PolicyItem {
    id: number;
    title: string;
    text: string;
}
const PrivacyPolicyPage = async () => {
    const { messages } = await getMessages();
    const context: PolicyItem[] = messages.privacy.items.map((item, index) => ({
        id: index + 1,
        title: item.title,
        text: item.text,
    }));

    return (
        <BannerContainer
            title={messages.privacy.title}
            subtitle={messages.privacy.subtitle}
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

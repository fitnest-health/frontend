import BannerContainer from "@/components/common/BannerContainer"
import AlertIcon from '@/public/icons/alert-circle.svg'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getMessages } from "@/lib/i18n/server";

interface TermItem {
    id: string;
    title: string;
    content: string;
}

const TermsPage = async () => {
    const { messages } = await getMessages();
    const termsData: TermItem[] = messages.terms.items.map((item, index) => ({
        id: String(index + 1),
        title: item.title,
        content: item.content,
    }));

    return (
        <BannerContainer
            title={messages.terms.title}
            subtitle={
                <>
                    <span className="text-primary-700">FitNest</span>
                    <span> {messages.terms.subtitle}</span>
                </>
            }
            iconUrl={AlertIcon.src}
        >
            <div className="space-y-4 sm:space-y-8">
                {
                    termsData.map((item, index) => (
                        <Card key={item.id}>
                            <CardHeader className="text-s2 sm:text-h6 font-medium">
                                <CardTitle>{index + 1}. {item.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-50! text-b2 sm:leading-s1 font-[510px] leading-b2 sm:text-s1">
                                {item.content}
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </BannerContainer>
    )
}

export default TermsPage

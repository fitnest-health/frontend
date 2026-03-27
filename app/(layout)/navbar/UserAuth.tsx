'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { User } from "lucide-react"
import { useI18n } from "@/lib/i18n/provider"

interface UserSectionProps {
    initialUser?: unknown
    isMobileMode?: boolean
}

const UserAuth = ({ isMobileMode = false }: UserSectionProps) => {
    const { t } = useI18n()

    // const displayUser = !!initialUser

    /*     if (displayUser) {
            return (
                <>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/profile">
                            <User className="h-5 w-5" />
                        </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/profile">
                            <User className="h-5 w-5" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                    </Button>
                </>
            )
        } */

    return (
        <div className={`${isMobileMode ? 'flex flex-col-reverse mt-5' : 'hidden'} md:flex gap-2`}>
            <Button variant="link" size="sm" asChild >
                <Link href="/login">
                    <User />
                    {t.nav.login}
                </Link>

            </Button>
            <Button size="sm" asChild>
                <Link href="/signup">{t.nav.signup}</Link>
            </Button>
        </div>
    )
}

export default UserAuth

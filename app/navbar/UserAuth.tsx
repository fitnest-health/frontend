'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LogOut, User } from "lucide-react"

interface UserSectionProps {
    initialUser: any
}

const UserAuth = ({ initialUser }: UserSectionProps) => {

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
        <div className="flex gap-2">
            <Button variant="link" size="sm" asChild >
                <Link href="/login">
                    <User />
                    Daxil ol
                </Link>

            </Button>
            <Button size="sm" asChild>
                <Link href="/register">Qeydiyyatdan keç</Link>
            </Button>
        </div>
    )
}

export default UserAuth
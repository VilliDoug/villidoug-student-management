import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

interface HeaderProps {
    userName: string;
}

export default function Header ({ userName }: HeaderProps) {
    return (
        <nav className="flex items-center justify-between px-8 py-3 bg-sky-300">
            <div className="text-2xl font-bold tracking-tight text-white">
                受講生管理システム・Student Management App
            </div>

            <div className="flex items-center gap-6 m-3">
                <span className="text-sm text-white">ようこそ、<span className="font-semibold">{userName}
                    </span>
                </span> 
                <Link href="/" className="flex gap-3 px-4 py-2 text-sm text-white font-medium border rounded-md hover:bg-red-400 transition-colors">
                ログアウト
                <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
                </Link>                   
            </div>
        </nav>
    
    )
}
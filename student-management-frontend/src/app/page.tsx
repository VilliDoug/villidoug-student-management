import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/ui/components/footer";

export default async function Page() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-6 bg-white text-black">
      <div className="flex-grow w-full max-w-sm space-y-6 text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/banner.png"
            width={1024}
            height={572}
            alt="Student Management System"
            className="rounded-lg my-4"
          />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          受講生管理システム
        </h1>
        <h2 className="text-2xl font-bold tracking-tight mb-10">
          Student Management System
        </h2>
        <div className="flex flex-col gap-4">
          {/* Login Button - Disabled */}
          <button
            disabled
            className="flex items-center justify-center gap-4 w-full py-4 px-4 bg-gray-200 text-gray-500 rounded-lg opacity-50 cursor-not-allowed font-medium hover:bg-gray-300 transition-all"
          >
            ログイン
            <ArrowRightEndOnRectangleIcon className="h-5 w-5" />
          </button>
          <Link
            href="/dashboard"
            className="w-full py-2 px-4 border text-gray-400 border-gray-400 rounded-lg hover:bg-sky-100 hover:border-sky-300 transition-colors text-sm font-medium"
          >
            ゲスト ログイン
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

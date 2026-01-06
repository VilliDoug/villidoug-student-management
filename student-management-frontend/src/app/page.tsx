import Link from "next/link";

export default async function Page() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-6 bg-white dark:bg-black text-black dark:text-white">
      <div className="w-full max-w-sm space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          受講生管理システム
        </h1>
        <h2 className="text-2xl font-bold tracking-tight mb-10">Student Management System</h2>
        <div className="flex flex-col gap-4">
          {/* Main Login Button - Disabled */}
          <button
            disabled
            className="flex items-center justify-center gap-2 w-full py-4 px-4 bg-gray-200 dark:bg-gray-800 text-gray-500 rounded-lg opacity-50 cursor-not-allowed font-medium"
          >
            ログイン
            <span>→</span>
            </button>
            <Link href='/students' className="w-full py-2 px-4 border border-black dark:border-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors text-sm font-medium">
            ゲスト ログイン</Link>          
        </div>
      </div>
    </main>
  );
}

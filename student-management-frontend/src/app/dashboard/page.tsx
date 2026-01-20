"use client";

import Footer from "@/app/ui/components/footer";
import Header from "@/app/ui/components/header";
import {
  PencilSquareIcon,
  UserPlusIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  
  const handleEditRedirect = () => {
    const id = window.prompt("編集したい受講生のIDを入力してください:");
    if (id) {
      router.push(`/students/${id}`);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header userName="ゲスト" />

        <main className="flex-grow p-8 max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 受講生リスト */}
            <Link
              href="/students"
              className="group p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:bg-sky-100 hover:border-sky-300 transition-all text-center"
            >
              <UsersIcon className="h-12 w-12 mx-auto text-sky-500 mb-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-xl font-bold text-gray-700">受講生一覧</h2>
              <p className="text-gray-400 text-sm mt-2">受講生を確認・検索</p>
            </Link>

            {/* 入力フォーム */}
            <Link
              href="/students/register"
              className="group p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:bg-green-100 hover:border-green-300 transition-all text-center"
            >
              <UserPlusIcon className="h-12 w-12 mx-auto text-green-500 mb-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-xl font-bold text-gray-700">新規登録</h2>
              <p className="text-gray-400 text-sm mt-2">新規受講生を登録</p>
            </Link>

            {/* 編集プロンプト */}
            <button
              onClick={handleEditRedirect}
              className="group p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:bg-amber-100 hover:border-amber-300 transition-all text-center cursor-pointer"
            >
              <PencilSquareIcon className="h-12 w-12 mx-auto text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-xl font-bold text-gray-700">受講生編集</h2>
              <p className="text-gray-400 text-sm mt-2">
                IDを指定して情報を編集
              </p>
            </button>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

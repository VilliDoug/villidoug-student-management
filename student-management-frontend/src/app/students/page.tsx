import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StudentsTable from "@/components/StudentsTable";
import { StudentDetail } from "@/types/student";
import Search from "@/components/Search";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default async function StudentsPage({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string }>;
}) {
    const { query } = await searchParams;
    const apiUrl = query ? `${process.env.NEXT_PUBLIC_API_URL}/students?name=${query}` :
    `${process.env.NEXT_PUBLIC_API_URL}/students`;

    const response = await fetch(apiUrl, {
        cache: 'no-store' });

    const studentsData: StudentDetail[] = await response.json();

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header userName="ゲスト" />
            <main className="p-8 flex-grow">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-xl px-1 font-bold">受講生一覧</h1>
                    <Search placeholder="氏名を入力"/>
                </div>
                
                <StudentsTable key={query} students={studentsData} /> 
                <div className="my-4 flex justify-end">
                    <Link href="/dashboard" className="inline-flex px-4 py-1.5 border rounded-md items-center gap-2 text-sm text-gray-500 hover:bg-sky-600 hover:text-white transition-all group">
        <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        メインメニュー
        </Link> 
                </div>
                                  
            </main>            
             <Footer/>
        </div>
       
    );
}
    

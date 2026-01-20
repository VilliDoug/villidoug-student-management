import Footer from "@/app/ui/components/footer";
import Header from "@/app/ui/components/header";
import StudentsTable from "@/app/ui/students/table";
import { StudentDetail } from "@/app/lib/definitions";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default async function StudentsPage({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const params = await searchParams;
  const query = params?.query || "";
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1'
  const apiUrl = query
    ? `${baseUrl}/students?name=${query}`
    : `${baseUrl}/students`;  

  const response = await fetch(apiUrl, {
    cache: "no-store",
  });

  const studentsData: StudentDetail[] = await response.json();
  const safeStudents = Array.isArray(studentsData) ? studentsData: [];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header userName="ゲスト" />
      <main className="p-8 flex-grow">
     
        <StudentsTable key={query} students={safeStudents} />
        <div className="my-4 flex justify-end">
          <Link
            href="/dashboard"
            className="inline-flex px-4 py-1.5 border rounded-md items-center gap-2 text-sm text-gray-500 hover:bg-sky-600 hover:text-white transition-all group"
          >
            <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            メインメニュー
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
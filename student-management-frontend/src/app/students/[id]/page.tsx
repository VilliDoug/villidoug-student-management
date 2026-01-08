import Header from "@/components/Header";
import StudentCard from "@/components/StudentCard";
import { StudentDetail } from "@/types/student";

export default async function StudentIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/students/${id}`, {
        cache: 'no-store'
});
 if (!response.ok) return <div>受講生見つかりませんでした</div>
  
 const data: StudentDetail = await response.json();

 return (
    <div className="min-h-screen bg-gray-50 text-black">
        <Header userName="ゲスト" />
        <main className="p-8 flex justify-center">
            <StudentCard studentsData={data} />
        </main>
    </div>
 )

}
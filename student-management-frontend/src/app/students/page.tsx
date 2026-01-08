import Header from "@/components/Header";
import StudentsTable from "@/components/StudentsTable";
import Table from "@/components/StudentsTable";
import { StudentDetail } from "@/types/student";

export default async function StudentsPage() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/students`, {
        cache: 'no-store' });
    const studentsData: StudentDetail[] = await response.json();

    return (
        <div className="min-h-screen bg-gray-50">
            <Header userName="ゲスト" />
            <div className="p-8">
                <h1 className="text-2xl font-bold mb-6">受講生一覧</h1>
                <StudentsTable students={studentsData} />                    
            </div>
        </div>
       
    );
}
    

import Footer from "@/components/Footer";
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
    <div className="min-h-screen flex flex-col bg-gray-50 text-black">
        <Header userName="ゲスト" />
        <main className="flex flex-grow justify-center">
            <StudentCard studentsData={data} />
        </main>
        <Footer />
    </div>

    // <div className="min-h-screen flex flex-col bg-gray-50">
    //             <Header userName="ゲスト" />
    //             <main className="p-8 flex-grow">
    //                 <h1 className="text-2xl font-bold mb-6">受講生一覧</h1>
    //                 <StudentsTable students={studentsData} />                    
    //             </main>            
    //              <Footer/>
    //         </div>
           
 )

}
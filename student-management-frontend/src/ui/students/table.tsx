import { Student } from "@/types/student";
import { nunito } from "@/ui/fonts";


export default async function StudentsTable({ students }: {students: Student[]}) {
    return (
        <div className="w-full">
            <h1 className={`${nunito.className} mb-8 text-xl md:text-2xl`}>受講生 一覧</h1>
            
        </div>
    )
    
}
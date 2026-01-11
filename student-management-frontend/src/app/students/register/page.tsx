import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StudentForm from "@/components/StudentForm";


export default function RegisterPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header userName="ゲスト" />
            <main className="flex-grow p-8 flex items-center justify-center">
                <StudentForm />
            </main>
            <Footer />
        </div>
    )
}
import Footer from "@/app/ui/components/footer";
import Header from "@/app/ui/components/header";
import StudentForm from "@/app/ui/students/form";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header userName="ゲスト" />
      <main className="flex-grow p-8 flex items-center justify-center">
        <StudentForm />
      </main>
      <Footer />
    </div>
  );
}

import Footer from "@/app/ui/components/footer";
import Header from "@/app/ui/components/header";
import StudentForm from "@/app/ui/students/form";

export default async function EditPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/students/${id}`
  );
  const studentData = await response.json();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header userName="ゲスト" />
      <main className="flex-grow p-8 items-center justify-center">
        <StudentForm initialData={studentData} isEdit={true} />
      </main>
      <Footer />
    </div>
  );
}

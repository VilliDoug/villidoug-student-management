import Footer from "@/app/ui/components/footer";
import Header from "@/app/ui/components/header";
import StudentCard from "@/app/ui/students/card";
import { StudentDetail } from "@/app/lib/definitions";

export default async function StudentIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/students/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) return <div>受講生見つかりませんでした</div>;

  const data: StudentDetail = await response.json();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-black">
      <Header userName="ゲスト" />
      <main className="flex flex-grow justify-center">
        <StudentCard studentsData={data} />
      </main>
      <Footer />
    </div>
  );
}

import { StudentDetail } from "@/app/lib/definitions";
import { ArrowLeftIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function StudentCard({
  studentsData,
}: {
  studentsData: StudentDetail;
}) {
  const { student, courseDetailList } = studentsData;

  return (
    <div className="bg-gray-50 text-black">
      <main className="max-w-5xl mx-auto">
        {/* Back button */}
        <div className="my-4">
          <Link
            href="/students"
            className="inline-flex px-4 py-1.5 border rounded-lg items-center gap-2 text-sm text-gray-500 hover:bg-sky-600 hover:text-white transition-all group"
          >
            <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            受講生一覧に戻る
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <div className="bg-sky-900 flex justify-between items-center text-white p-6 border-b">
            {/* Left - ID - Name */}
            <div>
              <h1 className="text-3xl font-bold">
                {student.id} - {student.name}
              </h1>
              <p className="text-gray-400">{student.kanaName}</p>
            </div>
            {/* Right - profile icon */}
            <div className="flex-shrink-0">
              <UserCircleIcon className="h-20 w-20 text-gray-500 bg-white/10 rounded-full p-1" />
            </div>
          </div>
          {/* Middle Section - Student information */}
          <div className="p-6 grid grid-cols-2 divide-x divide-gray-200 border-b border-gray-100">
            {/* Left col */}
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs text-gray-400 font-bold mb-1">
                  メールアドレス
                </label>
                <p className="text-lg">{student.emailAddress}</p>
              </div>
              <div>
                <label className="block text-xs text-gray-400 font-bold mb-1">
                  住所
                </label>
                <p className="text-lg">{student.residence}</p>
              </div>
            </div>
            {/* Right col */}
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs text-gray-400 font-bold mb-1">
                  年齢 ・ 性別
                </label>
                <p className="text-lg">
                  {student.age} ・ {student.gender}
                </p>
              </div>
              <div>
                <label className="block text-xs text-gray-400 font-bold mb-1">
                  ニックネーム
                </label>
                <p className="text-lg">{student.nickname}</p>
              </div>
            </div>
          </div>
          {/* Course Info cards */}
          <div className="p-6 bg-sky-50">
            <h3 className="text-sm font-bold text-gray-400 mb-4">コース詳細</h3>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {courseDetailList?.map((detail, index) => (
                <div
                  key={index}
                  className="min-w-[250px] bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                >
                  <p className="font-bold text-sky-600 mb-2">
                    {detail.course.courseName}
                  </p>
                  <div className="text-sm space-y-1 text-gray-600">
                    <p>
                      申込状況:{" "}
                      <span className="font-medium text-black">
                        {detail.applicationStatus.applicationStatus}
                      </span>
                    </p>
                    <p>受講開始日: {detail.course.courseStartAt}</p>
                    <p>受講終了日: {detail.course.courseEndAt}</p>
                  </div>
                </div>
              ))}
              {courseDetailList.length === 0 && (
                <p className="text-gray-400">登録済みのコースはありません。</p>
              )}
            </div>
          </div>
          <div className="flex justify-end items-center p-6 bg-sky-100">
            <Link
              href={`/students/${student.id}/edit`}
              className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-all flex items-center gap-2"
            >
              <PencilSquareIcon className="h-4 w-4" />
              編集
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

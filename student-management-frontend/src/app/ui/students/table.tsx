import { StudentDetail } from "@/app/lib/definitions";
import Link from "next/link";

export default async function StudentsTable({
  students,
}: {
  students: StudentDetail[];
}) {
  const safeStudents = Array.isArray(students) ? students : [];

  return (
    <div className=" w-full max-h-[600px] overflow-y-auto shadow-sm rounded-md border border-gray-200">
      <table className="w-full text-left border-separate border-spacing-0 table-auto">
        <thead>
          <tr className="text-sm font-semibold text-gray-700">
            <th
              scope="col"
              className="sticky top-0 z-10 bg-sky-200 px-4 py-3 border-b border-gray-200"
            >
              ID
            </th>
            <th
              scope="col"
              className="sticky top-0 z-10 bg-sky-200 px-4 py-3 border-b border-gray-200"
            >
              氏名
            </th>
            <th
              scope="col"
              className="sticky top-0 z-10 bg-sky-200 px-4 py-3 border-b border-gray-200"
            >
              カナ名
            </th>
            <th
              scope="col"
              className="sticky top-0 z-10 bg-sky-200 px-4 py-3 border-b border-gray-200"
            >
              ニックネーム
            </th>

            <th
              scope="col"
              className="sticky top-0 z-10 bg-sky-200 px-4 py-3 border-b border-gray-200"
            >
              メールアドレス
            </th>
            <th
              scope="col"
              className="sticky top-0 z-10 bg-sky-200 px-4 py-3 border-b border-gray-200"
            >
              住所
            </th>
            <th
              scope="col"
              className="sticky top-0 z-10 bg-sky-200 px-4 py-3 border-b border-gray-200"
            >
              年齢
            </th>
            <th
              scope="col"
              className="sticky top-0 z-10 bg-sky-200 px-4 py-3 border-b border-gray-200"
            >
              性別
            </th>

            <th
              scope="col"
              className="sticky top-0 z-10 text-center bg-sky-200 px-4 py-3 border-b border-gray-200"
            >
              詳細
            </th>
          </tr>
        </thead>
        <tbody>
          {safeStudents?.filter((detail) => detail?.student && !detail.student.wasDeleted).map((detail) => (
              <tr
                key={detail.student.id}
                className="bg-white even:bg-sky-50 hover:bg-sky-100 transition-colors"
              >
                <td className="px-4 py-3 text-sm border-b border-gray-100">
                  {detail.student.id}
                </td>
                <td className="px-4 py-3 text-sm border-b border-gray-100">
                  {detail.student.name}
                </td>

                <td className="px-4 py-3 text-sm border-b border-gray-100">
                  {detail.student.kanaName}
                </td>
                <td className="px-4 py-3 text-sm border-b border-gray-100">
                  {detail.student.nickname}
                </td>

                <td className="px-4 py-3 text-sm border-b border-gray-100">
                  {detail.student.emailAddress}
                </td>
                <td className="px-4 py-3 text-sm border-b border-gray-100">
                  {detail.student.residence}
                </td>
                <td className="px-4 py-3 text-sm border-b border-gray-100">
                  {detail.student.age}
                </td>
                <td className="px-4 py-3 text-sm border-b border-gray-100">
                  {detail.student.gender}
                </td>

                <td className="px-4 py-3 text-sm text-center border-b border-gray-100">
                  <Link
                    href={`/students/${detail.student.id}`}
                    className="inline-block px-4 py-1.5 border border-skye-600 text-sky-600 rounded-md text-xs font-bold hover:bg-sky-600 hover:text-white transition-all active:scale-95"
                  >
                    詳細一覧
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {safeStudents.length === 0 && (
        <div className="p-20 text-center text-gray-400 bg-white">
          受講生データがありません。
        </div>
      )}
    </div>
  );
}

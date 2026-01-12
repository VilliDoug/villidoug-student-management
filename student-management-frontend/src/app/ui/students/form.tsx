"use client";

import {
  CourseDetail,
  STATUSES,
  Student,
  StudentDetail,
} from "@/app/lib/definitions";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface StudentFormProps {
  initialData?: StudentDetail;
  isEdit?: boolean;
}

export default function StudentForm({
  initialData,
  isEdit = false,
}: StudentFormProps) {
  const router = useRouter();
  const [studentInfo, setStudentInfo] = useState<Student>(
    initialData?.student || {
      name: "",
      kanaName: "",
      nickname: "",
      emailAddress: "",
      residence: "",
      age: 18,
      gender: "",
      remark: initialData?.student?.remark ?? "",
      wasDeleted: false,
    }
  );

  const [courseDetails, setCourseDetails] = useState<CourseDetail[]>(
    initialData?.courseDetailList || [
      {
        course: {
          courseName: "",
          courseStartAt: "",
          courseEndAt: "",
        },
        applicationStatus: {
          applicationStatus: "仮申込",
        },
      },
    ]
  );

  const addCourse = () => {
    setCourseDetails([
      ...courseDetails,
      {
        course: {
          courseName: "",
          courseStartAt: "",
          courseEndAt: "",
        },
        applicationStatus: {
          applicationStatus: "仮申込",
        },
      },
    ]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload: StudentDetail = {
      student: {
        ...studentInfo,
        age: Number(studentInfo.age),
      },
      courseDetailList: courseDetails.map((item: CourseDetail) => ({
        course: {
          id: item.course.id || undefined,
          studentId: studentInfo.id,
          courseName: item.course.courseName,
          courseStartAt: item.course.courseStartAt,
          courseEndAt: item.course.courseEndAt || null,
        },
        applicationStatus: {
          id: item.applicationStatus?.id || undefined,
          courseId: item.course?.id || undefined,
          applicationStatus: item.applicationStatus.applicationStatus,
        },
      })),
    };

    const method = isEdit ? "PUT" : "POST";
    const url = isEdit
      ? `${process.env.NEXT_PUBLIC_API_URL}/students/${initialData?.student.id}`
      : `${process.env.NEXT_PUBLIC_API_URL}/students`;

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        router.push(
          isEdit ? `/students/${initialData?.student.id}` : "/students"
        );
        router.refresh();
      }
    } catch (error) {
      console.error("登録できませんでした:", error);
    }
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState("");

  const handleDeleteToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setIsDeleteModalOpen(true);
    } else {
      setStudentInfo({ ...studentInfo, wasDeleted: false });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 rounded-xl shadow-sm border border-gray-200 max-w-2xl mx-auto"
    >
      <h3 className="text-lg font-bold mb-6 text-gray-800 border-b pb-4">
        {isEdit ? "受講生情報の編集" : "新規受講生登録"}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Fields */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">氏名</label>
          <input
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-200 outline-none"
            value={studentInfo.name}
            placeholder="例: Taro Nakamura / 中村太郎"
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, name: e.target.value })
            }
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">カナ名</label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-200 outline-none"
            value={studentInfo.kanaName}
            placeholder="例: タロウ"
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, kanaName: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            ニックネーム
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-200 outline-none"
            value={studentInfo.nickname}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, nickname: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            メールアドレス
          </label>
          <input
            type="email"
            required
            placeholder="例: mail@example.com"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-200 outline-none"
            value={studentInfo.emailAddress}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, emailAddress: e.target.value })
            }
          />
        </div>

        {/* Demographics */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">年齢</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-200 outline-none"
            value={studentInfo.age}
            min={18}
            max={100}
            onChange={(e) =>
              setStudentInfo({
                ...studentInfo,
                age: e.target.value === "" ? 0 : Number(e.target.value),
              })
            }
          />
          <p className="text-[12px] text-gray-400">※18歳から100歳まで</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">性別</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md bg-white outline-none"
            value={studentInfo.gender}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, gender: e.target.value })
            }
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer Not to Say">Prefer Not to Say</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700">住所</label>
          <input
            className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-sky-200 outline-none"
            placeholder="例: 沖縄"
            value={studentInfo.residence}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, residence: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700">備考</label>
          <input
            className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-sky-200 outline-none"
            placeholder="例: 全国Tetrisチャンピオン"
            value={studentInfo.remark ?? ""}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, remark: e.target.value })
            }
          />
        </div>
      </div>

      {/* Course info */}
      <div className="pt-6 border-t border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-gray-800">コース申込情報</h3>
          <button
            type="button"
            onClick={() =>
              setCourseDetails([
                ...courseDetails,
                {
                  course: {
                    courseName: "",
                    courseStartAt: "",
                    courseEndAt: "",
                  },
                  applicationStatus: { applicationStatus: "仮申込" },
                },
              ])
            }
            className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
          >
            + 追加
          </button>
        </div>

        {courseDetails.map((detail, index) => (
          <div
            key={index}
            className="p-4 mb-6 border border-gray-300 rounded-lg bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Course Name */}
            <div className="flex flex-col gap-1 md:col-span-2">
              <label className="text-sm font-semibold text-gray-600">
                コース ({index + 1})
              </label>
              <select
                className="border border-gray-300 p-2 rounded bg-white"
                value={detail.course.courseName}
                onChange={(e) => {
                  const updated = [...courseDetails];
                  updated[index].course.courseName = e.target.value;
                  setCourseDetails(updated);
                }}
              >
                <option value="Java Course">Java Course</option>
                <option value="AWS Course">AWS Course</option>
                <option value="Python Course">Python Course</option>
                <option value="Web Design Course">Web Design Course</option>
              </select>
            </div>

            {/* Start Date */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-600">
                受講開始日
              </label>
              <input
                type="date"
                className="border border-gray-300 p-2 rounded"
                value={detail.course.courseStartAt}
                onChange={(e) => {
                  const updated = [...courseDetails];
                  updated[index].course.courseStartAt = e.target.value;
                  setCourseDetails(updated);
                }}
              />
            </div>

            {/* End Date */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-600">
                受講終了日
              </label>
              <input
                type="date"
                className="border border-gray-300 p-2 rounded"
                value={detail.course.courseEndAt}
                onChange={(e) => {
                  const updated = [...courseDetails];
                  updated[index].course.courseEndAt = e.target.value;
                  setCourseDetails(updated);
                }}
              />
            </div>

            {/* Status */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-600">
                ステータス
              </label>
              <select
                className="border border-gray-300 p-2 rounded bg-white"
                value={detail.applicationStatus.applicationStatus}
                onChange={(e) => {
                  const updated = [...courseDetails];
                  updated[index].applicationStatus.applicationStatus = e.target
                    .value as any;
                  setCourseDetails(updated);
                }}
              >
                {STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg maw-w-sm w-full">
            <h3 className="text-lg font-bold mb-4">本当に削除しますか？</h3>
            <p className="text-sm text-gray-600 mb-4">
              確認のため、下に「
              <span className="font-mono font-bold text-red-600">DELETE</span>
              」と入力してください。
            </p>

            <input
              type="text"
              placeholder="DELETE"
              value={deleteConfirmText}
              onChange={(e) => setDeleteConfirmText(e.target.value)}
              className="border w-full p-2 mb-4 rounded"
            />

            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 text-gray-600 border rounded"
                onClick={() => {
                  setIsDeleteModalOpen(false);
                  setDeleteConfirmText("");
                }}
              >
                削除を確定する
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 flex gap-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex-1 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-red-400 transition-colors cursor-pointer"
        >
          キャンセル
        </button>
        <button
          type="submit"
          className="flex-1 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-colors font-bold cursor-pointer"
        >
          {isEdit ? "更新する" : "登録する"}
        </button>
      </div>
    </form>
  );
}

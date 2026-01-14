"use client";

import { useStudentForm } from "@/app/hooks/useStudentForm";
import { GENDERS, StudentDetail } from "@/app/lib/definitions";
import InputField from "../components/input-field";
import CourseCard from "../components/course-card";
import FormSelect from "../components/form-select";
import { useRouter } from "next/navigation";

interface StudentFormProps {
  initialData?: StudentDetail;
  isEdit: boolean;
}

export default function StudentForm({ initialData, isEdit }: StudentFormProps) {
  const {
        studentInfo,
        courseDetails,
        isDeleteModalOpen,
        deleteConfirmText,
        setDeleteConfirmText,
        setIsDeleteModalOpen,
        handleDeleteToggle,
        updateCourse,
        handleLogicalDelete,
        handleRestore,
        submitForm,
        updateStudentField,
        addCourse, 
      } = useStudentForm(initialData, isEdit);

      const router = useRouter();
      


  return (
    <form
      onSubmit={submitForm}
      className="p-8 rounded-xl shadow-sm border border-gray-200 max-w-2xl mx-auto"
    >      
      <h3 className="text-lg font-bold mb-6 text-gray-800 border-b pb-4">
        {isEdit ? "受講生情報の編集" : "新規受講生登録"}
      </h3>
      {studentInfo.wasDeleted && (
          <div className="bg-amber-50 border-amber-200 p-4 mb-6 rounded-lg flex justify-between items-center">
            <div>
              <p className="text-amber-800 font-bold">本受講生は現在アーカイブされています。</p>
            </div>
            <button type="button" onClick={handleRestore} className="w-20 px-4 py-2 bg-amber-600 text-white font-bold rounded-md hover:bg-amber-700 transition-colors">
              復元
            </button>
          </div>
        )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Name Fields */}
        <InputField
        label="氏名"
        value={studentInfo.name}
        placeholder="例: 中村太郎"
        onChange={(val) => updateStudentField("name", val)} />

        <InputField
        label="カナ名"
        value={studentInfo.kanaName}
        placeholder="例: ナカムラ タロウ"
        onChange={(val) => updateStudentField("kanaName", val)} />

        <InputField
        label="ニックネーム"
        value={studentInfo.nickname}
        placeholder="例: タロウ"
        onChange={(val) => updateStudentField("nickname", val)} />

        <InputField
        label="メールアドレス"
        value={studentInfo.emailAddress}
        placeholder="例: mail@example.com"
        onChange={(val) => updateStudentField("emailAddress", val)} />

        <InputField
        type="number"
        min={18}
        max={100}
        label="年齢"
        value={studentInfo.age}
        helperText="※18歳から100歳まで"
        onChange={(val) => updateStudentField("age", val)} />

        <FormSelect
        label="性別"
        value={studentInfo.gender}
        options={GENDERS}
        onChange={(val) => updateStudentField("gender", val)} />       

        <InputField
        label="住所"
        value={studentInfo.residence}
        placeholder="例: 沖縄"
        onChange={(val) => updateStudentField("residence", val)} />

        <InputField
        label="備考"
        value={studentInfo.remark}
        placeholder="例: 全国 Tetris チャンピオン"
        onChange={(val) => updateStudentField("remark", val)} />        
      </div>

      {/* Course info */}
      <div className="pt-6 border-t border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-gray-800">コース申込情報</h3>
          <button
            type="button"
            onClick={addCourse}
            className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
          >
            + コース追加
          </button>
        </div>

        {courseDetails.map((detail, index) => (
          <CourseCard
          key={index}
          index={index}
          detail={detail}
          onUpdate={updateCourse}
          />
        ))}         
      </div>

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
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
              type="button"
                className="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 border-gray-200 rounded transition-colors"
                onClick={() => {
                  setIsDeleteModalOpen(false);
                  setDeleteConfirmText("");
                }}
              >
                中止
              </button>
              <button
              type="button"
              disabled={deleteConfirmText !== "DELETE"}
                className={`px-4 py-2 text-white transition-colors rounded ${
                  deleteConfirmText === "DELETE"
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-red-300 cursor-not-allowed"
                }`}
                
                onClick={handleLogicalDelete}
                >
                削除
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 flex gap-4">
        {isEdit && (
  <button
    type="button"
    onClick={() => setIsDeleteModalOpen(true)}
    className="px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors"
  >
    削除
  </button>
)}
        <button
          type="button"
          onClick={() => router.back()}
          className="flex-1 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-red-400 hover:text-white transition-colors cursor-pointer"
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

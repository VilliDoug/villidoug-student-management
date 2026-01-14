import { useRouter } from "next/navigation";
import { CourseDetail, Student, StudentDetail } from "../lib/definitions";
import { useState } from "react";


export function useStudentForm(initialData: StudentDetail | undefined, isEdit: boolean) {
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

      const updateStudentField = (field: keyof Student, value: any) => {
        setStudentInfo((prev) => ({...prev, [field]: value }));
      };
    
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

      const updateCourse = (index: number, updatedDetail: CourseDetail) => {
        const newList = [...courseDetails];
        newList[index] = updatedDetail;
        setCourseDetails(newList);
      }
    
      const submitForm = async (e: React.FormEvent) => {
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
    
      const handleDeleteToggle = (e?: React.ChangeEvent<HTMLInputElement>) => {
        if (e) {
          if(e.target.checked) {
            setIsDeleteModalOpen(true);
          } else {
          setStudentInfo({ ...studentInfo, wasDeleted: false });
          }
        } else {
          setIsDeleteModalOpen(false);
          setDeleteConfirmText("");
        }
      };
    
      const handleLogicalDelete = async () => {
        const payload: StudentDetail = {
        student: {
          ...studentInfo,
          wasDeleted: true,
          age: Number(studentInfo.age),
        },
        courseDetailList: courseDetails.map((item: CourseDetail) => ({
          course: {
            ...item.course,
            studentId: studentInfo.id,
            courseEndAt: item.course.courseEndAt || null,
          },
          applicationStatus: {
            ...item.applicationStatus,
          },
        })),
      };
    
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1';
    
        try {
          const response = await fetch(`${baseUrl}/students/${initialData?.student.id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
          });
    
          if(response.ok) {
            setIsDeleteModalOpen(false);
            router.push("/students");
            router.refresh();
          } else {
            alert("削除に失敗しました。")
          }
        } catch (error) {
          console.error("Delete error:", error);
          alert("通信エラーが発生しました。");
        }
      };
    
      const handleRestore = async () => {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1';
    
        const payload: StudentDetail = {
        student: {
          ...studentInfo,
          wasDeleted: false,
          age: Number(studentInfo.age),
        },
        courseDetailList: courseDetails.map((item: CourseDetail) => ({
          course: {
            ...item.course,
            studentId: studentInfo.id,
            courseEndAt: item.course.courseEndAt || null,
          },
          applicationStatus: {
            ...item.applicationStatus,
          },
        })),
      };
      try {
        const response = await fetch(`${baseUrl}/students/${initialData?.student.id}`, {
          method: 'PUT',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
    
        if (response.ok) {
          // Update local state so the banner disappears immediately
          setStudentInfo({ ...studentInfo, wasDeleted: false });
          alert("受講生を復元しました。");
          router.refresh(); 
        }
      } catch (error) {
        console.error("Restore error:", error);
      }
    };

    return {
        studentInfo,
        courseDetails,
        isDeleteModalOpen,
        deleteConfirmText,
        setDeleteConfirmText,
        setIsDeleteModalOpen,
        handleDeleteToggle,
        handleLogicalDelete,
        handleRestore,
        updateCourse,
        submitForm,
        updateStudentField,
        addCourse,
    }
}
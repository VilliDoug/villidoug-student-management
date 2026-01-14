import { CourseDetail, STATUSES } from "@/app/lib/definitions";
import FormSelect from "./form-select";
import InputField from "./input-field";

interface CourseProps {
    detail: CourseDetail;
    index: number;
    onUpdate: (index: number, updateDetail: CourseDetail) => void;
}

export default function CourseCard({ detail, index, onUpdate }: CourseProps) {
    const handleChange = (path: 'course' | 'applicationStatus', field: string, value: any) => {
        const updated = { ...detail };
        (updated[path] as any)[field] = value;
        onUpdate(index, updated);
    }

    return (
        <div className="p-4 mb-6 border border-gray-300 rounded-lg bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:col-span-2">
        <FormSelect
          label={`コース (${index + 1})`}
          value={detail.course.courseName}
          options={["Java Course", "AWS Course", "Python Course", "Web Design Course"]}
          onChange={(val) => handleChange('course', 'courseName', val)}
        />
      </div>

      <InputField
        label="受講開始日"
        type="date"
        value={detail.course.courseStartAt}
        onChange={(val) => handleChange('course', 'courseStartAt', val)}
      />

      <InputField
        label="受講終了日"
        type="date"
        value={detail.course.courseEndAt ?? ""}
        onChange={(val) => handleChange('course', 'courseEndAt', val)}
      />

      <FormSelect
        label="ステータス"
        value={detail.applicationStatus.applicationStatus}
        options={[...STATUSES]}
        onChange={(val) => handleChange('applicationStatus', 'applicationStatus', val)}
      />
    </div>
  );
    
}
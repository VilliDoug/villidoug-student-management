

export interface Student {
    id?: string;
    name: string;
    kanaName: string;
    nickname: string;
    emailAddress: string;
    residence: string;
    age: number;
    gender: string;
    remark: string;
    wasDeleted: boolean;
}

export interface Course {
    id?: string;
    studentId?: string;
    courseName: string;
    courseStartAt: string;
    courseEndAt: string;
}

export interface ApplicationStatus {
    id?: string;
    courseId?: string;
    applicationStatus: '仮申込' | '本申込' | '受講中' | '受講終了';
}

export interface CourseDetail {
    course: Course;
    applicationStatus: ApplicationStatus;
}

export interface StudentDetail {
    student: Student;
    courseDetails: CourseDetail[];
}

export interface SearchFilters {
    name?: string;
    emailAddress?: string;
    gender?: string;
    courseName?: string;
    applicationStatus?: string;
}

export type Gender = '男性' | '女性' | 'その他';
export type Status = '仮申込' | '本申込' | '受講中' | '受講終了';

export const GENDERS: Gender[] = ['男性', '女性', 'その他'];
export const STATUSES: Status[] = ['仮申込', '本申込', '受講中', '受講終了'];
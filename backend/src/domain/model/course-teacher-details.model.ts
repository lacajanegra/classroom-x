import { CourseModel } from './course.model';
import { StudentDetailModel } from './student-detail.model';
import { TeacherModel } from './teacher.model';

export interface CourseTeacherDetailsModel {
    id: string
    course: CourseModel
    teacher: TeacherModel
    students: StudentDetailModel[]
    total: number
}
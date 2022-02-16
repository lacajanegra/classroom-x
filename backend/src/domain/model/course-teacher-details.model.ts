import { CourseModel } from './course.model';
import { StudentDetailsModel } from './student-details.model';
import { TeacherModel } from './teacher.model';

export interface CourseTeacherDetailsModel {
    id: string
    course: CourseModel
    teacher: TeacherModel
    students: StudentDetailsModel[]
    total: number
}
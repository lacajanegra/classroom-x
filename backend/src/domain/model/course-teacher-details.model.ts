import { CourseModel } from './course.model';
import { CourseStudentDetailsModel } from './course-student-details.model';
import { TeacherModel } from './teacher.model';

export interface CourseTeacherDetailsModel {
    id: string
    course: CourseModel
    teacher: TeacherModel
    students: CourseStudentDetailsModel[]
}
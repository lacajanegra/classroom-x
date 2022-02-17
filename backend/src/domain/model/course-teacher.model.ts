import { CourseModel } from './course.model';
import { TeacherModel } from './teacher.model';

export interface CourseTeacherModel {
    id: string
    course: CourseModel
    teacher: TeacherModel
}
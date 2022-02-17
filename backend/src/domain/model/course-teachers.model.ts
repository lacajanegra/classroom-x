import { CourseModel } from './course.model';
import { CourseTeacherModel } from './course-teacher.model';

export interface CourseTeachersModel {
    course: CourseModel
    teachers: CourseTeacherModel[]
}
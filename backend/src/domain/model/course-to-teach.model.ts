import { CourseTeacherModel } from './course-teacher.model';
import { CourseModel } from './course.model';

export interface CourseToTeachModel {
    course: CourseModel
    teachers: CourseTeacherModel[]
}
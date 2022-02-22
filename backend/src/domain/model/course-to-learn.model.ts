import { CourseModel } from './course.model';
import { CourseTeacherModel } from './course-teacher.model';

export interface CourseToLearnModel {
    course: CourseModel
    teachers: CourseTeacherModel[]
}
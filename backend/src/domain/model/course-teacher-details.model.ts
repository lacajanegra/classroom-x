import { CourseModel } from './course.model';
import { TeacherModel } from './teacher.model';
import { CourseStudentModel } from 'src/domain/model/course-student.model';

export interface CourseTeacherDetailsModel {
    id: string
    course: CourseModel
    teacher: TeacherModel
    students: CourseStudentModel[]
}
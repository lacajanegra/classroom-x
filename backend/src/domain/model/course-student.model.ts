import { CourseModel } from './course.model';
import { StudentModel } from './student.model';
import { TeacherModel } from './teacher.model';

export interface CourseStudentModel {
    id: string
    course: CourseModel
    teacher: TeacherModel
    student: StudentModel
}
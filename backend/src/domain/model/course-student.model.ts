import { CourseModel } from './course.model';
import { StudentModel } from "./student.model";

export interface CourseStudentModel {
    id: string
    course: CourseModel
    student: StudentModel
    qualification: number
}
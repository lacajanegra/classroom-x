import { CourseModel } from "./course.model";
import { StudentModel } from "./student.model";
import { TeacherModel } from "./teacher.model";

export interface CourseStudentDetailsModel {
    id: string
    course: CourseModel
    teacher: TeacherModel
    student: StudentModel
    qualification: number
}
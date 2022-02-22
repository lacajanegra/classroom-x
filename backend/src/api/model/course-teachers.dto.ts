import { CourseTeacherForStudentDto } from "./course-teacher-for-student.dto";

export interface CourseTeachersDto {
    name: string
    teachers: CourseTeacherForStudentDto[]
}
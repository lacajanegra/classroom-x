import { CourseStudentDetailsDto } from './course-student-details.dto';

export interface CourseTeacherDetailsDto {
    id: string
    name: string
    students: CourseStudentDetailsDto[]
}
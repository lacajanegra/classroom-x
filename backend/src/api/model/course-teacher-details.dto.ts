import { CourseTeacherStudentDetailsDto } from './course-teacher-student-details.dto';

export interface CourseTeacherDetailsDto {
    id: string
    name: string
    students: CourseTeacherStudentDetailsDto[]
}
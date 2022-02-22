import { CourseTeacherDto } from 'src/api/model/course-teacher.dto';

export interface CourseToLearnDto {
    id: string
    name: string
    teachers: CourseTeacherDto[]
}
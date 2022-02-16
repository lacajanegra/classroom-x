import { CourseTeacherModel } from 'src/domain/model/course-teacher.model';

export abstract class GetCoursesTeacherService {
    abstract execute(userId: string): Promise<CourseTeacherModel[]>
}
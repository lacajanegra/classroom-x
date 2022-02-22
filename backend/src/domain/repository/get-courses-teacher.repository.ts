import { CourseTeacherModel } from '../model/course-teacher.model';

export abstract class GetCoursesTeacherRepository {
    abstract getCourses(userId: string): Promise<CourseTeacherModel[]>
}
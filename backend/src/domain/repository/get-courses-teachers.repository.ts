import { CourseTeachersModel } from '../model/course-teachers.model';

export abstract class GetCoursesTeachersRepository {
    abstract getCourses(userId: string): Promise<CourseTeachersModel[]>
}
import { CourseTeachersModel } from '../model/course-teachers.model';

export abstract class GetCoursesTeachersRepository {
    abstract getCourses(): Promise<CourseTeachersModel[]>
}
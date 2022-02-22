import { CourseToTeachModel } from '../model/course-to-teach.model';

export abstract class GetCoursesToTeachRepository {
    abstract getCourses(): Promise<CourseToTeachModel[]>
}
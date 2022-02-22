import { CourseToLearnModel } from '../model/course-to-learn.model';

export abstract class GetCoursesToLearnRepository {
    abstract getCourses(): Promise<CourseToLearnModel[]>
}
import { CourseModel } from 'src/domain/model/course.model';

export abstract class GetCourseRepository {
    abstract getCourse(id: string, userId: string): Promise<CourseModel>
}
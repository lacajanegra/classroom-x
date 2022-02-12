import { CourseModel } from 'src/domain/model/course.model';
import { CourseRequestModel } from '../model/course-request.model';

export abstract class AddCourseRepository {
    abstract addCourse(request: CourseRequestModel, userId: string): Promise<CourseModel>
}
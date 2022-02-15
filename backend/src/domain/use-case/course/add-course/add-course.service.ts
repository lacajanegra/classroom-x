import { CourseModel } from 'src/domain/model/course.model';
import { CourseRequestModel } from 'src/domain/model/course-request.model';

export abstract class AddCourseService {
    abstract execute(request: CourseRequestModel): Promise<CourseModel>
}
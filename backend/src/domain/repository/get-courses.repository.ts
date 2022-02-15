import { CourseModel } from 'src/domain/model/course.model';
import { CoursesFilterRequestModel } from 'src/domain/model/courses-filter-request.model';

export abstract class GetCoursesRepository {
    abstract getCourses(filter: CoursesFilterRequestModel): Promise<CourseModel[]>
}
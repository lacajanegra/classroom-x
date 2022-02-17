import { CourseModel } from 'src/domain/model/course.model';
import { CoursesFilterModel } from '../model/courses-filter.model';

export abstract class GetCoursesRepository {
    abstract getCourses(filter: CoursesFilterModel): Promise<CourseModel[]>
}
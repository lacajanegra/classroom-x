import { CourseModel } from "src/domain/model/course.model";
import { CoursesFilterModel } from "src/domain/model/courses-filter.model";

export abstract class GetCoursesService {
    abstract execute(filter: CoursesFilterModel): Promise<CourseModel[]>
}
import { CourseModel } from "src/domain/model/course.model";
import { CoursesFilterRequestModel } from "src/domain/model/courses-filter-request.model";

export abstract class GetCoursesService {
    abstract execute(filter : CoursesFilterRequestModel, userId: string): Promise<CourseModel[]>
}
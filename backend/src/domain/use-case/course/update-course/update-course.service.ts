import { CourseModel } from "src/domain/model/course.model";

export abstract class UpdateCourseService {
    abstract execute(id: string, name: string): Promise<CourseModel>
}
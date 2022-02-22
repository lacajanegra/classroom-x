import { CourseToTeachModel } from "src/domain/model/course-to-teach.model";

export abstract class GetCoursesToTeachService {
    abstract execute(userId: string): Promise<CourseToTeachModel[]>
}
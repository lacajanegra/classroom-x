import { CourseToLearnModel } from "src/domain/model/course-to-learn.model";

export abstract class GetCoursesToLearnService {
    abstract execute(userId: string): Promise<CourseToLearnModel[]>
}
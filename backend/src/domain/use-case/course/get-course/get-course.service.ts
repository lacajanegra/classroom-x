import { CourseModel } from 'src/domain/model/course.model';

export abstract class  GetCourseService {
    abstract execute(id: string): Promise<CourseModel>
}
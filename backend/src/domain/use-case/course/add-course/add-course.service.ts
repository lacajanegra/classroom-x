import { CourseModel } from 'src/domain/model/course.model';
import { CreateCourseModel } from 'src/domain/model/create-course.model';

export abstract class AddCourseService {
    abstract execute(request: CreateCourseModel): Promise<CourseModel>
}
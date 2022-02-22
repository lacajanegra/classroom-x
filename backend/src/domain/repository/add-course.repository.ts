import { CourseModel } from 'src/domain/model/course.model';
import { CreateCourseModel } from '../model/create-course.model';

export abstract class AddCourseRepository {
    abstract addCourse(request: CreateCourseModel): Promise<CourseModel>
}
import { CourseTeachersModel } from 'src/domain/model/course-teachers.model';

export abstract class GetCoursesTeachersService {
    abstract execute(): Promise<CourseTeachersModel[]>
}
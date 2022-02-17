import { CourseStudentModel } from 'src/domain/model/course-student.model';

export abstract class GetCoursesStudentService {
    abstract execute(userId: string): Promise<CourseStudentModel[]>
}
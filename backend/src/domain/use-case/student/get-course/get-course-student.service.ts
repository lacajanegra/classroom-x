import { CourseStudentModel } from 'src/domain/model/course-student.model';

export abstract class GetCourseStudentService {
    abstract execute(courseStudentId: string, userId: string): Promise<CourseStudentModel>
}
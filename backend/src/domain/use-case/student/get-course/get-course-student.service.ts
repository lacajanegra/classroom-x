import { CourseStudentDetailsModel } from 'src/domain/model/course-student-details.model';

export abstract class GetCourseStudentService {
    abstract execute(courseStudentId: string, userId: string): Promise<CourseStudentDetailsModel>
}
import { CourseStudentDetailsModel } from 'src/domain/model/course-student-details.model';

export abstract class GetCourseStudentService {
    abstract execute(courseTeacherId: string, userId: string): Promise<CourseStudentDetailsModel>
}
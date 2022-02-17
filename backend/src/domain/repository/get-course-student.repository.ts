import { CourseStudentDetailsModel } from '../model/course-student-details.model';

export abstract class GetCourseStudentRepository {
    abstract getCourse(courseStudentId: string, userId: string): Promise<CourseStudentDetailsModel>
}
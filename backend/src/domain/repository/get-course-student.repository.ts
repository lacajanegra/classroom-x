import { CourseStudentModel } from '../model/course-student.model';

export abstract class GetCourseStudentRepository {
    abstract getCourse(courseId: string, userId: string): Promise<CourseStudentModel>
}
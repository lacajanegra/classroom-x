import { CourseStudentModel } from 'src/domain/model/course-student.model';

export abstract class GetCourseStudentRepository {
    abstract getCourse(courseStudentId: string, userId: string): Promise<CourseStudentModel>
}
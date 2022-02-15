import { CourseStudentModel } from '../model/course-student.model';

export abstract class AddCourseStudentRepository {
    abstract addRelation(courseId: string, userId: string): Promise<CourseStudentModel>
}
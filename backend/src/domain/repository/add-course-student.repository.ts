import { CourseStudentModel } from '../model/course-student.model';

export abstract class AddCourseStudentRepository {
    abstract addRelation(courseTeacherId: string, userId: string): Promise<CourseStudentModel>
}
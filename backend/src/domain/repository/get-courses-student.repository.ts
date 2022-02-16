import { CourseStudentModel } from '../model/course-student.model';

export abstract class GetCoursesStudentRepository {
    abstract getCourses(userId: string): Promise<CourseStudentModel[]>
}
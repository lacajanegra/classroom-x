import { CourseStudentModel } from 'src/domain/model/course-student.model';

export abstract class AddCourseStudentService {
    abstract execute(courseTeacherId: string, userId: string): Promise<CourseStudentModel>
}
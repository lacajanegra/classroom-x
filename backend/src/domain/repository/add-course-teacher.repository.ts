import { CourseTeacherModel } from '../model/course-teacher.model';

export abstract class AddCourseTeacherRepository {
    abstract addRelation(courseId: string, userId: string): Promise<CourseTeacherModel>
}
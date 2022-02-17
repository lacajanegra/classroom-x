import { CourseTeacherModel } from '../model/course-teacher.model';

export abstract class AddCourseTeacherRepository {
    abstract addRelation(courseTeacherId: string, userId: string): Promise<CourseTeacherModel>
}
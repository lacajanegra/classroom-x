import { CourseTeacherModel } from 'src/domain/model/course-teacher.model';

export abstract class AddCourseTeacherService {
    abstract execute(courseId: string, userId: string): Promise<CourseTeacherModel>
}
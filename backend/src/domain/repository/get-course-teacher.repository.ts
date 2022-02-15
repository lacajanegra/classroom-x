import { CourseTeacherDetailsModel } from '../model/course-teacher-details.model';

export abstract class GetCourseTeacherRepository {
    abstract getCourse(courseId: string, userId: string): Promise<CourseTeacherDetailsModel>
}
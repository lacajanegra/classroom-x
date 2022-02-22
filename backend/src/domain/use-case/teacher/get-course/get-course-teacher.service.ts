import { CourseTeacherDetailsModel } from 'src/domain/model/course-teacher-details.model';

export abstract class GetCourseTeacherService {
    abstract execute(courseTeacherId: string, userId: string): Promise<CourseTeacherDetailsModel>
}
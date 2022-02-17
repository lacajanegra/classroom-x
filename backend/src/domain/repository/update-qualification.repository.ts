import { CourseStudentDetailsModel } from '../model/course-student-details.model';
import { UpdateQualificationModel } from '../model/update-qualification.model';

export abstract class UpdateQualificationRepository {
    abstract updateQualification(request: UpdateQualificationModel, userId: string): Promise<CourseStudentDetailsModel>
}
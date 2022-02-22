import { UpdateQualificationModel } from '../model/update-qualification.model';
import { CourseStudentModel } from 'src/domain/model/course-student.model';

export abstract class UpdateQualificationRepository {
    abstract updateQualification(request: UpdateQualificationModel, userId: string): Promise<CourseStudentModel>
}
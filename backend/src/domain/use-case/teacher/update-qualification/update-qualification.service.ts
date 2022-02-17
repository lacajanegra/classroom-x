import { CourseStudentDetailsModel } from 'src/domain/model/course-student-details.model';
import { UpdateQualificationModel } from 'src/domain/model/update-qualification.model';

export abstract class UpdateQualificationService {
    abstract execute(request: UpdateQualificationModel, userId: string): Promise<CourseStudentDetailsModel>
}
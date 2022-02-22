import { UpdateQualificationModel } from 'src/domain/model/update-qualification.model';
import { CourseStudentModel } from 'src/domain/model/course-student.model';

export abstract class UpdateQualificationService {
    abstract execute(request: UpdateQualificationModel, userId: string): Promise<CourseStudentModel>
}
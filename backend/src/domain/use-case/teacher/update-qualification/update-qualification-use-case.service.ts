import { Injectable, NotFoundException } from '@nestjs/common';

import { CourseStudentDetailsModel } from 'src/domain/model/course-student-details.model';
import { GetCourseTeacherService } from '../get-course/get-course-teacher.service';
import { UpdateQualificationModel } from 'src/domain/model/update-qualification.model';
import { UpdateQualificationRepository } from 'src/domain/repository/update-qualification.repository';
import { UpdateQualificationService } from './update-qualification.service';

@Injectable()
export class UpdateQualificationUseCaseService implements UpdateQualificationService {

    constructor(
        private readonly getCourseTeacherService: GetCourseTeacherService,
        private readonly updateQualificationRepository: UpdateQualificationRepository
    ) { }

    async execute(request: UpdateQualificationModel, userId: string): Promise<CourseStudentDetailsModel> {
        const { courseTeacherId, courseStudentId } = request
        const { students } = await this.getCourseTeacherService.execute(courseTeacherId, userId)
        const found: CourseStudentDetailsModel = students.find(relation => relation.id === courseStudentId)

        if (!found) {
            throw new NotFoundException(`The courseStudentId "${courseStudentId}" not found."`);
        }

        const studetId = found.student.id
        return await this.updateQualificationRepository.updateQualification(request, studetId)
    }
}

import { AddCourseTeacherRepository } from '../../../repository/add-course-teacher.repository';
import { AddCourseTeacherService } from './add-course-teacher.service';
import { CourseTeacherModel } from 'src/domain/model/course-teacher.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddCourseTeacherUseCaseService implements AddCourseTeacherService {

    constructor(private readonly addCourseTeacherRepository: AddCourseTeacherRepository) { }

    async execute(courseId: string, userId: string): Promise<CourseTeacherModel> {
        return await this.addCourseTeacherRepository.addRelation(courseId, userId)
    }
}

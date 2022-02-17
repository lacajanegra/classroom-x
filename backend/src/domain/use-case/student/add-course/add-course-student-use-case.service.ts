import { AddCourseStudentRepository } from '../../../repository/add-course-student.repository';
import { AddCourseStudentService } from './add-course-student.service';
import { CourseStudentModel } from 'src/domain/model/course-student.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddCourseStudentUseCaseService implements AddCourseStudentService {

    constructor(private readonly addCourseStudentRepository: AddCourseStudentRepository) { }

    async execute(courseTeacherId: string, userId: string): Promise<CourseStudentModel> {
        return await this.addCourseStudentRepository.addRelation(courseTeacherId, userId)
    }
}

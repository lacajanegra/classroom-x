import { Injectable, NotFoundException } from '@nestjs/common';

import { GetCourseStudentRepository } from 'src/domain/repository/get-course-student.repository';
import { GetCourseStudentService } from './get-course-student.service';
import { CourseStudentModel } from 'src/domain/model/course-student.model';

@Injectable()
export class GetCourseStudentUseCaseService implements GetCourseStudentService {

    constructor(private readonly getCourseStudentRepository: GetCourseStudentRepository) { }

    async execute(courseStudentId: string, userId: string): Promise<CourseStudentModel> {
        const found = await this.getCourseStudentRepository.getCourse(courseStudentId, userId)

        if (!found) {
            throw new NotFoundException(`The course student by id "${courseStudentId}" not found."`);
        }

        return found
    }

}

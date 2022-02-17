import { Injectable, NotFoundException } from '@nestjs/common';

import { CourseStudentDetailsModel } from 'src/domain/model/course-student-details.model';
import { GetCourseStudentRepository } from 'src/domain/repository/get-course-student.repository';
import { GetCourseStudentService } from './get-course-student.service';

@Injectable()
export class GetCourseStudentUseCaseService implements GetCourseStudentService {

    constructor(private readonly getCourseStudentRepository: GetCourseStudentRepository) { }

    async execute(courseStudentId: string, userId: string): Promise<CourseStudentDetailsModel> {
        const found = await this.getCourseStudentRepository.getCourse(courseStudentId, userId)

        if (!found) {
            throw new NotFoundException(`The course student by id "${courseStudentId}" not found."`);
        }

        return found
    }

}

import { Injectable, NotFoundException } from '@nestjs/common';

import { CourseStudentDetailsModel } from 'src/domain/model/course-student-details.model';
import { GetCourseStudentRepository } from 'src/domain/repository/get-course-student.repository';
import { GetCourseStudentService } from './get-course-student.service';

@Injectable()
export class GetCourseStudentUseCaseService implements GetCourseStudentService {

    constructor(private readonly getCourseStudentRepository: GetCourseStudentRepository) { }

    async execute(courseTeacherId: string, userId: string): Promise<CourseStudentDetailsModel> {
        const found = await this.getCourseStudentRepository.getCourse(courseTeacherId, userId)

        if (!found) {
            throw new NotFoundException(`The course teacher by id "${courseTeacherId}" not found."`);
        }

        return found
    }

}

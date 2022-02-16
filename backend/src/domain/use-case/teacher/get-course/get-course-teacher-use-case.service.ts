import { Injectable, NotFoundException } from '@nestjs/common';

import { CourseTeacherDetailsModel } from 'src/domain/model/course-teacher-details.model';
import { GetCourseTeacherRepository } from 'src/domain/repository/get-course-teacher.repository';
import { GetCourseTeacherService } from './get-course-teacher.service';

@Injectable()
export class GetCourseTeacherUseCaseService implements GetCourseTeacherService {

    constructor(private readonly getCourseTeacherRepository: GetCourseTeacherRepository) { }

    async execute(courseId: string, userId: string): Promise<CourseTeacherDetailsModel> {
        const found = await this.getCourseTeacherRepository.getCourse(courseId, userId)

        if (!found) {
            throw new NotFoundException(`The course by id "${courseId}" not found."`);
        }

        return found
    }

}

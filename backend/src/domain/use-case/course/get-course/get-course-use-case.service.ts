import { Injectable, NotFoundException } from '@nestjs/common';

import { CourseModel } from 'src/domain/model/course.model';
import { GetCourseRepository } from 'src/domain/repository/get-course.repository';
import { GetCourseService } from './get-course.service';

@Injectable()
export class GetCourseUseCaseService implements GetCourseService {

    constructor(private readonly getCourseRepository: GetCourseRepository) { }

    async execute(id: string): Promise<CourseModel> {
        const found = await this.getCourseRepository.getCourse(id)

        if (!found) {
            throw new NotFoundException(`The course by id "${id}" not found."`);
        }

        return found
    }
}

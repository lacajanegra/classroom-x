import { Injectable, NotFoundException } from '@nestjs/common';

import { DelCourseRepository } from '../../../repository/del-course.repository';
import { DelCourseService } from './del-course.service';

@Injectable()
export class DelCourseUseCaseService implements DelCourseService {

constructor(private readonly delCourseRepository : DelCourseRepository) {}

    async execute(id: string, userId: string) : Promise<void> {
        const response = await this.delCourseRepository.delCourse(id, userId)

        if (!response) {
            throw new NotFoundException(`The course by id "${id}" not found."`);
        }
    }
}

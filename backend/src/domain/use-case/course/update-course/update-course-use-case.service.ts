import { CourseModel } from 'src/domain/model/course.model';
import { GetCourseService } from '../get-course/get-course.service';
import { Injectable } from '@nestjs/common';
import { UpdateCourseRepository } from 'src/domain/repository/update-course.repository';
import { UpdateCourseService } from './update-course.service';

@Injectable()
export class UpdateCourseUseCaseService implements UpdateCourseService {

    constructor(
        private readonly getCourseService: GetCourseService,
        private readonly updateCourseRepository: UpdateCourseRepository
    ) { }

    async execute(id: string, name: string): Promise<CourseModel> {
        const found = await this.getCourseService.execute(id)
        found.name = name
        return await this.updateCourseRepository.updateCourse(found)
    }
}

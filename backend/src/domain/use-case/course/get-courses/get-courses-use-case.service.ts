import { CourseModel } from 'src/domain/model/course.model';
import { CoursesFilterRequestModel } from 'src/domain/model/courses-filter-request.model';
import { GetCoursesRepository } from 'src/domain/repository/get-courses.repository';
import { GetCoursesService } from './get-courses.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetCoursesUseCaseService implements GetCoursesService {

    constructor(private readonly getCoursesRepository: GetCoursesRepository) { }

    async execute(filter: CoursesFilterRequestModel): Promise<CourseModel[]> {
        return await this.getCoursesRepository.getCourses(filter)
    }
}

import { AddCourseRepository } from '../domain/repository/add-course.repository';
import { CourseEntity } from './entity/course.entity';
import { CourseModel } from 'src/domain/model/course.model';
import { CourseRepository } from './source/course.repository';
import { CourseRequestModel } from 'src/domain/model/course-request.model';
import { DataCourseMapper } from './mapper/data-course.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DataAddCourseRepository implements AddCourseRepository {

    constructor(
        private readonly courseRepository: CourseRepository,
        private readonly dataCourseMapper: DataCourseMapper
    ) { }

    async addCourse(request: CourseRequestModel): Promise<CourseModel> {
        const { name } = request
        return await this.courseRepository.createCourse(name)
            .then((response: CourseEntity) => { return this.dataCourseMapper.fromEntityToModel(response) })
    }

}
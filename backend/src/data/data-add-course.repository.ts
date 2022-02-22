import { AddCourseRepository } from '../domain/repository/add-course.repository';
import { CourseEntity } from './entity/course.entity';
import { CourseModel } from 'src/domain/model/course.model';
import { CourseRepository } from './source/course.repository';
import { CreateCourseModel } from 'src/domain/model/create-course.model';
import { DataCourseMapper } from './mapper/data-course.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DataAddCourseRepository implements AddCourseRepository {

    constructor(
        private readonly courseRepository: CourseRepository,
        private readonly dataCourseMapper: DataCourseMapper
    ) { }

    async addCourse(request: CreateCourseModel): Promise<CourseModel> {
        return await this.courseRepository.createCourse(request)
            .then((response: CourseEntity) => { return this.dataCourseMapper.fromEntityToModel(response) })
    }

}
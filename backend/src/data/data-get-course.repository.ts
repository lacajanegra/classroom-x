import { CourseEntity } from './entity/course.entity';
import { CourseModel } from 'src/domain/model/course.model';
import { CourseRepository } from './source/course.repository';
import { DataCourseMapper } from './mapper/data-course.mapper';
import { GetCourseRepository } from 'src/domain/repository/get-course.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DataGetCourseRepository implements GetCourseRepository {

    constructor(
        private readonly courseRepository: CourseRepository,
        private readonly dataCourseMapper: DataCourseMapper
    ) { }

    async getCourse(id: string): Promise<CourseModel> {
        return await this.courseRepository.findCourseById(id)
            .then((response: CourseEntity) => { return this.dataCourseMapper.fromEntityToModel(response) })
    }

}
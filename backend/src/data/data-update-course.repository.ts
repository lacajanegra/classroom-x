import { ConflictException, Injectable } from '@nestjs/common';

import { CourseEntity } from './entity/course.entity';
import { CourseModel } from 'src/domain/model/course.model';
import { CourseRepository } from './source/course.repository';
import { DataCourseMapper } from './mapper/data-course.mapper';
import { UpdateCourseRepository } from 'src/domain/repository/update-course.repository';

@Injectable()
export class DataUpdateCourseRepository implements UpdateCourseRepository {

    constructor(
        private readonly courseRepository: CourseRepository,
        private readonly dataCourseMapper: DataCourseMapper
    ) { }

    async updateCourse(request: CourseModel): Promise<CourseModel> {

        const { id, name } = request
        const entity = await this.courseRepository.findCourseById(id)

        if (!entity) {
            throw new ConflictException(`Course with id ${id} not found.`)
        }

        entity.name = name
        return await this.courseRepository.updateCourse(entity)
            .then((response: CourseEntity) => { return this.dataCourseMapper.fromEntityToModel(response) })
    }

}
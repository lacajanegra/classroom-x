import { Injectable, NotImplementedException } from '@nestjs/common';

import { CourseEntity } from './entity/course.entity';
import { CourseRepository } from './source/course.repository';
import { CourseToLearnModel } from 'src/domain/model/course-to-learn.model';
import { GetCoursesToLearnRepository } from 'src/domain/repository/get-courses-to-learn.repository';
import { DataCoursesToLearnMapper } from './mapper/data-courses-to-learn.mapper';

@Injectable()
export class DataGetCoursesToLearnRepository implements GetCoursesToLearnRepository {

    constructor(
        private readonly courseRepository: CourseRepository,
        private readonly dataCoursesToLearnMapper: DataCoursesToLearnMapper
    ) { }

    async getCourses(): Promise<CourseToLearnModel[]> {
        return await this.courseRepository.getRelationWithTeachers()
            .then((response: CourseEntity[]) => { return this.dataCoursesToLearnMapper.fromEntityToModel(response) })
    }

}
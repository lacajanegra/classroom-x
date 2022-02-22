import { Injectable } from '@nestjs/common';

import { CourseEntity } from './entity/course.entity';
import { CourseRepository } from './source/course.repository';
import { GetCoursesToTeachRepository } from 'src/domain/repository/get-courses-to-teach.repository';
import { CourseToLearnModel } from 'src/domain/model/course-to-learn.model';
import { DataCoursesToTeachMapper } from './mapper/data-courses-to-teach.mapper';

@Injectable()
export class DataGetCoursesToTeachRepository implements GetCoursesToTeachRepository {

    constructor(
        private readonly courseRepository: CourseRepository,
        private readonly dataCoursesToTeachMapper: DataCoursesToTeachMapper
    ) { }

    async getCourses(): Promise<CourseToLearnModel[]> {
        return await this.courseRepository.getRelationWithTeachers()
            .then((response: CourseEntity[]) => { return this.dataCoursesToTeachMapper.fromEntityToModel(response) })
    }

}
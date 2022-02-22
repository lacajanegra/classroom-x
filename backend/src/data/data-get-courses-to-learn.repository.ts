import { Injectable, NotImplementedException } from '@nestjs/common';

import { CourseEntity } from './entity/course.entity';
import { CourseRepository } from './source/course.repository';
import { CourseToLearnModel } from 'src/domain/model/course-to-learn.model';
import { GetCoursesToLearnRepository } from 'src/domain/repository/get-courses-to-learn.repository';

@Injectable()
export class DataGetCoursesToLearnRepository implements GetCoursesToLearnRepository {

    constructor(
        private readonly courseRepository: CourseRepository,
        //private readonly dataCoursesTeachersMapper: DataCoursesTeachersMapper
    ) { }

    async getCourses(): Promise<CourseToLearnModel[]> {
        throw new NotImplementedException()
        // return await this.courseRepository.getRelationWithTeachers()
        //     .then((response: CourseEntity[]) => { return this.dataCoursesTeachersMapper.fromEntityToModel(response) })
    }

}
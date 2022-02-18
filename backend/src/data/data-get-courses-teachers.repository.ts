import { Injectable, NotImplementedException } from '@nestjs/common';

import { CourseEntity } from './entity/course.entity';
import { CourseRepository } from './source/course.repository';
import { CourseTeachersModel } from 'src/domain/model/course-teachers.model';
import { DataCoursesTeachersMapper } from './mapper/data-courses-teachers.mapper';
import { GetCoursesTeachersRepository } from 'src/domain/repository/get-courses-teachers.repository';

@Injectable()
export class DataGetCoursesTeachersRepository implements GetCoursesTeachersRepository {

    constructor(
        private readonly courseRepository: CourseRepository,
        private readonly dataCoursesTeachersMapper: DataCoursesTeachersMapper
    ) { }

    async getCourses(userId: string): Promise<CourseTeachersModel[]> {
        return await this.courseRepository.getRelationWithTeachers(userId)
            .then((response: CourseEntity[]) => { return this.dataCoursesTeachersMapper.fromEntityToModel(response) })
    }

}
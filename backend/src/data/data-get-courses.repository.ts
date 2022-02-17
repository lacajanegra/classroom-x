import { CourseEntity } from './entity/course.entity';
import { CourseModel } from 'src/domain/model/course.model';
import { CourseRepository } from './source/course.repository';
import { CoursesFilterModel } from 'src/domain/model/courses-filter.model';
import { DataCoursesMapper } from './mapper/data-courses.mapper';
import { GetCoursesRepository } from 'src/domain/repository/get-courses.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DataGetCoursesRepository implements GetCoursesRepository {

    constructor(
        private readonly courseRepository: CourseRepository,
        private readonly dataCoursesMapper: DataCoursesMapper
    ) { }

    async getCourses(filter: CoursesFilterModel): Promise<CourseModel[]> {
        return await this.courseRepository.findCoursesByFilter(filter)
            .then((responses: CourseEntity[]) => { return this.dataCoursesMapper.fromEntityToModel(responses) })
    }

}
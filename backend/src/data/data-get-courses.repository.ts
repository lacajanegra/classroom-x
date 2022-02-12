import { CourseEntity } from './entity/course.entity';
import { CourseModel } from 'src/domain/model/course.model';
import { CourseRepository } from './source/course.repository';
import { CoursesFilterRequestModel } from 'src/domain/model/courses-filter-request.model';
import { DataCoursesMapper } from './mapper/data-courses.mapper';
import { GetCoursesRepository } from 'src/domain/repository/get-courses.repository';
import { Injectable } from '@nestjs/common';
import { UserRepository } from './source/user.repository';

@Injectable()
export class DataGetCoursesRepository implements GetCoursesRepository {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly courseRepository: CourseRepository,
        private readonly dataCoursesMapper: DataCoursesMapper
    ) { }

    async getCourses(filter: CoursesFilterRequestModel, userId: string): Promise<CourseModel[]> {
        const user = await this.userRepository.getUserById(userId)
        return await this.courseRepository.findCoursesByFilter(filter, user)
            .then((responses: CourseEntity[]) => { return this.dataCoursesMapper.fromEntityToModel(responses) })
    }

}
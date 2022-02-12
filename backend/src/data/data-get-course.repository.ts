import { CourseEntity } from './entity/course.entity';
import { CourseModel } from 'src/domain/model/course.model';
import { CourseRepository } from './source/course.repository';
import { DataCourseMapper } from './mapper/data-course.mapper';
import { GetCourseRepository } from 'src/domain/repository/get-course.repository';
import { Injectable } from '@nestjs/common';
import { UserRepository } from './source/user.repository';

@Injectable()
export class DataGetCourseRepository implements GetCourseRepository {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly courseRepository: CourseRepository,
        private readonly dataCourseMapper: DataCourseMapper
    ) { }

    async getCourse(id: string, userId: string): Promise<CourseModel> {
        const user = await this.userRepository.getUserById(userId)
        return await this.courseRepository.findCourseById(id, user)
            .then((response: CourseEntity) => { return this.dataCourseMapper.fromEntityToModel(response) })
    }

}
import { CourseEntity } from './entity/course.entity';
import { CourseModel } from 'src/domain/model/course.model';
import { CourseRepository } from './source/course.repository';
import { DataCourseMapper } from './mapper/data-course.mapper';
import { Injectable } from '@nestjs/common';
import { UpdateCourseRepository } from 'src/domain/repository/update-course.repository';
import { UserRepository } from './source/user.repository';

@Injectable()
export class DataUpdateCourseRepository implements UpdateCourseRepository {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly courseRepository: CourseRepository,
        private readonly dataCourseMapper: DataCourseMapper
    ) { }

    async updateCourse(request: CourseModel, userId: string): Promise<CourseModel> {
        const user = await this.userRepository.getUserById(userId)
        return await this.courseRepository.updateCourse(request, user)
            .then((response: CourseEntity) => { return this.dataCourseMapper.fromEntityToModel(response) })
    }

}
import { CourseRepository } from './source/course.repository';
import { DelCourseRepository } from 'src/domain/repository/del-course.repository';
import { DeleteResult } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UserRepository } from './source/user.repository';

@Injectable()
export class DataDelCourseRepository implements DelCourseRepository {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly courseRepository: CourseRepository
    ) { }

    async delCourse(id: string, userId: string): Promise<boolean> {
        const user = await this.userRepository.getUserById(userId)
        return await this.courseRepository.delCourseById(id, user)
            .then((response: DeleteResult) => { return response.affected !== 0 })
    }

}
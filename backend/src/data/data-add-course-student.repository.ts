import { Injectable, NotImplementedException } from '@nestjs/common';

import { AddCourseRepository } from '../domain/repository/add-course.repository';
import { AddCourseStudentRepository } from 'src/domain/repository/add-course-student.repository';
import { CourseEntity } from './entity/course.entity';
import { CourseModel } from 'src/domain/model/course.model';
import { CourseRepository } from './source/course.repository';
import { CourseRequestModel } from 'src/domain/model/course-request.model';
import { CourseStudentModel } from 'src/domain/model/course-student.model';
import { CourseStudentRepository } from './source/course-student.repository';
import { CourseStudentRequestModel } from 'src/domain/model/course-student-request.model';
import { DataCourseMapper } from './mapper/data-course.mapper';
import { DataCourseStudentMapper } from './mapper/data-course-student.mapper';
import { UserModel } from 'src/domain/model/user.model';
import { UserRepository } from './source/user.repository';

@Injectable()
export class DataAddCourseStudentRepository implements AddCourseStudentRepository {
/*
    constructor(
        private readonly userRepository: UserRepository,
        private readonly courseRepository: CourseRepository,
        private readonly courseStudentRepository: CourseStudentRepository,
        private readonly dataCourseStudentMapper: DataCourseStudentMapper
    ) { }
*/
    async addRelation(courseId: string, userId: string): Promise<CourseStudentModel> {
        throw new NotImplementedException()
        /*const user = await this.userRepository.getUserById(userId)
        return await this.courseRepository.createCourse(request, user)
            .then((response: CourseEntity) => { return this.dataCourseMapper.fromEntityToModel(response) })
            */
    }

}
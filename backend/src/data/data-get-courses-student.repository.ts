import { Injectable, NotImplementedException } from '@nestjs/common';

import { CourseStudentEntity } from './entity/course-student.entity';
import { CourseStudentModel } from 'src/domain/model/course-student.model';
import { CourseStudentRepository } from './source/course-student.repository';
import { GetCoursesStudentRepository } from 'src/domain/repository/get-courses-student.repository';

@Injectable()
export class DataGetCoursesStudentRepository implements GetCoursesStudentRepository {

    constructor(
        private readonly courseStudentRepository: CourseStudentRepository,
        //private readonly dataCoursesStudentMapper: DataCoursesStudentMapper
    ) { }

    async getCourses(userId: string): Promise<CourseStudentModel[]> {

throw new NotImplementedException()

        /*return await this.courseStudentRepository.getAll(userId)
            .then((response: CourseStudentEntity[]) => { return this.dataCoursesStudentMapper.fromEntityToModel(response) })
            */
    }

}
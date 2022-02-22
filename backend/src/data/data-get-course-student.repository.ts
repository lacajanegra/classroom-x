import { CourseStudentEntity } from './entity/course-student.entity';
import { CourseStudentRepository } from './source/course-student.repository';
import { GetCourseStudentRepository } from 'src/domain/repository/get-course-student.repository';
import { Injectable } from '@nestjs/common';
import { CourseStudentModel } from 'src/domain/model/course-student.model';
import { DataCourseStudentMapper } from './mapper/data-course-student.mapper';

@Injectable()
export class DataGetCourseStudentRepository implements GetCourseStudentRepository {

    constructor(
        private readonly courseStudentRepository: CourseStudentRepository,
        private readonly dataCourseStudentMapper: DataCourseStudentMapper
    ) { }

    async getCourse(courseStudentId: string, userId: string): Promise<CourseStudentModel> {
        return await this.courseStudentRepository.getRelation(courseStudentId, userId)
            .then((response: CourseStudentEntity) => { return this.dataCourseStudentMapper.fromEntityToModel(response) })
    }

}
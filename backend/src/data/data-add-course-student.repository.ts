import { AddCourseStudentRepository } from 'src/domain/repository/add-course-student.repository';
import { CourseStudentEntity } from './entity/course-student.entity';
import { CourseStudentModel } from 'src/domain/model/course-student.model';
import { CourseStudentRepository } from './source/course-student.repository';
import { DataCourseStudentMapper } from './mapper/data-course-student.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DataAddCourseStudentRepository implements AddCourseStudentRepository {

    constructor(
        private readonly courseStudentRepository: CourseStudentRepository,
        private readonly dataCourseStudentMapper: DataCourseStudentMapper
    ) { }

    async addRelation(courseTeacherId: string, userId: string): Promise<CourseStudentModel> {
        return await this.courseStudentRepository.createRelation(courseTeacherId, userId)
            .then((response: CourseStudentEntity) => { return this.courseStudentRepository.getRelation(response.id, userId) })
            .then((response: CourseStudentEntity) => { return this.dataCourseStudentMapper.fromEntityToModel(response) })
    }

}
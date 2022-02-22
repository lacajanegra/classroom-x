import { ConflictException, Injectable } from '@nestjs/common';

import { CourseStudentEntity } from './entity/course-student.entity';
import { CourseStudentRepository } from './source/course-student.repository';
import { UpdateQualificationModel } from 'src/domain/model/update-qualification.model';
import { UpdateQualificationRepository } from 'src/domain/repository/update-qualification.repository';
import { DataCourseStudentMapper } from './mapper/data-course-student.mapper';
import { CourseStudentModel } from 'src/domain/model/course-student.model';

@Injectable()
export class DataUpdateQualificationRepository implements UpdateQualificationRepository {

    constructor(
        private readonly courseStudentRepository: CourseStudentRepository,
        private readonly dataCourseStudentMapper: DataCourseStudentMapper
    ) { }

    async updateQualification(request: UpdateQualificationModel, userId: string): Promise<CourseStudentModel> {

        const { courseStudentId, qualification } = request
        const entity = await this.courseStudentRepository.getRelation(courseStudentId, userId)

        if (!entity) {
            throw new ConflictException(`Course Student with id ${courseStudentId} not found.`)
        }

        entity.qualification = qualification
        return await this.courseStudentRepository.updateCourse(entity)
            .then((response: CourseStudentEntity) => { return this.dataCourseStudentMapper.fromEntityToModel(response) })
    }

}
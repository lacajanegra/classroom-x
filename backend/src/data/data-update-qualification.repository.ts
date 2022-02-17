import { ConflictException, Injectable } from '@nestjs/common';

import { CourseStudentDetailsModel } from 'src/domain/model/course-student-details.model';
import { CourseStudentEntity } from './entity/course-student.entity';
import { CourseStudentRepository } from './source/course-student.repository';
import { DataCourseStudentDetailsMapper } from './mapper/data-course-student-details.mapper';
import { UpdateQualificationModel } from 'src/domain/model/update-qualification.model';
import { UpdateQualificationRepository } from 'src/domain/repository/update-qualification.repository';

@Injectable()
export class DataUpdateQualificationRepository implements UpdateQualificationRepository {

    constructor(
        private readonly courseStudentRepository: CourseStudentRepository,
        private readonly dataCourseStudentDetailsMapper: DataCourseStudentDetailsMapper
    ) { }

    async updateQualification(request: UpdateQualificationModel, userId: string): Promise<CourseStudentDetailsModel> {

        const { courseStudentId, qualification } = request
        const entity = await this.courseStudentRepository.getRelation(courseStudentId, userId)

        if (!entity) {
            throw new ConflictException(`Course Student with id ${courseStudentId} not found.`)
        }

        entity.qualification = qualification
        return await this.courseStudentRepository.updateCourse(entity)
            .then((response: CourseStudentEntity) => { return this.dataCourseStudentDetailsMapper.fromEntityToModel(response) })
    }

}
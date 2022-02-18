import { ConflictException, Injectable } from '@nestjs/common';

import { AddCourseStudentRepository } from 'src/domain/repository/add-course-student.repository';
import { CourseStudentEntity } from './entity/course-student.entity';
import { CourseStudentModel } from 'src/domain/model/course-student.model';
import { CourseStudentRepository } from './source/course-student.repository';
import { CourseTeacherRepository } from './source/course-teacher.repository';
import { DataCourseStudentMapper } from './mapper/data-course-student.mapper';

@Injectable()
export class DataAddCourseStudentRepository implements AddCourseStudentRepository {

    constructor(
        private readonly courseTeacherRepository: CourseTeacherRepository,
        private readonly courseStudentRepository: CourseStudentRepository,
        private readonly dataCourseStudentMapper: DataCourseStudentMapper
    ) { }

    async addRelation(courseTeacherId: string, userId: string): Promise<CourseStudentModel> {

        const entity = await this.courseTeacherRepository.getRelationInfo(courseTeacherId)

        if (!entity) {
            throw new ConflictException(`CourseTeacher with id ${courseTeacherId} not found.`)
        }

        const { courseId } = entity

        return await this.courseStudentRepository.createRelation(courseTeacherId, courseId, userId)
            .then((response: CourseStudentEntity) => { return this.courseStudentRepository.getRelation(response.id, userId) })
            .then((response: CourseStudentEntity) => { return this.dataCourseStudentMapper.fromEntityToModel(response) })
    }

}
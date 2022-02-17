import { CourseStudentDetailsModel } from 'src/domain/model/course-student-details.model';
import { CourseStudentEntity } from './entity/course-student.entity';
import { CourseStudentRepository } from './source/course-student.repository';
import { DataCourseStudentDetailsMapper } from './mapper/data-course-student-details.mapper';
import { GetCourseStudentRepository } from 'src/domain/repository/get-course-student.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DataGetCourseStudentRepository implements GetCourseStudentRepository {

    constructor(
        private readonly courseStudentRepository: CourseStudentRepository,
        private readonly dataCourseStudentDetailsMapper: DataCourseStudentDetailsMapper
    ) { }

    async getCourse(courseStudentId: string, userId: string): Promise<CourseStudentDetailsModel> {
        return await this.courseStudentRepository.getRelation(courseStudentId, userId)
            .then((response: CourseStudentEntity) => { return this.dataCourseStudentDetailsMapper.fromEntityToModel(response) })
    }

}
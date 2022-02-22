import { Injectable, NotImplementedException } from '@nestjs/common';

import { CourseTeacherDetailsModel } from 'src/domain/model/course-teacher-details.model';
import { CourseTeacherEntity } from './entity/course-teacher.entity';
import { CourseTeacherRepository } from './source/course-teacher.repository';
import { DataCourseTeacherDetailsMapper } from './mapper/data-course-teacher-details.mapper';
import { GetCourseTeacherRepository } from 'src/domain/repository/get-course-teacher.repository';

@Injectable()
export class DataGetCourseTeacherRepository implements GetCourseTeacherRepository {

    constructor(
        private readonly courseTeacherRepository: CourseTeacherRepository,
        private readonly dataCourseTeacherDetailsMapper: DataCourseTeacherDetailsMapper
    ) { }

    async getCourse(courseTeacherId: string, userId: string): Promise<CourseTeacherDetailsModel> {
        return await this.courseTeacherRepository.getRelationWithStudents(courseTeacherId, userId)
            .then((response: CourseTeacherEntity) => { return this.dataCourseTeacherDetailsMapper.fromEntityToModel(response) })
    }

}
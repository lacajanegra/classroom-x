import { AddCourseTeacherRepository } from 'src/domain/repository/add-course-teacher.repository';
import { CourseTeacherEntity } from './entity/course-teacher.entity';
import { CourseTeacherModel } from 'src/domain/model/course-teacher.model';
import { CourseTeacherRepository } from './source/course-teacher.repository';
import { DataCourseTeacherMapper } from './mapper/data-course-teacher.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DataAddCourseTeacherRepository implements AddCourseTeacherRepository {

    constructor(
        private readonly courseTeacherRepository: CourseTeacherRepository,
        private readonly dataCourseTeacherMapper: DataCourseTeacherMapper
    ) { }

    async addRelation(courseId: string, userId: string): Promise<CourseTeacherModel> {
        return await this.courseTeacherRepository.createRelation(courseId, userId)
            .then((response: CourseTeacherEntity) => { return this.courseTeacherRepository.getRelation(response.id, userId) })
            .then((response: CourseTeacherEntity) => { return this.dataCourseTeacherMapper.fromEntityToModel(response) })
    }

}
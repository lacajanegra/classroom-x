import { CourseStudentDetailsModel } from 'src/domain/model/course-student-details.model';
import { CourseStudentEntity } from '../entity/course-student.entity';
import { DataCourseStudentDetailsMapper } from './data-course-student-details.mapper';
import { Injectable } from "@nestjs/common";

@Injectable()
export class DataCourseStudentsDetailsMapper {

    constructor(private readonly dataCourseStudentDetailsMapper: DataCourseStudentDetailsMapper) { }

    fromEntityToModel(entities: CourseStudentEntity[]): CourseStudentDetailsModel[] {

        if (!entities) {
            return []
        }

        return entities.map((entity: CourseStudentEntity) => this.dataCourseStudentDetailsMapper.fromEntityToModel(entity))
    }

}
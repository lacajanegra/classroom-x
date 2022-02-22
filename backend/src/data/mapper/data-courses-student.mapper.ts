import { CourseStudentEntity } from '../entity/course-student.entity';
import { CourseStudentModel } from 'src/domain/model/course-student.model';
import { DataCourseStudentMapper } from './data-course-student.mapper';
import { Injectable } from "@nestjs/common";

@Injectable()
export class DataCoursesStudentMapper {

    constructor(private readonly dataCourseStudentMapper: DataCourseStudentMapper) { }

    fromEntityToModel(entities: CourseStudentEntity[]): CourseStudentModel[] {

        if (!entities) {
            return []
        }

        return entities.map((entity: CourseStudentEntity) => this.dataCourseStudentMapper.fromEntityToModel(entity))
    }

}
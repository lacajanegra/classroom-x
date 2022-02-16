import { CourseStudentEntity } from '../entity/course-student.entity';
import { DataStudentDetailsMapper } from './data-student-details.mapper';
import { Injectable } from "@nestjs/common";
import { StudentDetailsModel } from 'src/domain/model/student-details.model';

@Injectable()
export class DataStudentsDetailsMapper {

    constructor(private readonly dataStudentDetailsMapper: DataStudentDetailsMapper) { }

    fromEntityToModel(entities: CourseStudentEntity[]): StudentDetailsModel[] {

        if (!entities) {
            return []
        }

        return entities.map((entity: CourseStudentEntity) => this.dataStudentDetailsMapper.fromEntityToModel(entity))
    }

}
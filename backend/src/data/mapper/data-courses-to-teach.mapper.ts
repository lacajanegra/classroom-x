import { CourseEntity } from '../entity/course.entity';
import { Injectable } from "@nestjs/common";
import { CourseToTeachModel } from 'src/domain/model/course-to-teach.model';
import { DataCourseToTeachMapper } from './data-course-to-teach.mapper';

@Injectable()
export class DataCoursesToTeachMapper {

    constructor(private readonly dataCourseToTeachMapper: DataCourseToTeachMapper) { }

    fromEntityToModel(entities: CourseEntity[]): CourseToTeachModel[] {

        if (!entities) {
            return []
        }

        return entities.map((entity: CourseEntity) => this.dataCourseToTeachMapper.fromEntityToModel(entity))
    }

}
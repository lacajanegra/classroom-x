import { CourseEntity } from '../entity/course.entity';
import { Injectable } from "@nestjs/common";
import { CourseToLearnModel } from 'src/domain/model/course-to-learn.model';
import { DataCourseToLearnMapper } from './data-course-to-learn.mapper';

@Injectable()
export class DataCoursesToLearnMapper {

    constructor(private readonly dataCourseToLearnMapper: DataCourseToLearnMapper) { }

    fromEntityToModel(entities: CourseEntity[]): CourseToLearnModel[] {

        if (!entities) {
            return []
        }

        return entities.map((entity: CourseEntity) => this.dataCourseToLearnMapper.fromEntityToModel(entity))
    }

}
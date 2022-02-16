import { CourseEntity } from '../entity/course.entity';
import { CourseModel } from "src/domain/model/course.model";
import { DataCourseMapper } from './data-course.mapper';
import { Injectable } from "@nestjs/common";

@Injectable()
export class DataCoursesMapper {

    constructor(private readonly dataCourseMapper: DataCourseMapper) { }

    fromEntityToModel(entities: CourseEntity[]): CourseModel[] {

        if (!entities) {
            return []
        }

        return entities.map((entity: CourseEntity) => this.dataCourseMapper.fromEntityToModel(entity))
    }

}
import { Injectable } from "@nestjs/common";
import { CourseModel } from "src/domain/model/course.model";
import { CourseEntity } from '../entity/course.entity';
import { DataCourseMapper } from './data-course.mapper';

@Injectable()
export class DataCoursesMapper {

    constructor(private readonly dataCourseMapper: DataCourseMapper) { }

    fromEntityToModel(entities: CourseEntity[]): CourseModel[] {

        if (!entities) {
            return []
        }

        return entities.map(this.dataCourseMapper.fromEntityToModel)
    }

}
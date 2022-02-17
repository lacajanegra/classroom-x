import { CourseEntity } from "../entity/course.entity";
import { CourseTeacherEntity } from "../entity/course-teacher.entity";
import { CourseTeachersModel } from "src/domain/model/course-teachers.model";
import { DataCourseTeachersMapper } from "./data-course-teachers.mapper";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DataCoursesTeachersMapper {

    constructor(private readonly dataCourseTeachersMapper: DataCourseTeachersMapper) { }

    fromEntityToModel(entities: CourseEntity[]): CourseTeachersModel[] {

        if (!entities) {
            return []
        }

console.log(entities)

        return entities.map((entity: CourseEntity) => this.dataCourseTeachersMapper.fromEntityToModel(entity))
    }

}
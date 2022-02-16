import { CourseTeacherEntity } from "../entity/course-teacher.entity";
import { CourseTeacherModel } from "src/domain/model/course-teacher.model";
import { DataCourseTeacherMapper } from "./data-course-teacher.mapper";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DataCoursesTeacherMapper {

    constructor(private readonly dataCourseTeacherMapper: DataCourseTeacherMapper) { }

    fromEntityToModel(entities: CourseTeacherEntity[]): CourseTeacherModel[] {

        if (!entities) {
            return []
        }

        return entities.map((entity: CourseTeacherEntity) => this.dataCourseTeacherMapper.fromEntityToModel(entity))
    }

}
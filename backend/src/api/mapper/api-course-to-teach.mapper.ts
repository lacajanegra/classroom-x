
import { Injectable } from "@nestjs/common";
import { ApiCourseMapper } from "./api-course.mapper";
import { CourseDto } from "../model/course.dto";
import { CourseToTeachModel } from "src/domain/model/course-to-teach.model";

@Injectable()
export class ApiCourseToTeachMapper {

    constructor(private readonly apiCourseMapper: ApiCourseMapper) { }

    fromModelToDto(coursesTeacher: CourseToTeachModel): CourseDto {
        return this.apiCourseMapper.fromModelToDto(coursesTeacher.course)
    }

}
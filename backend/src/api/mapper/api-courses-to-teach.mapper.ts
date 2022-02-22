import { Injectable } from "@nestjs/common";
import { ApiCourseToTeachMapper } from "./api-course-to-teach.mapper";
import { CourseDto } from "../model/course.dto";
import { CourseToTeachModel } from "src/domain/model/course-to-teach.model";

@Injectable()
export class ApiCoursesToTeachMapper {

    constructor(private readonly apiCourseToTeachMapper: ApiCourseToTeachMapper) { }

    fromModelToDto(coursesTeachers: CourseToTeachModel[]): CourseDto[] {
        return coursesTeachers.map((model) => this.apiCourseToTeachMapper.fromModelToDto(model))
    }

}
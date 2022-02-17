import { ApiCourseMapper } from "./api-course.mapper";
import { CourseDto } from "../model/course.dto";
import { CourseModel } from "src/domain/model/course.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCoursesMapper {

    constructor(private readonly apiCourseMapper: ApiCourseMapper) { }

    fromModelToDto(courses: CourseModel[]): CourseDto[] {
        return courses.map((model) => this.apiCourseMapper.fromModelToDto(model))
    }

}
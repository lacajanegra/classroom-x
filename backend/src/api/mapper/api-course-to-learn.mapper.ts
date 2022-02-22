import { Injectable } from "@nestjs/common";
import { ApiCourseMapper } from "./api-course.mapper";
import { CourseDto } from "../model/course.dto";
import { CourseStudentModel } from "src/domain/model/course-student.model";
import { CourseToLearnModel } from "src/domain/model/course-to-learn.model";

@Injectable()
export class ApiCourseToLearnMapper {

    constructor(private readonly apiCourseMapper: ApiCourseMapper) { }

    fromModelToDto(courseStudent: CourseToLearnModel): CourseDto {
        return this.apiCourseMapper.fromModelToDto(courseStudent.course)
    }

}
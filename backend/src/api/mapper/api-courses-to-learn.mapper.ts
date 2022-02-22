import { Injectable } from '@nestjs/common';
import { CourseToLearnModel } from "src/domain/model/course-to-learn.model";
import { CourseDto } from "../model/course.dto";
import { ApiCourseToLearnMapper } from "./api-course-to-learn.mapper";

@Injectable()
export class ApiCoursesToLearnMapper {

    constructor(private readonly apiCourseToLearnMapper: ApiCourseToLearnMapper) { }

    fromModelToDto(coursesStudent: CourseToLearnModel[]): CourseDto[] {
        return coursesStudent.map((model) => this.apiCourseToLearnMapper.fromModelToDto(model))
    }

}
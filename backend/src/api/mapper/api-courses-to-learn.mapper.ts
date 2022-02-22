import { Injectable } from '@nestjs/common';
import { CourseToLearnModel } from "src/domain/model/course-to-learn.model";
import { CourseToLearnDto } from '../model/course-to-learn.dto';
import { ApiCourseToLearnMapper } from "./api-course-to-learn.mapper";

@Injectable()
export class ApiCoursesToLearnMapper {

    constructor(private readonly apiCourseToLearnMapper: ApiCourseToLearnMapper) { }

    fromModelToDto(coursesToLearn: CourseToLearnModel[]): CourseToLearnDto[] {
        return coursesToLearn.map((model) => this.apiCourseToLearnMapper.fromModelToDto(model))
    }

}
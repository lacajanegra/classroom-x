import { ApiCourseTeachersMapper } from "./api-course-teachers.mapper";
import { CourseTeachersDto } from "../model/course-teachers.dto";
import { CourseTeachersModel } from "src/domain/model/course-teachers.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCoursesTeachersMapper {

    constructor(private readonly apiCourseTeachersMapper: ApiCourseTeachersMapper) { }

    fromModelToDto(coursesTeachers: CourseTeachersModel[]): CourseTeachersDto[] {
        return coursesTeachers.map((model) => this.apiCourseTeachersMapper.fromModelToDto(model))
    }

}
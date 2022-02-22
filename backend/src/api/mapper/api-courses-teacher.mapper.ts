import { ApiCourseTeacherMapper } from "./api-course-teacher.mapper";
import { CourseTeacherDto } from "../model/course-teacher.dto";
import { CourseTeacherModel } from "src/domain/model/course-teacher.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCoursesTeacherMapper {

    constructor(private readonly apiCourseTeacherMapper: ApiCourseTeacherMapper) { }

    fromModelToDto(coursesTeacher: CourseTeacherModel[]): CourseTeacherDto[] {
        return coursesTeacher.map((model) => this.apiCourseTeacherMapper.fromModelToDto(model))
    }

}
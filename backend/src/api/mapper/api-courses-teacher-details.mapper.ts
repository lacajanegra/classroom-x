import { ApiCourseTeacherDetailsMapper } from "./api-course-teacher-details.mapper";
import { CourseTeacherDetailsDto } from "../model/course-teacher-details.dto";
import { CourseTeacherDetailsModel } from "src/domain/model/course-teacher-details.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCoursesTeacherDetailsMapper {

    constructor(private readonly apiCourseTeacherDetailsMapper: ApiCourseTeacherDetailsMapper) { }

    fromModelToDto(coursesTeacher: CourseTeacherDetailsModel[]): CourseTeacherDetailsDto[] {
        return coursesTeacher.map((relations) => this.apiCourseTeacherDetailsMapper.fromModelToDto(relations))
    }
}
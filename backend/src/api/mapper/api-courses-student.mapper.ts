import { ApiCourseStudentMapper } from "./api-course-student.mapper";
import { CourseStudentDto } from "../model/course-student.dto";
import { CourseStudentModel } from "src/domain/model/course-student.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCoursesStudentMapper {

    constructor(private readonly apiCourseStudentMapper: ApiCourseStudentMapper) { }

    fromModelToDto(coursesStudent: CourseStudentModel[]): CourseStudentDto[] {
        return coursesStudent.map((model) => this.apiCourseStudentMapper.fromModelToDto(model))
    }

}
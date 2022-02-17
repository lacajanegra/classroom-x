import { ApiCourseTeacherForStudentMapper } from "./api-course-teacher-for-student.mapper";
import { CourseTeacherForStudentDto } from "../model/course-teacher-for-student.dto";
import { CourseTeacherModel } from "src/domain/model/course-teacher.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCourseTeachersForStudentMapper {

    constructor(private readonly apiCourseTeacherForStudentMapper: ApiCourseTeacherForStudentMapper) { }

    fromModelToDto(courseTeachers: CourseTeacherModel[]): CourseTeacherForStudentDto[] {
        return courseTeachers.map((relations) => this.apiCourseTeacherForStudentMapper.fromModelToDto(relations))
    }
}
import { ApiCourseTeacherStudentMapper } from "./api-course-teacher-student.mapper";
import { CourseTeacherStudentDetailsDto } from "../model/course-teacher-student-details.dto";
import { Injectable } from "@nestjs/common";
import { CourseStudentModel } from "src/domain/model/course-student.model";

@Injectable()
export class ApiCoursesTeacherStudentMapper {

    constructor(private readonly apiCourseTeacherStudentMapper: ApiCourseTeacherStudentMapper) { }

    fromModelToDto(coursesStudent: CourseStudentModel[]): CourseTeacherStudentDetailsDto[] {
        return coursesStudent.map((relation) => this.apiCourseTeacherStudentMapper.fromModelToDto(relation))
    }

}
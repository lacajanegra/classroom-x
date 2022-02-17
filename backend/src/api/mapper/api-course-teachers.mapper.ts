import { ApiCourseTeachersForStudentMapper } from "./api-course-teachers-for-student.mapper";
import { CourseTeacherForStudentDto } from "../model/course-teacher-for-student.dto";
import { CourseTeacherModel } from "src/domain/model/course-teacher.model";
import { CourseTeachersDto } from "../model/course-teachers.dto";
import { CourseTeachersModel } from "src/domain/model/course-teachers.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCourseTeachersMapper {

    constructor(private readonly apiCourseTeachersForStudentMapper: ApiCourseTeachersForStudentMapper) { }

    fromModelToDto(courseTeachers: CourseTeachersModel): CourseTeachersDto {
        const { course, teachers } = courseTeachers
        const dto: CourseTeachersDto = {
            name: course.name,
            teachers: this.getTeachers(teachers)
        }
        return dto
    }

    private getTeachers(teachers: CourseTeacherModel[]): CourseTeacherForStudentDto[] {
        return this.apiCourseTeachersForStudentMapper.fromModelToDto(teachers)
    }
}
import { ApiCoursesTeacherStudentMapper } from "./api-courses-teacher-student.mapper";
import { CourseTeacherDetailsDto } from "../model/course-teacher-details.dto";
import { CourseTeacherDetailsModel } from "src/domain/model/course-teacher-details.model";
import { Injectable } from "@nestjs/common";
import { CourseStudentModel } from "src/domain/model/course-student.model";

@Injectable()
export class ApiCourseTeacherDetailsMapper {

    constructor(private readonly apiCoursesTeacherStudentDetailsMapper: ApiCoursesTeacherStudentMapper) { }

    fromModelToDto(courseTeacher: CourseTeacherDetailsModel): CourseTeacherDetailsDto {
        const { id, course, students } = courseTeacher
        const dto: CourseTeacherDetailsDto = { id: id, name: course.name, students: this.getStudents(students) }
        return dto
    }

    private getStudents(students: CourseStudentModel[]) {
        return this.apiCoursesTeacherStudentDetailsMapper.fromModelToDto(students)
    }
}
import { CourseStudentDto } from "../model/course-student.dto";
import { CourseStudentModel } from "src/domain/model/course-student.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCourseStudentMapper {

    fromModelToDto(courseStudent: CourseStudentModel): CourseStudentDto {
        const { id, course } = courseStudent
        const dto: CourseStudentDto = { id: id, name: course.name }
        return dto
    }

}
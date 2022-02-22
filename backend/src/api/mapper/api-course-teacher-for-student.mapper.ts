import { CourseTeacherForStudentDto } from "../model/course-teacher-for-student.dto";
import { CourseTeacherModel } from "src/domain/model/course-teacher.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCourseTeacherForStudentMapper {

    fromModelToDto(courseTeacher: CourseTeacherModel): CourseTeacherForStudentDto {
        const { id, teacher } = courseTeacher
        const dto: CourseTeacherForStudentDto = { id: id, name: teacher.name, email: teacher.email }
        return dto
    }

}
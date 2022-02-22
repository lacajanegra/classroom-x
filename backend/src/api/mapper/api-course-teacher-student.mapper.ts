import { CourseTeacherStudentDetailsDto } from "../model/course-teacher-student-details.dto";
import { Injectable } from "@nestjs/common";
import { CourseStudentModel } from 'src/domain/model/course-student.model';

@Injectable()
export class ApiCourseTeacherStudentMapper {

    fromModelToDto(courseStudent: CourseStudentModel): CourseTeacherStudentDetailsDto {
        const { id, student, qualification } = courseStudent
        const dto: CourseTeacherStudentDetailsDto = { id: id, name: student.name, email: student.email, qualification: qualification }
        return dto
    }

}
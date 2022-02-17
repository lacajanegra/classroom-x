import { CourseStudentDetailsModel } from 'src/domain/model/course-student-details.model';
import { CourseTeacherStudentDetailsDto } from "../model/course-teacher-student-details.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCourseTeacherStudentDetailsMapper {

    fromModelToDto(courseStudent: CourseStudentDetailsModel): CourseTeacherStudentDetailsDto {
        const { id, student, qualification } = courseStudent
        const dto: CourseTeacherStudentDetailsDto = { id: id, name: student.name, email: student.email, qualification: qualification }
        return dto
    }

}
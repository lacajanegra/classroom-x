import { CourseStudentDetailsDto } from "../model/course-student-details.dto";
import { CourseStudentDetailsModel } from 'src/domain/model/course-student-details.model';
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCourseStudentDetailsMapper {

    fromModelToDto(courseStudent: CourseStudentDetailsModel): CourseStudentDetailsDto {
        const { student, qualification } = courseStudent
        const dto: CourseStudentDetailsDto = { name: student.name, email: student.email, qualification: qualification }
        return dto
    }

}
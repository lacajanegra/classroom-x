import { CourseStudentDetailsDto } from "../model/course-student-details.dto";
import { CourseStudentDetailsModel } from 'src/domain/model/course-student-details.model';
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCourseStudentDetailsMapper {

    fromModelToDto(courseStudent: CourseStudentDetailsModel): CourseStudentDetailsDto {
        const { id, course, teacher, qualification } = courseStudent
        const dto: CourseStudentDetailsDto = { id: id, course: course.name, teacher: teacher.name, qualification: qualification }
        return dto
    }

}
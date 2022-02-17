import { ApiCourseStudentDetailsMapper } from "./api-course-student-details.mapper";
import { CourseStudentDetailsDto } from "../model/course-student-details.dto";
import { CourseStudentDetailsModel } from 'src/domain/model/course-student-details.model';
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCoursesStudentDetailsMapper {

    constructor(private readonly apiCourseStudentDetailsMapper: ApiCourseStudentDetailsMapper) { }

    fromModelToDto(coursesStudent: CourseStudentDetailsModel[]): CourseStudentDetailsDto[] {
        return coursesStudent.map((relation) => this.apiCourseStudentDetailsMapper.fromModelToDto(relation))
    }

}
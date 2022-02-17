import { ApiCourseTeacherStudentDetailsMapper } from "./api-course-teacher-student-details.mapper";
import { CourseStudentDetailsModel } from 'src/domain/model/course-student-details.model';
import { CourseTeacherStudentDetailsDto } from "../model/course-teacher-student-details.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCoursesTeacherStudentDetailsMapper {

    constructor(private readonly apiCourseTeacherStudentDetailsMapper: ApiCourseTeacherStudentDetailsMapper) { }

    fromModelToDto(coursesStudent: CourseStudentDetailsModel[]): CourseTeacherStudentDetailsDto[] {
        return coursesStudent.map((relation) => this.apiCourseTeacherStudentDetailsMapper.fromModelToDto(relation))
    }

}
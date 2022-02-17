import { ApiCoursesTeacherStudentDetailsMapper } from "./api-courses-teacher-student-details.mapper";
import { CourseStudentDetailsModel } from 'src/domain/model/course-student-details.model';
import { CourseTeacherDetailsDto } from "../model/course-teacher-details.dto";
import { CourseTeacherDetailsModel } from "src/domain/model/course-teacher-details.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCourseTeacherDetailsMapper {

    constructor(private readonly apiCoursesTeacherStudentDetailsMapper: ApiCoursesTeacherStudentDetailsMapper) { }

    fromModelToDto(courseTeacher: CourseTeacherDetailsModel): CourseTeacherDetailsDto {
        const { id, course, students } = courseTeacher
        const dto: CourseTeacherDetailsDto = { id: id, name: course.name, students: this.getStudents(students) }
        return dto
    }

    private getStudents(students: CourseStudentDetailsModel[]) {
        return this.apiCoursesTeacherStudentDetailsMapper.fromModelToDto(students)
    }
}
import { CourseTeacherDto } from "../model/course-teacher.dto";
import { CourseTeacherModel } from "src/domain/model/course-teacher.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCourseTeacherToLearnMapper {

    fromModelToDto(courseTeacher: CourseTeacherModel): CourseTeacherDto {
        const { id, teacher } = courseTeacher
        const dto: CourseTeacherDto = { id: id, name: teacher.name }
        return dto
    }

}
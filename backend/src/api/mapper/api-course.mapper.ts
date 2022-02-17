import { CourseDto } from "../model/course.dto";
import { CourseModel } from "src/domain/model/course.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCourseMapper {

    fromModelToDto(course: CourseModel): CourseDto {
        const { id, name } = course
        const dto: CourseDto = { id: id, name: name }
        return dto
    }

}
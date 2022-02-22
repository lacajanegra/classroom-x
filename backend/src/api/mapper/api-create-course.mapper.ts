import { CreateCourseModel } from "src/domain/model/create-course.model";
import { CreateCourseRequestDto } from "../model/create-course-request.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCreateCourseMapper {

    fromDtoToModel(dto: CreateCourseRequestDto): CreateCourseModel {
        const { name, } = dto
        const model: CreateCourseModel = { name: name }
        return model
    }

}
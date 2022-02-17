import { CoursesFilterModel } from "src/domain/model/courses-filter.model";
import { CoursesFilterRequestDto } from "../model/courses-filter-request.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiCoursesFilterMapper {

    fromDtoToModel(dto: CoursesFilterRequestDto): CoursesFilterModel {
        const { search } = dto
        const model: CoursesFilterModel = { search: search }
        return model
    }

}
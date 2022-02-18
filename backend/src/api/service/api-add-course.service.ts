import { AddCourseService } from "src/domain/use-case/course/add-course/add-course.service"
import { ApiCourseMapper } from "../mapper/api-course.mapper"
import { ApiCreateCourseMapper } from "../mapper/api-create-course.mapper"
import { CourseDto } from "../model/course.dto"
import { CreateCourseRequestDto } from "../model/create-course-request.dto"
import { Injectable } from "@nestjs/common"

@Injectable()
export class ApiAddCourseService {

    constructor(
        private readonly addCourseService: AddCourseService,
        private readonly apiCourseMapper: ApiCourseMapper,
        private readonly apiCreateCourseMapper: ApiCreateCourseMapper
    ) { }

    async execute(request: CreateCourseRequestDto): Promise<CourseDto> {
        const requestModel = this.apiCreateCourseMapper.fromDtoToModel(request)
        return await this.addCourseService.execute(requestModel)
            .then((course) => this.apiCourseMapper.fromModelToDto(course))
    }

}

import { ApiCourseMapper } from "../mapper/api-course.mapper"
import { CourseDto } from "../model/course.dto"
import { Injectable } from "@nestjs/common"
import { UpdateCourseRequestDto } from "../model/update-course-request.dto"
import { UpdateCourseService } from "src/domain/use-case/course/update-course/update-course.service"

@Injectable()
export class ApiUpdateCourseService {

    constructor(
        private readonly updateCourseService: UpdateCourseService,
        private readonly apiCourseMapper: ApiCourseMapper
    ) { }

    async execute(id: string, request: UpdateCourseRequestDto): Promise<CourseDto> {
        return await this.updateCourseService.execute(id, request.name)
            .then((course) => this.apiCourseMapper.fromModelToDto(course))
    }

}

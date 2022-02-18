import { ApiCourseMapper } from "../mapper/api-course.mapper"
import { CourseDto } from "../model/course.dto"
import { GetCourseService } from "src/domain/use-case/course/get-course/get-course.service"
import { Injectable } from "@nestjs/common"

@Injectable()
export class ApiGetCourseService {

    constructor(
        private readonly getCourseService: GetCourseService,
        private readonly apiCourseMapper: ApiCourseMapper
    ) { }

    async execute(id: string): Promise<CourseDto> {
        return await this.getCourseService.execute(id)
            .then((course) => this.apiCourseMapper.fromModelToDto(course))
    }

}

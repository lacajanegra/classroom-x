import { ApiCoursesFilterMapper } from "../mapper/api-courses-filter.mapper"
import { ApiCoursesMapper } from "../mapper/api-courses.mapper"
import { CourseDto } from "../model/course.dto"
import { CoursesFilterRequestDto } from "../model/courses-filter-request.dto"
import { GetCoursesService } from "src/domain/use-case/course/get-courses/get-courses.service"
import { Injectable } from "@nestjs/common"

@Injectable()
export class ApiGetCoursesService {

    constructor(
        private readonly apiCoursesFilterMapper: ApiCoursesFilterMapper,
        private readonly getCoursesService: GetCoursesService,
        private readonly apiCoursesMapper: ApiCoursesMapper
    ) { }

    async execute(filter: CoursesFilterRequestDto): Promise<CourseDto[]> {
        const filterModel = this.apiCoursesFilterMapper.fromDtoToModel(filter)
        return await this.getCoursesService.execute(filterModel)
            .then((courses) => this.apiCoursesMapper.fromModelToDto(courses))
    }

}

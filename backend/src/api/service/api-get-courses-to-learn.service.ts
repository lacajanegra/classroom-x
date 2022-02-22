import { Injectable } from "@nestjs/common"
import { GetCoursesToLearnService } from "src/domain/use-case/student/to-learn/get-courses-to-learn.service"
import { ApiCoursesToLearnMapper } from "../mapper/api-courses-to-learn.mapper"
import { CourseDto } from "../model/course.dto"

@Injectable()
export class ApiGetCoursesToLearnService {

    constructor(
        private readonly getCoursesToLearnService: GetCoursesToLearnService,
        private readonly apiCoursesToLearnMapper: ApiCoursesToLearnMapper
    ) { }

    async execute(userId: string): Promise<CourseDto[]> {
        return await this.getCoursesToLearnService.execute(userId)
            .then((relations) => this.apiCoursesToLearnMapper.fromModelToDto(relations))
    }
}

import { Injectable } from "@nestjs/common"
import { CourseDto } from "../model/course.dto"
import { ApiCoursesToTeachMapper } from "../mapper/api-courses-to-teach.mapper"
import { GetCoursesToTeachService } from "src/domain/use-case/teacher/to-teach/get-courses-to-teach.service"

@Injectable()
export class ApiGetCoursesToTeachService {

    constructor(
        private readonly getCoursesToTeachService: GetCoursesToTeachService,
        private readonly apiCoursesToTeachMapper: ApiCoursesToTeachMapper
    ) { }

    async execute(userId: string): Promise<CourseDto[]> {
        return await this.getCoursesToTeachService.execute(userId)
            .then((relations) => this.apiCoursesToTeachMapper.fromModelToDto(relations))
    }
}

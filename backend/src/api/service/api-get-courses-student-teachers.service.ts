import { ApiCoursesTeachersMapper } from "../mapper/api-courses-teachers.mapper"
import { CourseTeachersDto } from "../model/course-teachers.dto"
import { GetCoursesTeachersService } from "src/domain/use-case/student/get-courses-teachers/get-courses-teachers.service"
import { Injectable } from "@nestjs/common"

@Injectable()
export class ApiGetCoursesStudentTeachersService {

    constructor(
        private readonly getCoursesTeachersService: GetCoursesTeachersService,
        private readonly apiCoursesTeachersMapper: ApiCoursesTeachersMapper
    ) { }

    async execute(userId: string): Promise<CourseTeachersDto[]> {
        return await this.getCoursesTeachersService.execute(userId)
            .then((relations) => this.apiCoursesTeachersMapper.fromModelToDto(relations))
    }
}

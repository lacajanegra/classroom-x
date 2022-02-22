import { ApiCoursesTeacherMapper } from "../mapper/api-courses-teacher.mapper"
import { CourseTeacherDto } from "../model/course-teacher.dto"
import { GetCoursesTeacherService } from "src/domain/use-case/teacher/get-courses/get-courses-teacher.service"
import { Injectable } from "@nestjs/common"

@Injectable()
export class ApiGetCoursesTeacherService {

    constructor(
        private readonly getCoursesTeacherService: GetCoursesTeacherService,
        private readonly apiCoursesTeacherMapper: ApiCoursesTeacherMapper
    ) { }

    async execute(userId: string): Promise<CourseTeacherDto[]> {
        return await this.getCoursesTeacherService.execute(userId)
            .then((relations) => this.apiCoursesTeacherMapper.fromModelToDto(relations))
    }
}

import { ApiCoursesStudentMapper } from "../mapper/api-courses-student.mapper"
import { CourseStudentDto } from "../model/course-student.dto"
import { GetCoursesStudentService } from "src/domain/use-case/student/get-courses/get-courses-student.service"
import { Injectable } from "@nestjs/common"

@Injectable()
export class ApiGetCoursesStudentService {

    constructor(
        private readonly getCoursesStudentService: GetCoursesStudentService,
        private readonly apiCoursesStudentMapper: ApiCoursesStudentMapper
    ) { }

    async execute(userId: string): Promise<CourseStudentDto[]> {
        return await this.getCoursesStudentService.execute(userId)
            .then((relations) => this.apiCoursesStudentMapper.fromModelToDto(relations))
    }
}

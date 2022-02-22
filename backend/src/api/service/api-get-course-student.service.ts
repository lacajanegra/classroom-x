import { GetCourseStudentService } from "src/domain/use-case/student/get-course/get-course-student.service"
import { Injectable } from "@nestjs/common"
import { ApiCourseStudentMapper } from "../mapper/api-course-student.mapper"
import { CourseStudentDto } from "../model/course-student.dto"

@Injectable()
export class ApiGetCourseStudentService {

    constructor(
        private readonly getCourseStudentService: GetCourseStudentService,
        private readonly apiCourseStudentMapper: ApiCourseStudentMapper
    ) { }

    async execute(courseTeacherId: string, userId: string): Promise<CourseStudentDto> {
        return await this.getCourseStudentService.execute(courseTeacherId, userId)
            .then((relation) => this.apiCourseStudentMapper.fromModelToDto(relation))
    }
}

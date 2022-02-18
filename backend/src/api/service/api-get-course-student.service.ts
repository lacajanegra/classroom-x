import { ApiCourseStudentDetailsMapper } from "../mapper/api-course-student-details.mapper"
import { CourseStudentDetailsDto } from "../model/course-student-details.dto"
import { GetCourseStudentService } from "src/domain/use-case/student/get-course/get-course-student.service"
import { Injectable } from "@nestjs/common"

@Injectable()
export class ApiGetCourseStudentService {

    constructor(
        private readonly getCourseStudentService: GetCourseStudentService,
        private readonly apiCourseStudentDetailsMapper: ApiCourseStudentDetailsMapper
    ) { }

    async execute(courseTeacherId: string, userId: string): Promise<CourseStudentDetailsDto> {
        return await this.getCourseStudentService.execute(courseTeacherId, userId)
            .then((relation) => this.apiCourseStudentDetailsMapper.fromModelToDto(relation))
    }
}

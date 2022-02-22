import { ApiCourseTeacherDetailsMapper } from "../mapper/api-course-teacher-details.mapper"
import { CourseTeacherDetailsDto } from "../model/course-teacher-details.dto"
import { GetCourseTeacherService } from "src/domain/use-case/teacher/get-course/get-course-teacher.service"
import { Injectable } from "@nestjs/common"

@Injectable()
export class ApiGetCourseTeacherService {

    constructor(
        private readonly getCourseTeacherService: GetCourseTeacherService,
        private readonly apiCourseTeacherDetailsMapper: ApiCourseTeacherDetailsMapper
    ) { }

    async execute(courseTeacherId: string, userId: string): Promise<CourseTeacherDetailsDto> {
        return await this.getCourseTeacherService.execute(courseTeacherId, userId)
            .then((relation) => this.apiCourseTeacherDetailsMapper.fromModelToDto(relation))
    }
}

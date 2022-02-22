import { AddCourseStudentService } from "src/domain/use-case/student/add-course/add-course-student.service"
import { ApiCourseStudentMapper } from "../mapper/api-course-student.mapper"
import { CourseStudentDto } from "../model/course-student.dto"
import { Injectable } from "@nestjs/common"

@Injectable()
export class ApiAddCourseStudentService {

    constructor(
        private readonly addCourseStudentService: AddCourseStudentService,
        private readonly apiCourseStudentMapper: ApiCourseStudentMapper
    ) { }

    async execute(courseTeacherId: string, userId: string): Promise<CourseStudentDto> {
        return await this.addCourseStudentService.execute(courseTeacherId, userId)
            .then((relation) => this.apiCourseStudentMapper.fromModelToDto(relation))
    }

}

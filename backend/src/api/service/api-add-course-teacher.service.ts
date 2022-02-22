import { AddCourseTeacherService } from "src/domain/use-case/teacher/add-course/add-course-teacher.service"
import { ApiCourseTeacherMapper } from "../mapper/api-course-teacher.mapper"
import { CourseTeacherDto } from "../model/course-teacher.dto"
import { Injectable } from "@nestjs/common"

@Injectable()
export class ApiAddCourseTeacherService {

    constructor(
        private readonly addCourseTeacherService: AddCourseTeacherService,
        private readonly apiCourseTeacherMapper: ApiCourseTeacherMapper
    ) { }

    async execute(courseId: string, userId: string): Promise<CourseTeacherDto> {
        return await this.addCourseTeacherService.execute(courseId, userId)
            .then((relation) => this.apiCourseTeacherMapper.fromModelToDto(relation))
    }

}

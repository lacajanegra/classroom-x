import { ApiCourseTeacherStudentMapper } from "../mapper/api-course-teacher-student.mapper"
import { CourseStudentQualificationRequestDto } from "../model/course-student-qualification-request.dto"
import { CourseTeacherStudentDetailsDto } from "../model/course-teacher-student-details.dto"
import { Injectable } from "@nestjs/common"
import { UpdateQualificationModel } from "src/domain/model/update-qualification.model"
import { UpdateQualificationService } from "src/domain/use-case/teacher/update-qualification/update-qualification.service"

@Injectable()
export class ApiUpdateCourseQualificationService {

    constructor(
        private readonly updateQualificationService: UpdateQualificationService,
        private readonly apiCourseTeacherStudentMapper: ApiCourseTeacherStudentMapper
    ) { }

    async execute(request: CourseStudentQualificationRequestDto, courseTeacherId: string, courseStudentId: string, userId: string): Promise<CourseTeacherStudentDetailsDto> {
        const { qualification } = request
        const requestModel: UpdateQualificationModel = { courseTeacherId: courseTeacherId, courseStudentId: courseStudentId, qualification: qualification }
        return await this.updateQualificationService.execute(requestModel, userId)
            .then((relation) => this.apiCourseTeacherStudentMapper.fromModelToDto(relation))
    }

}

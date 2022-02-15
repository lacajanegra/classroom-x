import { CourseTeacherDetailsModel } from 'src/domain/model/course-teacher-details.model';
import { GetCourseTeacherRepository } from 'src/domain/repository/get-course-teacher.repository';
import { GetCourseTeacherService } from './get-course-teacher.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetCourseTeacherUseCaseService implements GetCourseTeacherService {

    constructor(private readonly getCourseTeacherRepository: GetCourseTeacherRepository) { }

    async execute(courseId: string, userId: string): Promise<CourseTeacherDetailsModel> {
        return await this.getCourseTeacherRepository.getCourse(courseId, userId)
    }
}

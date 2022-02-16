import { CourseTeacherModel } from 'src/domain/model/course-teacher.model';
import { GetCoursesTeacherRepository } from 'src/domain/repository/get-courses-teacher.repository';
import { GetCoursesTeacherService } from './get-courses-teacher.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetCoursesTeacherUseCaseService implements GetCoursesTeacherService {

    constructor(private readonly getCoursesTeacherRepository: GetCoursesTeacherRepository) { }

    async execute(userId: string): Promise<CourseTeacherModel[]> {
        return await this.getCoursesTeacherRepository.getCourses(userId)
    }
}

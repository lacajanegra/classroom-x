import { CourseStudentModel } from 'src/domain/model/course-student.model';
import { GetCoursesStudentRepository } from 'src/domain/repository/get-courses-student.repository';
import { GetCoursesStudentService } from './get-courses-student.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetCoursesStudentUseCaseService implements GetCoursesStudentService {

    constructor(private readonly getCoursesStudentRepository: GetCoursesStudentRepository) { }

    async execute(userId: string): Promise<CourseStudentModel[]> {
        return await this.getCoursesStudentRepository.getCourses(userId)
    }
}

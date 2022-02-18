import { CourseTeachersModel } from 'src/domain/model/course-teachers.model';
import { GetCoursesTeachersRepository } from 'src/domain/repository/get-courses-teachers.repository';
import { GetCoursesTeachersService } from './get-courses-teachers.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetCoursesTeachersUseCaseService implements GetCoursesTeachersService {

    constructor(private readonly getCoursesTeachersRepository: GetCoursesTeachersRepository) { }

    async execute(userId: string): Promise<CourseTeachersModel[]> {
        return await this.getCoursesTeachersRepository.getCourses(userId)
    }
}

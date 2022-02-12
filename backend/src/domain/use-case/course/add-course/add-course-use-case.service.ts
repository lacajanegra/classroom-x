import { AddCourseRepository } from '../../../repository/add-course.repository';
import { AddCourseService } from './add-course.service';
import { CourseModel } from 'src/domain/model/course.model';
import { CourseRequestModel } from 'src/domain/model/course-request.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddCourseUseCaseService implements AddCourseService {

    constructor(private readonly addCourseRepository: AddCourseRepository) { }

    async execute(request: CourseRequestModel, userId: string): Promise<CourseModel> {
        return await this.addCourseRepository.addCourse(request, userId)
    }
}

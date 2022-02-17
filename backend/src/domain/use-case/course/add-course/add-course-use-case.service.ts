import { AddCourseRepository } from '../../../repository/add-course.repository';
import { AddCourseService } from './add-course.service';
import { CourseModel } from 'src/domain/model/course.model';
import { CreateCourseModel } from 'src/domain/model/create-course.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddCourseUseCaseService implements AddCourseService {

    constructor(private readonly addCourseRepository: AddCourseRepository) { }

    async execute(request: CreateCourseModel): Promise<CourseModel> {
        return await this.addCourseRepository.addCourse(request)
    }
}

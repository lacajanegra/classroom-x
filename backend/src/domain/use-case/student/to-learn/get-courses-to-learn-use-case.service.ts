import { GetCoursesToLearnService } from './get-courses-to-learn.service';
import { Injectable, NotImplementedException } from '@nestjs/common';
import { GetCoursesToLearnRepository } from 'src/domain/repository/get-courses-to-learn.repository';
import { CourseToLearnModel } from 'src/domain/model/course-to-learn.model';

@Injectable()
export class GetCoursesToLearnUseCaseService implements GetCoursesToLearnService {

    constructor(private readonly getCoursesToLearnRepository: GetCoursesToLearnRepository) { }

    async execute(userId: string): Promise<CourseToLearnModel[]> {
        throw new NotImplementedException()
        //return await this.getCoursesToLearnRepository.getCourses()
        //return courses.filter( (course) => course.teachers.filter( (teacher) => teacher. ) )
    }
}

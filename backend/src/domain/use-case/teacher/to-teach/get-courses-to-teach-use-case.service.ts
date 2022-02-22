import { Injectable, NotImplementedException } from '@nestjs/common';
import { CourseToTeachModel } from 'src/domain/model/course-to-teach.model';
import { GetCoursesToTeachRepository } from 'src/domain/repository/get-courses-to-teach.repository';
import { GetCoursesToTeachService } from './get-courses-to-teach.service';

@Injectable()
export class GetCoursesToTeachUseCaseService implements GetCoursesToTeachService {

    constructor(private readonly getCoursesToTeachRepository: GetCoursesToTeachRepository) { }

    async execute(userId: string): Promise<CourseToTeachModel[]> {
        const courses = await this.getCoursesToTeachRepository.getCourses()
        return courses.filter((course) => !course.teachers.map((teachers) => teachers.teacher.id).includes(userId))
    }
}

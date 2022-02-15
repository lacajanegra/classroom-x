import { CourseRepository } from './source/course.repository';
import { DelCourseRepository } from 'src/domain/repository/del-course.repository';
import { DeleteResult } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DataDelCourseRepository implements DelCourseRepository {

    constructor(private readonly courseRepository: CourseRepository) { }

    async delCourse(id: string): Promise<boolean> {
        return await this.courseRepository.delCourseById(id)
            .then((response: DeleteResult) => { return response.affected !== 0 })
    }

}
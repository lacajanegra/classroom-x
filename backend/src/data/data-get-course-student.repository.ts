import { Injectable, NotImplementedException } from '@nestjs/common';

import { CourseEntity } from './entity/course.entity';
import { CourseModel } from 'src/domain/model/course.model';
import { CourseRepository } from './source/course.repository';
import { CourseStudentModel } from 'src/domain/model/course-student.model';
import { CourseTeacherDetailsModel } from 'src/domain/model/course-teacher-details.model';
import { DataCourseMapper } from './mapper/data-course.mapper';
import { GetCourseRepository } from 'src/domain/repository/get-course.repository';
import { GetCourseStudentRepository } from 'src/domain/repository/get-course-student.repository';
import { GetCourseTeacherRepository } from 'src/domain/repository/get-course-teacher.repository';

@Injectable()
export class DataGetCourseStudentRepository implements GetCourseStudentRepository {

    constructor(
        private readonly courseRepository: CourseRepository,
        private readonly dataCourseMapper: DataCourseMapper
    ) { }

    async getCourse(courseId: string, userId: string): Promise<CourseStudentModel> {
        throw new NotImplementedException()
    }

}
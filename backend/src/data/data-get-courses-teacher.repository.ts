import { Injectable, NotImplementedException } from '@nestjs/common';

import { CourseTeacherEntity } from './entity/course-teacher.entity';
import { CourseTeacherModel } from 'src/domain/model/course-teacher.model';
import { CourseTeacherRepository } from './source/course-teacher.repository';
import { DataCoursesTeacherMapper } from './mapper/data-courses-teacher.mapper';
import { GetCoursesTeacherRepository } from 'src/domain/repository/get-courses-teacher.repository';

@Injectable()
export class DataGetCoursesTeacherRepository implements GetCoursesTeacherRepository {

    constructor(
        private readonly courseTeacherRepository: CourseTeacherRepository,
        private readonly dataCoursesTeacherMapper: DataCoursesTeacherMapper
    ) { }

    async getCourses(userId: string): Promise<CourseTeacherModel[]> {
        return await this.courseTeacherRepository.getAll(userId)
            .then((response: CourseTeacherEntity[]) => { return this.dataCoursesTeacherMapper.fromEntityToModel(response) })
    }

}
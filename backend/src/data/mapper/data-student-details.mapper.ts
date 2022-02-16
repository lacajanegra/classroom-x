import { CourseEntity } from '../entity/course.entity';
import { CourseModel } from 'src/domain/model/course.model';
import { CourseStudentEntity } from '../entity/course-student.entity';
import { CourseStudentModel } from 'src/domain/model/course-student.model';
import { DataCourseMapper } from './data-course.mapper';
import { DataStudentMapper } from './data-student.mapper';
import { Injectable } from "@nestjs/common";
import { StudentDetailsModel } from 'src/domain/model/student-details.model';
import { StudentModel } from 'src/domain/model/student.model';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class DataStudentDetailsMapper {

    constructor(
        private readonly dataCourseMapper: DataCourseMapper,
        private readonly dataStudentMapper: DataStudentMapper
    ) { }

    fromEntityToModel(entity: CourseStudentEntity): StudentDetailsModel {

        if (!entity) {
            return undefined
        }

        const { id, qualification, course, user } = entity
        const model: CourseStudentModel = {
            id: id,
            course: this.getCourse(course),
            student: this.getStudent(user),
            qualification: qualification
        }

        return model
    }

    private getCourse(course: CourseEntity): CourseModel {
        return this.dataCourseMapper.fromEntityToModel(course)
    }

    private getStudent(student: UserEntity): StudentModel {
        return this.dataStudentMapper.fromEntityToModel(student)
    }
}
import { CourseEntity } from '../entity/course.entity';
import { CourseModel } from 'src/domain/model/course.model';
import { CourseStudentDetailsModel } from 'src/domain/model/course-student-details.model';
import { CourseStudentEntity } from '../entity/course-student.entity';
import { DataCourseMapper } from './data-course.mapper';
import { DataStudentMapper } from './data-student.mapper';
import { Injectable } from "@nestjs/common";
import { StudentModel } from 'src/domain/model/student.model';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class DataCourseStudentDetailsMapper {

    constructor(
        private readonly dataCourseMapper: DataCourseMapper,
        private readonly dataStudentMapper: DataStudentMapper
    ) { }

    fromEntityToModel(entity: CourseStudentEntity): CourseStudentDetailsModel {

        if (!entity) {
            return undefined
        }

        const { id, qualification } = entity
        const model: CourseStudentDetailsModel = {
            id: id,
            course: undefined, //this.getCourse(course),
            student: undefined, //this.getStudent(student),
            qualification: qualification
        }

        return model
    }

    private getCourse(course: CourseEntity): CourseModel {
        return this.dataCourseMapper.fromEntityToModel(course)
    }

    private getStudent(user: UserEntity): StudentModel {
        return this.dataStudentMapper.fromEntityToModel(user)
    }

}
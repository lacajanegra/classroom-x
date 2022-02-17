import { CourseModel } from 'src/domain/model/course.model';
import { CourseStudentDetailsModel } from 'src/domain/model/course-student-details.model';
import { CourseStudentEntity } from '../entity/course-student.entity';
import { CourseTeacherEntity } from '../entity/course-teacher.entity';
import { DataCourseMapper } from './data-course.mapper';
import { DataStudentMapper } from './data-student.mapper';
import { DataTeacherMapper } from './data-teacher.mapper';
import { Injectable } from "@nestjs/common";
import { StudentModel } from 'src/domain/model/student.model';
import { TeacherModel } from 'src/domain/model/teacher.model';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class DataCourseStudentDetailsMapper {

    constructor(
        private readonly dataCourseMapper: DataCourseMapper,
        private readonly dataTeacherMapper: DataTeacherMapper,
        private readonly dataStudentMapper: DataStudentMapper
    ) { }

    fromEntityToModel(entity: CourseStudentEntity): CourseStudentDetailsModel {

        if (!entity) {
            return undefined
        }

        const { id, qualification, courseTeacher, student } = entity
        const model: CourseStudentDetailsModel = {
            id: id,
            course: this.getCourse(courseTeacher),
            teacher: this.getTeacher(courseTeacher),
            student: this.getStudent(student),
            qualification: qualification
        }

        return model
    }

    private getCourse(courseTeacher: CourseTeacherEntity): CourseModel {
        return this.dataCourseMapper.fromEntityToModel(courseTeacher.course)
    }

    private getTeacher(courseTeacher: CourseTeacherEntity): TeacherModel {
        return this.dataTeacherMapper.fromEntityToModel(courseTeacher.teacher)
    }

    private getStudent(user: UserEntity): StudentModel {
        return this.dataStudentMapper.fromEntityToModel(user)
    }

}
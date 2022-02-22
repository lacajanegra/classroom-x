import { CourseEntity } from '../entity/course.entity';
import { CourseModel } from 'src/domain/model/course.model';
import { CourseStudentModel } from "src/domain/model/course-student.model";
import { CourseStudentEntity } from '../entity/course-student.entity';
import { CourseTeacherDetailsModel } from 'src/domain/model/course-teacher-details.model';
import { CourseTeacherEntity } from "../entity/course-teacher.entity";
import { DataCourseMapper } from './data-course.mapper';
import { DataTeacherMapper } from './data-teacher.mapper';
import { Injectable } from "@nestjs/common";
import { TeacherModel } from 'src/domain/model/teacher.model';
import { UserEntity } from '../entity/user.entity';
import { DataCoursesStudentMapper } from './data-courses-student.mapper';

@Injectable()
export class DataCourseTeacherDetailsMapper {

    constructor(
        private readonly dataCourseMapper: DataCourseMapper,
        private readonly dataTeacherMapper: DataTeacherMapper,
        private readonly dataCoursesStudentsMapper: DataCoursesStudentMapper
    ) { }

    fromEntityToModel(entity: CourseTeacherEntity): CourseTeacherDetailsModel {

        if (!entity) {
            return undefined
        }

        const { id, course, teacher, courseStudents } = entity
        const model: CourseTeacherDetailsModel = {
            id: id,
            course: this.getCourse(course),
            teacher: this.getTeacher(teacher),
            students: this.getStudentsDetails(courseStudents)
        }

        return model
    }

    private getCourse(course: CourseEntity): CourseModel {
        return this.dataCourseMapper.fromEntityToModel(course)
    }

    private getTeacher(teacher: UserEntity): TeacherModel {
        return this.dataTeacherMapper.fromEntityToModel(teacher)
    }

    private getStudentsDetails(courseStudents: CourseStudentEntity[]): CourseStudentModel[] {
        return this.dataCoursesStudentsMapper.fromEntityToModel(courseStudents)
    }

}
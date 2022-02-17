import { CourseEntity } from '../entity/course.entity';
import { CourseModel } from 'src/domain/model/course.model';
import { CourseStudentDetailsModel } from "src/domain/model/course-student-details.model";
import { CourseTeacherDetailsModel } from 'src/domain/model/course-teacher-details.model';
import { CourseTeacherEntity } from "../entity/course-teacher.entity";
import { DataCourseMapper } from './data-course.mapper';
import { DataCourseStudentsDetailsMapper } from "./data-course-students-details.mapper";
import { DataTeacherMapper } from './data-teacher.mapper';
import { Injectable } from "@nestjs/common";
import { TeacherModel } from 'src/domain/model/teacher.model';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class DataCourseTeacherDetailsMapper {

    constructor(
        private readonly dataCourseMapper: DataCourseMapper,
        private readonly dataTeacherMapper: DataTeacherMapper,
        private readonly dataStudentsDetailsMapper: DataCourseStudentsDetailsMapper
    ) { }

    fromEntityToModel(entity: CourseTeacherEntity): CourseTeacherDetailsModel {

        if (!entity) {
            return undefined
        }

        const { id, course, teacher } = entity
        const model: CourseTeacherDetailsModel = {
            id: id,
            course: this.getCourse(course),
            teacher: this.getTeacher(teacher),
            students: this.getStudentsDetails(teacher)
        }

        return model
    }

    private getCourse(course: CourseEntity): CourseModel {
        return this.dataCourseMapper.fromEntityToModel(course)
    }

    private getTeacher(teacher: UserEntity): TeacherModel {
        return this.dataTeacherMapper.fromEntityToModel(teacher)
    }

    private getStudentsDetails(teacher: UserEntity): CourseStudentDetailsModel[] {
        return this.dataStudentsDetailsMapper.fromEntityToModel(teacher.courseStudents)
    }

}
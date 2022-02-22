import { CourseEntity } from '../entity/course.entity';
import { CourseModel } from 'src/domain/model/course.model';
import { CourseTeacherEntity } from "../entity/course-teacher.entity";
import { CourseTeacherModel } from "src/domain/model/course-teacher.model";
import { DataCourseMapper } from './data-course.mapper';
import { DataTeacherMapper } from './data-teacher.mapper';
import { Injectable } from "@nestjs/common";
import { TeacherModel } from 'src/domain/model/teacher.model';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class DataCourseTeacherMapper {

    constructor(
        private readonly dataCourseMapper: DataCourseMapper,
        private readonly dataTeacherMapper: DataTeacherMapper
    ) { }

    fromEntityToModel(entity: CourseTeacherEntity): CourseTeacherModel {

        if (!entity) {
            return undefined
        }

        const { id, course, teacher } = entity
        const model: CourseTeacherModel = {
            id: id,
            course: this.getCourse(course),
            teacher: this.getTeacher(teacher)
        }

        return model
    }

    private getCourse(course: CourseEntity): CourseModel {
        return this.dataCourseMapper.fromEntityToModel(course)
    }

    private getTeacher(teacher: UserEntity): TeacherModel {
        return this.dataTeacherMapper.fromEntityToModel(teacher)
    }

}
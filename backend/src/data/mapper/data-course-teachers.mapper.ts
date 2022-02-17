import { CourseEntity } from '../entity/course.entity';
import { CourseTeacherEntity } from "../entity/course-teacher.entity";
import { CourseTeacherModel } from 'src/domain/model/course-teacher.model';
import { CourseTeachersModel } from 'src/domain/model/course-teachers.model';
import { DataCoursesTeacherMapper } from './data-courses-teacher.mapper';
import { Injectable } from "@nestjs/common";

@Injectable()
export class DataCourseTeachersMapper {

    constructor(private readonly dataCoursesTeacherMapper: DataCoursesTeacherMapper) { }

    fromEntityToModel(entity: CourseEntity): CourseTeachersModel {

        if (!entity) {
            return undefined
        }

        const { courseTeachers } = entity
        const model: CourseTeachersModel = {
            course: entity,
            teachers: this.getTeachers(courseTeachers)
        }

        return model
    }

    private getTeachers(courseTeachers: CourseTeacherEntity[]): CourseTeacherModel[] {
        return this.dataCoursesTeacherMapper.fromEntityToModel(courseTeachers)
    }

}
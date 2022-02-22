import { CourseEntity } from '../entity/course.entity';
import { CourseTeacherEntity } from "../entity/course-teacher.entity";
import { CourseTeacherModel } from 'src/domain/model/course-teacher.model';
import { DataCoursesTeacherMapper } from './data-courses-teacher.mapper';
import { Injectable } from "@nestjs/common";
import { CourseToTeachModel } from 'src/domain/model/course-to-teach.model';

@Injectable()
export class DataCourseToTeachMapper {

    constructor(private readonly dataCoursesTeacherMapper: DataCoursesTeacherMapper) { }

    fromEntityToModel(entity: CourseEntity): CourseToTeachModel {

        if (!entity) {
            return undefined
        }

        const { courseTeachers } = entity
        const model: CourseToTeachModel = {
            course: entity,
            teachers: this.getTeachers(courseTeachers)
        }

        return model
    }

    private getTeachers(courseTeachers: CourseTeacherEntity[]): CourseTeacherModel[] {
        return this.dataCoursesTeacherMapper.fromEntityToModel(courseTeachers)
    }

}
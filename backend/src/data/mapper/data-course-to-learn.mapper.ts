import { CourseEntity } from '../entity/course.entity';
import { CourseTeacherEntity } from "../entity/course-teacher.entity";
import { CourseTeacherModel } from 'src/domain/model/course-teacher.model';
import { DataCoursesTeacherMapper } from './data-courses-teacher.mapper';
import { Injectable } from "@nestjs/common";
import { CourseToLearnModel } from 'src/domain/model/course-to-learn.model';

@Injectable()
export class DataCourseToLearnMapper {

    constructor(private readonly dataCoursesTeacherMapper: DataCoursesTeacherMapper) { }

    fromEntityToModel(entity: CourseEntity): CourseToLearnModel {

        if (!entity) {
            return undefined
        }

        const { courseTeachers } = entity
        const model: CourseToLearnModel = {
            course: entity,
            teachers: this.getTeachers(courseTeachers)
        }

        return model
    }

    private getTeachers(courseTeachers: CourseTeacherEntity[]): CourseTeacherModel[] {
        return this.dataCoursesTeacherMapper.fromEntityToModel(courseTeachers)
    }

}
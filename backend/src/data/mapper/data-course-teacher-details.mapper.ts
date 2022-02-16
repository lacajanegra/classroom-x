import { Injectable, NotImplementedException } from "@nestjs/common";

import { CourseEntity } from '../entity/course.entity';
import { CourseModel } from 'src/domain/model/course.model';
import { CourseStudentEntity } from '../entity/course-student.entity';
import { CourseStudentModel } from 'src/domain/model/course-student.model';
import { CourseTeacherDetailsModel } from 'src/domain/model/course-teacher-details.model';
import { CourseTeacherEntity } from "../entity/course-teacher.entity";
import { CourseTeacherModel } from "src/domain/model/course-teacher.model";
import { DataCourseMapper } from './data-course.mapper';
import { DataStudentDetailsMapper } from "./data-student-details.mapper";
import { DataStudentMapper } from './data-student.mapper';
import { DataTeacherMapper } from "./data-teacher.mapper";
import { StudentDetailsModel } from '../../domain/model/student-details.model';
import { StudentModel } from 'src/domain/model/student.model';
import { TeacherModel } from "src/domain/model/teacher.model";
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class DataCourseTeacherDetailsMapper {

    constructor(
        private readonly dataCourseMapper: DataCourseMapper,
        private readonly dataTeacherMapper: DataTeacherMapper,
        private readonly dataStudentDetailsMapper: DataStudentDetailsMapper
    ) { }

    fromEntityToModel(entity: CourseTeacherEntity): CourseTeacherDetailsModel {

        if (!entity) {
            return undefined
        }

        const { id, course, user } = entity
        const model: CourseTeacherDetailsModel = {
            id: id,
            course: this.getCourse(course),
            teacher: this.getTeacher(user),
            students : this.getStudentsDetails(course),
            total: this.getTotal(course)
        }

        return model
    }

    private getCourse(course: CourseEntity): CourseModel {
        return this.dataCourseMapper.fromEntityToModel(course)
    }

    private getTeacher(teacher: UserEntity): TeacherModel {
        return this.dataTeacherMapper.fromEntityToModel(teacher)
    }
    
    private getStudentsDetails(course: CourseEntity) : StudentDetailsModel[] {
        throw new NotImplementedException()//  return this.dataStudentDetailsMapper.fromEntityToModel(course.courseStudents)
    }

    private getTotal(course: CourseEntity): number {
        return course.courseTeachers.length
    }
}
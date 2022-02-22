import { Injectable } from "@nestjs/common";
import { CourseToLearnModel } from "src/domain/model/course-to-learn.model";
import { CourseToLearnDto } from "../model/course-to-learn.dto";
import { CourseTeacherModel } from "src/domain/model/course-teacher.model";
import { ApiCourseTeacherToLearnMapper } from "./api-course-teacher-to-learn.mapper";
import { CourseTeacherDto } from "../model/course-teacher.dto";

@Injectable()
export class ApiCourseToLearnMapper {

    constructor(private readonly apiCourseTeacherToLearnMapper: ApiCourseTeacherToLearnMapper) { }

    fromModelToDto(courseToLearn: CourseToLearnModel): CourseToLearnDto {

        const { course, teachers } = courseToLearn

        const model: CourseToLearnDto = {
            id: course.id,
            name: course.name,
            teachers: this.getTeachers(teachers)
        }

        return model
    }

    private getTeachers(teachers: CourseTeacherModel[]): CourseTeacherDto[] {
        return teachers.map((teacher) => { return this.apiCourseTeacherToLearnMapper.fromModelToDto(teacher) })
    }

}
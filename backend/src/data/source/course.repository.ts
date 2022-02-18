import { CourseEntity } from '../entity/course.entity';
import { CoursesFilterModel } from 'src/domain/model/courses-filter.model';
import { CreateCourseModel } from 'src/domain/model/create-course.model';
import { DeleteResult } from "typeorm";

export abstract class CourseRepository {

    abstract createCourse(request: CreateCourseModel): Promise<CourseEntity>

    abstract findCourseById(id: string): Promise<CourseEntity>

    abstract findCoursesByFilter(filter: CoursesFilterModel): Promise<CourseEntity[]>

    abstract delCourseById(id: string): Promise<DeleteResult>

    abstract updateCourse(entity: CourseEntity): Promise<CourseEntity>

    abstract getRelationWithTeachers(userId: string): Promise<CourseEntity[]>

}
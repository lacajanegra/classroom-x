import { CourseEntity } from '../entity/course.entity';
import { CourseRequestModel } from "src/domain/model/course-request.model";
import { CoursesFilterRequestModel } from "src/domain/model/courses-filter-request.model";
import { DeleteResult } from "typeorm";

export abstract class CourseRepository {

    abstract createCourse(request: CourseRequestModel): Promise<CourseEntity>

    abstract findCourseById(id: string): Promise<CourseEntity>

    abstract findCoursesByFilter(filter: CoursesFilterRequestModel): Promise<CourseEntity[]>

    abstract delCourseById(id: string): Promise<DeleteResult>

    abstract updateCourse(entity: CourseEntity): Promise<CourseEntity>

}
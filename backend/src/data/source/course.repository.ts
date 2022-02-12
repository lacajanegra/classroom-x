import { CourseEntity } from '../entity/course.entity';
import { CourseModel } from "src/domain/model/course.model";
import { CourseRequestModel } from "src/domain/model/course-request.model";
import { CoursesFilterRequestModel } from "src/domain/model/courses-filter-request.model";
import { DeleteResult } from "typeorm";
import { UserEntity } from "../entity/user.entity";

export abstract class CourseRepository {

    abstract createCourse(request: CourseRequestModel, user: UserEntity): Promise<CourseEntity>

    abstract findCourseById(id: string, user: UserEntity): Promise<CourseEntity>

    abstract findCoursesByFilter(filter: CoursesFilterRequestModel, user: UserEntity): Promise<CourseEntity[]>

    abstract delCourseById(id: string, user: UserEntity): Promise<DeleteResult>

    abstract updateCourse(request: CourseModel, user: UserEntity): Promise<CourseEntity>

}
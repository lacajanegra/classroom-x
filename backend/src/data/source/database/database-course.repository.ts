import { ConflictException, Injectable, Logger, ServiceUnavailableException } from "@nestjs/common";
import { DeleteResult, EntityRepository, Repository } from "typeorm";

import { CourseEntity } from '../../entity/course.entity';
import { CourseModel } from "src/domain/model/course.model";
import { CourseRepository } from "../course.repository";
import { CourseRequestModel } from "src/domain/model/course-request.model";
import { CoursesFilterRequestModel } from "src/domain/model/courses-filter-request.model";
import { UserEntity } from '../../entity/user.entity';

@Injectable()
@EntityRepository(CourseEntity)
export class DatabaseCourseRepository extends Repository<CourseEntity> implements CourseRepository {

    private logger = new Logger('DatabaseCourseRepository')

    async createCourse(request: CourseRequestModel, user: UserEntity): Promise<CourseEntity> {
        const { name } = request
        const entity = this.create({ name: name, user: user })

        try {
            return await this.save(entity)
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException("Course already exists")
            } else {
                this.logger.error("Database connection error: ", JSON.stringify(error))
                throw new ServiceUnavailableException("Database connection error")
            }
        }
    }

    async findCourseById(id: string, user: UserEntity): Promise<CourseEntity> {

        try {
            return await this.findOne({ id: id, user: user })
        } catch (error) {
            this.logger.error("Database connection error: ", JSON.stringify(error))
            throw new ServiceUnavailableException("Database connection error")
        }
    }

    async findCoursesByFilter(filter: CoursesFilterRequestModel, user: UserEntity): Promise<CourseEntity[]> {

        try {
            const { search } = filter
            const query = this.createQueryBuilder('course')

            query.where({ user: user })

            if (search) {
                query.andWhere('course.name ilike :search', { search: `%${search}%` })
            }

            return await query.getMany()
        } catch (error) {
            this.logger.error("Database connection error: ", JSON.stringify(error))
            throw new ServiceUnavailableException("Database connection error")
        }
    }

    async delCourseById(id: string, user: UserEntity): Promise<DeleteResult> {

        try {
            return await this.delete({ id: id, user: user })
        } catch (error) {
            this.logger.error("Database connection error: ", JSON.stringify(error))
            throw new ServiceUnavailableException("Database connection error")
        }
    }

    async updateCourse(request: CourseModel, user: UserEntity): Promise<CourseEntity> {

        try {
            const { id, name } = request
            const entity = await this.findCourseById(id, user)
            entity.name = name
            return await this.save(entity)
        } catch (error) {
            this.logger.error("Database connection error: ", JSON.stringify(error))
            throw new ServiceUnavailableException("Database connection error")
        }
    }

}
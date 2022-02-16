import { ConflictException, Injectable, Logger, ServiceUnavailableException } from "@nestjs/common";
import { DeleteResult, EntityRepository, Repository } from "typeorm";

import { CourseEntity } from '../../entity/course.entity';
import { CourseRepository } from "../course.repository";
import { CoursesFilterRequestModel } from "src/domain/model/courses-filter-request.model";

@Injectable()
@EntityRepository(CourseEntity)
export class DatabaseCourseRepository extends Repository<CourseEntity> implements CourseRepository {

    private logger = new Logger('DatabaseCourseRepository')

    async createCourse(name: string): Promise<CourseEntity> {
        const entity = this.create({ name: name })

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

    async findCourseById(id: string): Promise<CourseEntity> {

        try {
            return await this.findOne({ id: id })
        } catch (error) {
            this.logger.error("Database connection error: ", JSON.stringify(error))
            throw new ServiceUnavailableException("Database connection error")
        }
    }

    async findCoursesByFilter(filter: CoursesFilterRequestModel): Promise<CourseEntity[]> {

        try {
            const { search } = filter
            const query = this.createQueryBuilder('course')

            if (search) {
                query.andWhere('course.name ilike :search', { search: `%${search}%` })
            }

            return await query.getMany()
        } catch (error) {
            this.logger.error("Database connection error: ", JSON.stringify(error))
            throw new ServiceUnavailableException("Database connection error")
        }
    }

    async delCourseById(id: string): Promise<DeleteResult> {

        try {
            return await this.delete({ id: id })
        } catch (error) {
            this.logger.error("Database connection error: ", JSON.stringify(error))
            throw new ServiceUnavailableException("Database connection error")
        }
    }

    async updateCourse(entity: CourseEntity): Promise<CourseEntity> {

        try {
            return await this.save(entity)
        } catch (error) {
            this.logger.error("Database connection error: ", JSON.stringify(error))
            throw new ServiceUnavailableException("Database connection error")
        }
    }

}
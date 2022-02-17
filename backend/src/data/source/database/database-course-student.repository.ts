import { ConflictException, Injectable, Logger, ServiceUnavailableException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";

import { CourseStudentEntity } from "../../entity/course-student.entity";
import { CourseStudentRepository } from "../course-student.repository";

@Injectable()
@EntityRepository(CourseStudentEntity)
export class DatabaseCourseStudentRepository extends Repository<CourseStudentEntity> implements CourseStudentRepository {

    private logger = new Logger('DatabaseCourseStudentRepository')

    async createRelation(courseTeacherId: string, userId: string): Promise<CourseStudentEntity> {
        const entity = this.create({ courseTeacherId: courseTeacherId, userId: userId })

        try {
            return await this.save(entity)
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException("CourseTeacher to Student already exists")
            } else {
                this.logger.error("Database connection error: ", JSON.stringify(error))
                throw new ServiceUnavailableException("Database connection error")
            }
        }
    }

    async getRelation(courseStudentId: string, userId: string): Promise<CourseStudentEntity> {

        try {
            return await this.findOne({ id: courseStudentId, userId: userId }, { relations: ['student', 'courseTeacher'] })
        } catch (error) {
            this.logger.error("Database connection error: ", JSON.stringify(error))
            throw new ServiceUnavailableException("Database connection error")
        }

    }

    async getAll(userId: string): Promise<CourseStudentEntity[]> {

        try {
            return await this.find({ userId: userId })
        } catch (error) {
            this.logger.error("Database connection error: ", JSON.stringify(error))
            throw new ServiceUnavailableException("Database connection error")
        }

    }

    async getRelationWithTeacher(userId: string): Promise<CourseStudentEntity> {

        try {
            return await this.findOne({ userId: userId }, { relations: ['courseTeacher'] })
        } catch (error) {
            this.logger.error("Database connection error: ", JSON.stringify(error))
            throw new ServiceUnavailableException("Database connection error")
        }

    }

    async updateCourse(entity: CourseStudentEntity): Promise<CourseStudentEntity> {

        try {
            return await this.save(entity)
        } catch (error) {
            this.logger.error("Database connection error: ", JSON.stringify(error))
            throw new ServiceUnavailableException("Database connection error")
        }

    }

}
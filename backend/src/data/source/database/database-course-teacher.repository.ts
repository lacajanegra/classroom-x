import { ConflictException, Injectable, Logger, NotImplementedException, ServiceUnavailableException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";

import { CourseTeacherEntity } from "src/data/entity/course-teacher.entity";
import { CourseTeacherRepository } from "../course-teacher.repository";

@Injectable()
@EntityRepository(CourseTeacherEntity)
export class DatabaseCourseTeacherRepository extends Repository<CourseTeacherEntity> implements CourseTeacherRepository {

    private logger = new Logger('DatabaseCourseTeacherRepository')

    async createRelation(courseId: string, userId: string): Promise<CourseTeacherEntity> {
        const entity = this.create({ courseId: courseId, userId: userId })

        try {
            return await this.save(entity)
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException("CourseTeacher already exists")
            } else {
                this.logger.error("Database connection error: ", JSON.stringify(error))
                throw new ServiceUnavailableException("Database connection error")
            }
        }
    }

    async getRelation(courseId: string, userId: string): Promise<CourseTeacherEntity> {

        try {
            return await this.findOne({ courseId: courseId, userId: userId })
        } catch (error) {
            this.logger.error("Database connection error: ", JSON.stringify(error))
            throw new ServiceUnavailableException("Database connection error")
        }

    }

    async getAll(userId: string): Promise<CourseTeacherEntity[]> {

        try {
            return await this.find({ userId: userId })
        } catch (error) {
            this.logger.error("Database connection error: ", JSON.stringify(error))
            throw new ServiceUnavailableException("Database connection error")
        }

    }

}
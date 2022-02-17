import { ConflictException, Injectable, Logger, NotImplementedException, ServiceUnavailableException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";

import { CourseEntity } from "src/data/entity/course.entity";
import { CourseStudentEntity } from "../../entity/course-student.entity";
import { CourseStudentModel } from "src/domain/model/course-student.model";
import { CourseStudentRepository } from "../course-student.repository";
import { CourseTeacherEntity } from "src/data/entity/course-teacher.entity";
import { UserEntity } from '../../entity/user.entity';

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
            return await this.findOne({ id: courseStudentId, userId: userId }, { relations: ['student', 'course'] })
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

}
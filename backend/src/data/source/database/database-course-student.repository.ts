import { ConflictException, Injectable, Logger, NotImplementedException, ServiceUnavailableException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";

import { CourseEntity } from "src/data/entity/course.entity";
import { CourseStudentEntity } from "../../entity/course-student.entity";
import { CourseStudentModel } from "src/domain/model/course-student.model";
import { CourseStudentRepository } from "../course-student.repository";
import { UserEntity } from '../../entity/user.entity';

@Injectable()
@EntityRepository(CourseStudentEntity)
export class DatabaseCourseStudentRepository extends Repository<CourseStudentEntity> implements CourseStudentRepository {

    private logger = new Logger('DatabaseCourseStudentRepository')

    async createRelation(courseId: string, userId: string): Promise<CourseStudentModel> {
        throw new NotImplementedException()
    }

    async getRelation(courseStudentId: string): Promise<CourseStudentEntity> {
        throw new Error("Method not implemented.");
    }
    
    async updateRelation(entity: CourseStudentEntity): Promise<CourseStudentEntity> {
        throw new Error("Method not implemented.");
    }

}
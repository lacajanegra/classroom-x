import { ConflictException, Injectable, Logger, NotImplementedException, ServiceUnavailableException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";

import { CourseEntity } from "src/data/entity/course.entity";
import { CourseStudentEntity } from "../../entity/course-student.entity";
import { CourseStudentRepository } from "../course-student.repository";
import { UserEntity } from '../../entity/user.entity';

@Injectable()
@EntityRepository(CourseStudentEntity)
export class DatabaseCourseStudentRepository extends Repository<CourseStudentEntity> implements CourseStudentRepository {

    private logger = new Logger('DatabaseCourseStudentRepository')

    async createRelation(course: CourseEntity, student: UserEntity): Promise<CourseStudentEntity> {
        throw new NotImplementedException()
    }

    async updateQualification(id: string, qualification: number): Promise<CourseStudentEntity> {
        throw new NotImplementedException()
    }

}
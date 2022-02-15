import { ConflictException, Injectable, Logger, ServiceUnavailableException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";

import { UserEntity } from "../../entity/user.entity";
import { UserRepository } from "../user.repository";
import { UserRequestModel } from "src/domain/model/user-request.model";

@Injectable()
@EntityRepository(UserEntity)
export class DatabaseUserRepository extends Repository<UserEntity> implements UserRepository {

    private logger = new Logger('DatabaseUserRepository')

    async createUser(request: UserRequestModel, expiration: Date, hash: string): Promise<UserEntity> {
        const { username, name, email } = request

        const entity = this.create({ username: username, name: name, email: email, password: hash })

        try {
            return await this.save(entity)
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException("User already exists")
            } else {
                this.logger.error("Database connection error: ", JSON.stringify(error))
                throw new ServiceUnavailableException("Database connection error")
            }
        }
    }

    async getUserByUsername(username: string): Promise<UserEntity> {
        try {
            return await this.findOne({ username: username }, { relations: ['userRoles'] })
        } catch (error) {
            console.log(error)
            this.logger.error("Database connection error: ", JSON.stringify(error))
            throw new ServiceUnavailableException("Database connection error")
        }
    }

    async getUserById(id: string): Promise<UserEntity> {
        try {
            return await this.findOne({ id: id }, { relations: ['userRoles'] })
        } catch (error) {
            console.log(error)
            this.logger.error("Database connection error: ", JSON.stringify(error))
            throw new ServiceUnavailableException("Database connection error")
        }
    }

    async updateUser(entity: UserEntity): Promise<void> {
        try {
            await this.save(entity)
        } catch (error) {
            this.logger.error("Database connection error: ", JSON.stringify(error))
            throw new ServiceUnavailableException("Database connection error")
        }
    }

}
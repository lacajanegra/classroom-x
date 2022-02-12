import { ConflictException, Injectable, ServiceUnavailableException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";

import { RoleEntity } from "src/data/entity/role.entity";
import { UserEntity } from "../../entity/user.entity";
import { UserRepository } from "../user.repository";
import { UserRequestModel } from "src/domain/model/user-request.model";

@Injectable()
@EntityRepository(UserEntity)
export class DatabaseUserRepository extends Repository<UserEntity> implements UserRepository {

    async createUser(request: UserRequestModel, hash: string): Promise<UserEntity> {
        const { username, name, email } = request
        
        const entity = this.create({ username: username, name: name, email: email, password: hash })

        try {
            return await this.save(entity)
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException("User already exists")
            } else {
                throw new ServiceUnavailableException("Database connection error")
            }
        }
    }

    async getUserByUsername(username: string): Promise<UserEntity> {
        try {
            return await this.findOne({ username: username }, { relations: ['roles'] })
        } catch (error) {
            throw new ServiceUnavailableException("Database connection error")
        }
    }

    async getUserById(id: string): Promise<UserEntity> {
        try {
            return await this.findOne({ id: id }, { relations: ['roles'] })
        } catch (error) {
            throw new ServiceUnavailableException("Database connection error")
        }
    }

}
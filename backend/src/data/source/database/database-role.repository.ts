import { EntityRepository, Repository } from "typeorm";
import { ConflictException, Injectable, ServiceUnavailableException } from "@nestjs/common";

import { RoleEntity } from "../../entity/role.entity";
import { RoleRepository } from "../role.repository";
import { RoleEnum } from "src/domain/model/role.enum";
import { UserEntity } from '../../entity/user.entity';

@Injectable()
@EntityRepository(RoleEntity)
export class DatabaseRoleRepository extends Repository<RoleEntity> implements RoleRepository {

    async createRole(role: RoleEnum, user: UserEntity): Promise<RoleEntity> {
        const entity = this.create({ name: role, user: user })

        try {
            return await this.save(entity)
        } catch (error) {
            throw new ServiceUnavailableException("Database connection error")
        }
    }

}
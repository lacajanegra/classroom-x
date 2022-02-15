import { EntityRepository, Repository } from "typeorm";
import { Injectable, Logger, ServiceUnavailableException } from "@nestjs/common";

import { RoleEntity } from "../../entity/role.entity";
import { RoleEnum } from "src/domain/model/role.enum";
import { RoleRepository } from "../role.repository";
import { UserEntity } from '../../entity/user.entity';

@Injectable()
@EntityRepository(RoleEntity)
export class DatabaseRoleRepository extends Repository<RoleEntity> implements RoleRepository {

    private logger = new Logger('DatabaseRoleRepository')

    async getRoleByName(role: RoleEnum): Promise<RoleEntity> {
        try {
            return await this.findOne({ name: role })
        } catch (error) {
            this.logger.error("Database connection error: ", JSON.stringify(error))
            throw new ServiceUnavailableException("Database connection error")
        }
    }

}
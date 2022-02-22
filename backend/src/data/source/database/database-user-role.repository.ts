import { ConflictException, Injectable, Logger, ServiceUnavailableException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";

import { UserRoleEntity } from "src/data/entity/user-role.entity";
import { UserRoleRepository } from "../user-role.repository";

@Injectable()
@EntityRepository(UserRoleEntity)
export class DatabaseUserRoleRepository extends Repository<UserRoleEntity> implements UserRoleRepository {

    private logger = new Logger('DatabaseUserRoleRepository')

    async addRelation(roleId: string, userId: string): Promise<void> {
        const entity = this.create({ roleId: roleId, userId: userId })

        try {
            await this.save(entity)
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException("UserRole already exists")
            } else {
                this.logger.error("Database connection error: ", JSON.stringify(error))
                throw new ServiceUnavailableException("Database connection error")
            }
        }
    }

}
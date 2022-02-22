import { DataRolesMapper } from './data-roles.mapper';
import { DataStatusMapper } from './data-status.mapper';
import { DateUtilService } from '../util/date-util.service';
import { Injectable } from "@nestjs/common";
import { RoleEntity } from '../entity/role.entity';
import { RoleEnum } from 'src/domain/model/role.enum';
import { StatusEnum } from 'src/domain/model/status.enum';
import { UserEntity } from '../entity/user.entity';
import { UserModel } from "src/domain/model/user.model";

@Injectable()
export class DataUserMapper {

    constructor(
        private readonly dataRolesMapper: DataRolesMapper,
        private readonly dataStatusMapper: DataStatusMapper
    ) { }

    fromEntityToModel(entity: UserEntity): UserModel {

        if (!entity) {
            return undefined
        }

        const { id, username, name, email, password, expiration } = entity
        const roles = !entity.userRoles ? [] : entity.userRoles.map(relation => relation.role)

        const model: UserModel = {
            id: id,
            username: username,
            name: name,
            email: email,
            hash: password,
            status: this.getStatus(expiration),
            roles: this.getRoles(roles)
        }

        return model
    }

    private getStatus(expiration: Date): StatusEnum {
        return this.dataStatusMapper.fromEntityToModel(expiration)
    }

    private getRoles(roles: RoleEntity[]): RoleEnum[] {
        return this.dataRolesMapper.fromEntityToModel(roles)
    }
}
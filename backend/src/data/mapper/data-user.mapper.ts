import { DataRolesMapper } from './data-roles.mapper';
import { Injectable } from "@nestjs/common";
import { UserEntity } from '../entity/user.entity';
import { UserModel } from "src/domain/model/user.model";

@Injectable()
export class DataUserMapper {

    constructor(private readonly dataRolesMapper: DataRolesMapper) { }

    fromEntityToModel(entity: UserEntity): UserModel {

        if (!entity) {
            return undefined
        }

        const { id, username, name, email, roles } = entity
        const model: UserModel = {
            id: id,
            username: username,
            name: name,
            email: email,
            roles: this.dataRolesMapper.fromEntityToModel(roles)
        }

        return model
    }

}
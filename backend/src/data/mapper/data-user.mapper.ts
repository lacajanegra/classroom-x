import { Injectable } from "@nestjs/common";
import { UserModel } from "src/domain/model/user.model";
import { UserEntity } from '../entity/user.entity';
import { DataRolesMapper } from './data-roles.mapper';

@Injectable()
export class DataUserMapper {

    constructor(private readonly dataRolesMapper: DataRolesMapper) { }

    fromEntityToModel(entity: UserEntity): UserModel {

        if (!entity) {
            return undefined
        }

        const { id, name, email, roles } = entity
        const model: UserModel = {
            id: id,
            name: name,
            email: email,
            roles: this.dataRolesMapper.fromEntityToModel(roles)
        }

        return model
    }

}
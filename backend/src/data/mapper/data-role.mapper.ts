import { Injectable } from "@nestjs/common";
import { RoleEntity } from '../entity/role.entity';
import { RoleEnum } from '../../domain/model/role.enum';

@Injectable()
export class DataRoleMapper {

    fromEntityToModel(entity: RoleEntity): RoleEnum {

        if (!entity) {
            return RoleEnum.NONE
        }

        const { name } = entity

        return name
    }

}
import { Injectable } from "@nestjs/common";
import { RoleEnum } from '../../domain/model/role.enum';
import { RoleEntity } from "../entity/role.entity";
import { DataRoleMapper } from "./data-role.mapper";

@Injectable()
export class DataRolesMapper {

    constructor(private readonly dataRoleMapper: DataRoleMapper) { }

    fromEntityToModel(entities: RoleEntity[]): RoleEnum[] {

        if (!entities) {
            return []
        }

        return entities.map(this.dataRoleMapper.fromEntityToModel)
    }

}
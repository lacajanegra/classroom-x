import { DataRoleMapper } from "./data-role.mapper";
import { Injectable } from "@nestjs/common";
import { RoleEntity } from "../entity/role.entity";
import { RoleEnum } from '../../domain/model/role.enum';

@Injectable()
export class DataRolesMapper {

    constructor(private readonly dataRoleMapper: DataRoleMapper) { }

    fromEntityToModel(entities: RoleEntity[]): RoleEnum[] {

        if (!entities) {
            return []
        }

        return entities.map((entity: RoleEntity) => this.dataRoleMapper.fromEntityToModel(entity))
    }

}
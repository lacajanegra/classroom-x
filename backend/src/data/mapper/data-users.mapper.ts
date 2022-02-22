import { Injectable } from "@nestjs/common";
import { UserEntity } from '../entity/user.entity';
import { UserModel } from "src/domain/model/user.model";
import { DataUserMapper } from './data-user.mapper';

@Injectable()
export class DataUsersMapper {

    constructor(private readonly dataUserMapper: DataUserMapper) { }

    fromEntityToModel(entities: UserEntity[]): UserModel[] {

        if (!entities) {
            return []
        }

        return entities.map((entity: UserEntity) => this.dataUserMapper.fromEntityToModel(entity))
    }
}
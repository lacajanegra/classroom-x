import { RoleRepository } from "./source/role.repository"
import { DataUsersMapper } from "./mapper/data-users.mapper";
import { Injectable } from "@nestjs/common";
import { RoleEnum } from "src/domain/model/role.enum";
import { RoleEntity } from './entity/role.entity';
import { UserEntity } from "./entity/user.entity";
import { GetTeachersRepository } from "src/domain/repository/get-teachers.repository";
import { UserModel } from "src/domain/model/user.model";

@Injectable()
export class DataGetTeachersRepository implements GetTeachersRepository {

    constructor(
        private readonly roleRepository: RoleRepository,
        private readonly dataUsersMapper: DataUsersMapper
    ) { }
    
    async getTeachers(): Promise<UserModel[]> {
        return await this.roleRepository.getUsersByRole(RoleEnum.TEACHER)
            .then((response: RoleEntity) => !response.userRoles ? [] : response.userRoles.map((role) => role.user))
            .then((responses: UserEntity[]) => { return this.dataUsersMapper.fromEntityToModel(responses) })
    }

}
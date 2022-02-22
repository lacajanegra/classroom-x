import { GetStudentsRepository } from "src/domain/repository/get-students.repository"
import { RoleRepository } from "./source/role.repository"
import { DataUsersMapper } from "./mapper/data-users.mapper";
import { Injectable } from "@nestjs/common";
import { RoleEnum } from "src/domain/model/role.enum";
import { RoleEntity } from './entity/role.entity';
import { UserEntity } from "./entity/user.entity";
import { UserModel } from 'src/domain/model/user.model';

@Injectable()
export class DataGetStudentsRepository implements GetStudentsRepository {

    constructor(
        private readonly roleRepository: RoleRepository,
        private readonly dataUsersMapper: DataUsersMapper
    ) { }

    async getStudents(): Promise<UserModel[]> {
        return await this.roleRepository.getUsersByRole(RoleEnum.STUDENT)
            .then((response: RoleEntity) => !response.userRoles ? [] : response.userRoles.map((role) => role.user))
            .then((responses: UserEntity[]) => { return this.dataUsersMapper.fromEntityToModel(responses) })
    }

}
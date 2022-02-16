import { AddUserRepository } from 'src/domain/repository/add-user.repository';
import { DateUtilService } from './util/date-util.service';
import { Injectable } from '@nestjs/common';
import { RoleEnum } from 'src/domain/model/role.enum';
import { RoleRepository } from './source/role.repository';
import { UserRepository } from './source/user.repository';
import { UserRequestModel } from 'src/domain/model/user-request.model';
import { UserRoleRepository } from './source/user-role.repository';

@Injectable()
export class DataAddUserRepository implements AddUserRepository {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly roleRepository: RoleRepository,
        private readonly userRoleRepository: UserRoleRepository,
        private readonly dateUtilService: DateUtilService
    ) { }

    async addUser(request: UserRequestModel, role: RoleEnum, hash: string): Promise<void> {
        const { username, name, email } = request
        const expiration = this.dateUtilService.getExpiration()
        const userEntity = await this.userRepository.createUser(username, name, email, expiration, hash)
        const roleEntity = await this.roleRepository.getRoleByName(role)
        await this.userRoleRepository.addRelation(roleEntity.id, userEntity.id)
    }

}
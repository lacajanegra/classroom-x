import { AddUserRepository } from 'src/domain/repository/add-user.repository';
import { CreateUserModel } from 'src/domain/model/create-user.model';
import { DateUtilService } from './util/date-util.service';
import { Injectable } from '@nestjs/common';
import { RoleEnum } from 'src/domain/model/role.enum';
import { RoleRepository } from './source/role.repository';
import { UserRepository } from './source/user.repository';
import { UserRoleRepository } from './source/user-role.repository';

@Injectable()
export class DataAddUserRepository implements AddUserRepository {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly roleRepository: RoleRepository,
        private readonly userRoleRepository: UserRoleRepository,
        private readonly dateUtilService: DateUtilService
    ) { }

    async addUser(request: CreateUserModel, hash: string): Promise<void> {
        const expiration = this.dateUtilService.getExpiration()
        const userEntity = await this.userRepository.createUser(request, hash, expiration)
        const roleEntity = await this.roleRepository.getRoleByName(request.role)
        await this.userRoleRepository.addRelation(roleEntity.id, userEntity.id)
    }

}
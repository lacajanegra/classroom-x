import { AddUserRepository } from 'src/domain/repository/add-user.repository';
import { Injectable } from '@nestjs/common';
import { PasswordService } from 'src/data/security/password/password.service';
import { RoleEnum } from 'src/domain/model/role.enum';
import { RoleRepository } from './source/role.repository';
import { UserRepository } from './source/user.repository';
import { UserRequestModel } from 'src/domain/model/user-request.model';

@Injectable()
export class DataAddUserRepository implements AddUserRepository {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly roleRepository: RoleRepository,
        private readonly passwordService: PasswordService
    ) { }

    async addUser(request: UserRequestModel, role: RoleEnum): Promise<void> {
        const { password } = request
        const hash = await this.passwordService.createHash(password)
        const entity = await this.userRepository.createUser(request, hash)
        await this.roleRepository.createRole(role, entity)
    }

}
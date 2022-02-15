import { AddUserRepository } from '../../repository/add-user.repository';
import { Injectable } from '@nestjs/common';
import { PasswordRepository } from 'src/domain/repository/password.repository';
import { RoleEnum } from 'src/domain/model/role.enum';
import { SignUpService } from './sign-up.service';
import { UserRequestModel } from 'src/domain/model/user-request.model';

@Injectable()
export class SignUpUseCaseService implements SignUpService {

    constructor(
        private readonly passwordRepository: PasswordRepository,
        private readonly addUserRepository: AddUserRepository
    ) { }

    async execute(request: UserRequestModel, role: RoleEnum): Promise<void> {
        const { password } = request
        const hash = await this.passwordRepository.createHash(password)
        return await this.addUserRepository.addUser(request, role, hash)
    }
}

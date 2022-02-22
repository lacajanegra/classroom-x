import { AddUserRepository } from '../../repository/add-user.repository';
import { CreateUserModel } from 'src/domain/model/create-user.model';
import { Injectable } from '@nestjs/common';
import { PasswordRepository } from 'src/domain/repository/password.repository';
import { SignUpService } from './sign-up.service';

@Injectable()
export class SignUpUseCaseService implements SignUpService {

    constructor(
        private readonly passwordRepository: PasswordRepository,
        private readonly addUserRepository: AddUserRepository
    ) { }

    async execute(request: CreateUserModel): Promise<void> {
        const {password} = request
        const hash = await this.passwordRepository.createHash(password)
        return await this.addUserRepository.addUser(request, hash)
    }
}

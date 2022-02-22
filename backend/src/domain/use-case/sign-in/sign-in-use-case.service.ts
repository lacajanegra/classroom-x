import { Injectable, UnauthorizedException } from '@nestjs/common';

import { GetUserRepository } from 'src/domain/repository/get-user.repository';
import { LoginModel } from 'src/domain/model/login.model';
import { PasswordRepository } from 'src/domain/repository/password.repository';
import { SignInService } from './sign-in.service';
import { UserModel } from 'src/domain/model/user.model';

@Injectable()
export class SignInUseCaseService implements SignInService {

    constructor(
        private readonly getUserRepository: GetUserRepository,
        private readonly passwordRepository: PasswordRepository
    ) { }

    async execute(request: LoginModel): Promise<UserModel> {
        const { username, password } = request
        const user = await this.getUserRepository.getUserByUsername(username)

        if (!(user && await this.passwordRepository.validate(password, user.hash))) {
            throw new UnauthorizedException("User or password credentials failed")
        }

        return user
    }
}

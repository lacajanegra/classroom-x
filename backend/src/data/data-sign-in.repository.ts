import { Injectable, UnauthorizedException } from '@nestjs/common';

import { DataUserMapper } from './mapper/data-user.mapper';
import { PasswordService } from './security/password/password.service';
import { SignInRepository } from '../domain/repository/sign-in.repository';
import { SignInRequestModel } from 'src/domain/model/sign-in-request.model';
import { UserModel } from 'src/domain/model/user.model';
import { UserRepository } from './source/user.repository';

@Injectable()
export class DataSignInRepository implements SignInRepository {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly passwordService: PasswordService,
        private readonly dataUserMapper: DataUserMapper
    ) { }

    async signIn(request: SignInRequestModel): Promise<UserModel> {
        const { username, password } = request
        const entity = await this.userRepository.getUserByUsername(username)

        if (!(entity && this.passwordService.validate(password, entity.password))) {
            throw new UnauthorizedException("Please check the credentials")
        }

        return this.dataUserMapper.fromEntityToModel(entity)
    }

}
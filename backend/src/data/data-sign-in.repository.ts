import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInRepository } from '../domain/repository/sign-in.repository';
import { UserRepository } from './source/user.repository';
import { SignInRequestModel } from 'src/domain/model/sign-in-request.model';
import { PasswordService } from './security/password/password.service';
import { SignInResponseModel } from 'src/domain/model/sign-in-response.model';
import { AccessTokenService } from './security/access-token/access-token.service';

@Injectable()
export class DataSignInRepository implements SignInRepository {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly passwordService: PasswordService,
        private readonly accessTokenService: AccessTokenService
    ) { }

    async signIn(request: SignInRequestModel): Promise<SignInResponseModel> {
        const { username, password } = request
        const entity = await this.userRepository.getUserByUsername(username)

        if (!(entity && this.passwordService.validate(password, entity.password))) {
            throw new UnauthorizedException("Please check the credentials")
        }

        const response: SignInResponseModel = {
            accessToken: this.accessTokenService.createToken(entity)
        }

        return response
    }

}
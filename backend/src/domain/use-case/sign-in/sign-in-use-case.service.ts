import { Injectable } from '@nestjs/common';
import { SignInRepository } from '../../repository/sign-in.repository';
import { SignInRequestModel } from 'src/domain/model/sign-in-request.model';
import { SignInService } from './sign-in.service';
import { UserModel } from 'src/domain/model/user.model';

@Injectable()
export class SignInUseCaseService implements SignInService {

    constructor(private readonly signInRepository: SignInRepository) { }

    async execute(request: SignInRequestModel): Promise<UserModel> {
        return await this.signInRepository.signIn(request)
    }
}

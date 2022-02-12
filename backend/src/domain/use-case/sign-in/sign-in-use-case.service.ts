import { Injectable } from '@nestjs/common';
import { SignInRequestModel } from 'src/domain/model/sign-in-request.model';
import { SignInService } from './sign-in.service';
import { SignInRepository } from '../../repository/sign-in.repository';
import { SignInResponseModel } from 'src/domain/model/sign-in-response.model';

@Injectable()
export class SignInUseCaseService implements SignInService {

    constructor(private readonly signInRepository: SignInRepository) { }

    async execute(request: SignInRequestModel): Promise<SignInResponseModel> {
        return await this.signInRepository.signIn(request)
    }
}

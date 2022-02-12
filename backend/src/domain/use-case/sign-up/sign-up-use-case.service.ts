import { AddUserRepository } from '../../repository/add-user.repository';
import { Injectable } from '@nestjs/common';
import { RoleEnum } from 'src/domain/model/role.enum';
import { SignUpService } from './sign-up.service';
import { UserRequestModel } from 'src/domain/model/user-request.model';

@Injectable()
export class SignUpUseCaseService implements SignUpService {

    constructor(private readonly addUserRepository: AddUserRepository) { }

    async execute(request: UserRequestModel, role: RoleEnum): Promise<void> {
        return await this.addUserRepository.addUser(request, role)
    }
}

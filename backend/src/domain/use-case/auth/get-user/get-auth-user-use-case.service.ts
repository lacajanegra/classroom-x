import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';

import { GetAuthUserService } from "./get-auth-user.service";
import { GetUserRepository } from "src/domain/repository/get-user.repository";
import { UserModel } from "src/domain/model/user.model";

@Injectable()
export class GetAuthUserUseCaseService implements GetAuthUserService {

    private logger = new Logger('GetAuthUserUseCaseService')

    constructor(private readonly getUserRepository: GetUserRepository) { }

    async execute(id: string): Promise<UserModel> {
        const user = await this.getUserRepository.getUserById(id)

        if (!user) {
            this.logger.warn(`User by id ${id} not found.`)
            throw new UnauthorizedException()
        }

        return user
    }
}
import { Injectable, UnauthorizedException } from "@nestjs/common";

import { GetUserRepository } from "src/domain/repository/get-user.repository";
import { PasswordRepository } from "src/domain/repository/password.repository";
import { ResetPasswordRequestModel } from "src/domain/model/reset-password-request.model";
import { ResetPasswordService } from "./reset-password.service";
import { UpdatePasswordRepository } from "src/domain/repository/update-password.repository";

@Injectable()
export class ResetPasswordUseCaseService implements ResetPasswordService {

    constructor(
        private readonly getUserRepository: GetUserRepository,
        private readonly passwordRepository: PasswordRepository,
        private readonly updatePasswordRepository: UpdatePasswordRepository
    ) { }

    async execute(request: ResetPasswordRequestModel, userId: string): Promise<void> {
        const user = await this.getUserRepository.getUserById(userId)
        const { password, newPassword } = request

        if (!(user && await this.passwordRepository.validate(password, user.hash))) {
            throw new UnauthorizedException("User or password credentials failed")
        }

        const hash = await this.passwordRepository.createHash(newPassword)
        return await this.updatePasswordRepository.updatePassword(hash, userId)
    }
}
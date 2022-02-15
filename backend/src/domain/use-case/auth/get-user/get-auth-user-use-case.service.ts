import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtPayloadModel } from "src/domain/model/jwt-payload.model";
import { UserModel } from "src/domain/model/user.model";
import { GetUserRepository } from "src/domain/repository/get-user.repository";
import { GetAuthUserService } from "./get-auth-user.service";

@Injectable()
export class GetAuthUserUseCaseService implements GetAuthUserService {

    constructor(private readonly getUserRepository: GetUserRepository) { }

    async execute(payload: JwtPayloadModel): Promise<UserModel> {
        const { id } = payload
        const user = await this.getUserRepository.getUserById(id)

        if (!user) {
            throw new UnauthorizedException()
        }

        return user
    }
}
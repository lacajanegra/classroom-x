import { ApiLoginMapper } from "../mapper/api-login.mapper"
import { ApiTokenMapper } from "../mapper/api-token.mapper"
import { Injectable } from "@nestjs/common"
import { JwtResponseDto } from "../model/jwt-response.dto"
import { LoginCredentialsRequestDto } from "../model/login-credentials-request.dto"
import { SignInService } from "src/domain/use-case/sign-in/sign-in.service"

@Injectable()
export class ApiSignInService {

    constructor(
        private readonly apiLoginMapper: ApiLoginMapper,
        private readonly signInService: SignInService,
        private readonly apiTokenMapper: ApiTokenMapper
    ) { }

    async execute(request: LoginCredentialsRequestDto): Promise<JwtResponseDto> {
        const requestModel = this.apiLoginMapper.fromDtoToModel(request)
        const userModel = await this.signInService.execute(requestModel)
        return this.apiTokenMapper.fromModelToDto(userModel)
    }

}

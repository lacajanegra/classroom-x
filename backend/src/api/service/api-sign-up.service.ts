import { ApiCreateUserMapper } from "../mapper/api-create-user.mapper"
import { CreateUserRequestDto } from "../model/create-user-request.dto"
import { Injectable } from "@nestjs/common"
import { RoleEnum } from "src/domain/model/role.enum"
import { SignUpService } from "src/domain/use-case/sign-up/sign-up.service"

@Injectable()
export class ApiSignUpService {

    constructor(
        private readonly signUpService: SignUpService,
        private readonly apiCreateUserMapper: ApiCreateUserMapper
    ) { }

    async execute(request: CreateUserRequestDto, role: RoleEnum): Promise<void> {
        const modelRequest = this.apiCreateUserMapper.fromDtoToModel(request, role)
        return await this.signUpService.execute(modelRequest)
    }

}

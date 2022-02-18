import { ApiResetPasswordMapper } from "../mapper/api-reset-password.mapper"
import { Injectable } from "@nestjs/common"
import { ResetPasswordRequestDto } from "../model/reset-password-request.dto"
import { ResetPasswordService } from "src/domain/use-case/auth/reset-password/reset-password.service"

@Injectable()
export class ApiResetPasswordService {

    constructor(
        private readonly resetPasswordService: ResetPasswordService,
        private readonly apiResetPasswordMapper: ApiResetPasswordMapper
    ) { }

    async execute(request: ResetPasswordRequestDto, userId: string): Promise<void> {
        const requestModel = this.apiResetPasswordMapper.fromDtoToModel(request)
        return await this.resetPasswordService.execute(requestModel, userId)
    }

}

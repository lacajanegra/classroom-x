import { Injectable } from "@nestjs/common";
import { ResetPasswordModel } from 'src/domain/model/reset-password.model';
import { ResetPasswordRequestDto } from "../model/reset-password-request.dto";

@Injectable()
export class ApiResetPasswordMapper {

    fromDtoToModel(dto: ResetPasswordRequestDto): ResetPasswordModel {
        const { oldPassword, password } = dto
        const model: ResetPasswordModel = { password: oldPassword, newPassword: password }
        return model
    }

}
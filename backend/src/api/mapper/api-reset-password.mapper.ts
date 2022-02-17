import { Injectable } from "@nestjs/common";
import { ResetPasswordModel } from 'src/domain/model/reset-password.model';
import { ResetPasswordRequestDto } from "../model/reset-password-request.dto";

@Injectable()
export class ApiResetPasswordMapper {

    fromDtoToModel(dto: ResetPasswordRequestDto): ResetPasswordModel {
        const { password, newPassword } = dto
        const model: ResetPasswordModel = { password: password, newPassword: newPassword }
        return model
    }

}
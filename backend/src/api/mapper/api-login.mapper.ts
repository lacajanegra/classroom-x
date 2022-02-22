import { Injectable } from "@nestjs/common";
import { LoginCredentialsRequestDto } from '../model/login-credentials-request.dto';
import { LoginModel } from 'src/domain/model/login.model';

@Injectable()
export class ApiLoginMapper {

    fromDtoToModel(dto: LoginCredentialsRequestDto): LoginModel {
        const { username, password } = dto
        const model: LoginModel = { username: username, password: password }
        return model
    }

}
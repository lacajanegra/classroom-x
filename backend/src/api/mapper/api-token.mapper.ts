import { AuthService } from "../guard/auth.service";
import { Injectable } from "@nestjs/common";
import { LoginResponseDto } from 'src/api/model/login-response.dto';
import { UserModel } from "src/domain/model/user.model";

@Injectable()
export class ApiTokenMapper {

    constructor(private readonly authService: AuthService) { }

    fromModelToDto(user: UserModel): LoginResponseDto {
        const { name, email, status, roles } = user
        const token = this.authService.createToken(user)
        const response: LoginResponseDto = {
            name: name,
            email: email,
            status: status,
            roles: roles,
            accessToken: token
        }
        return response
    }

}
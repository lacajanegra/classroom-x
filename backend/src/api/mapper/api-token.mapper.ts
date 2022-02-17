import { AuthService } from "../guard/auth.service";
import { Injectable } from "@nestjs/common";
import { JwtResponseDto } from 'src/api/model/jwt-response.dto';
import { UserModel } from "src/domain/model/user.model";

@Injectable()
export class ApiTokenMapper {

    constructor(private readonly authService: AuthService) { }

    fromModelToDto(user: UserModel): JwtResponseDto {
        const token = this.authService.createToken(user)
        const response: JwtResponseDto = {
            accessToken: token
        }
        return response
    }

}
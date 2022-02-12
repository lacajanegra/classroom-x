import { GetAuthUserService } from 'src/domain/use-case/auth-user/get-auth-user/get-auth-user.service';
import { Injectable } from '@nestjs/common';
import { JwtPayloadModel } from "src/domain/model/jwt-payload.model";
import { JwtStrategyConfig } from "src/config/jwt.config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt"
import { UserModel } from 'src/domain/model/user.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        private readonly getAuthUserService: GetAuthUserService
    ) {
        super(JwtStrategyConfig);
    }

    async validate(payload: JwtPayloadModel): Promise<UserModel> {
        return await this.getAuthUserService.execute(payload)
    }
}
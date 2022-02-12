import { ExtractJwt, Strategy } from "passport-jwt"

import { ConfigService } from '@nestjs/config';
import { GetAuthUserService } from 'src/domain/use-case/auth-user/get-auth-user/get-auth-user.service';
import { Injectable } from '@nestjs/common';
import { JwtPayloadModel } from "src/domain/model/jwt-payload.model";
import { PassportStrategy } from "@nestjs/passport";
import { UserModel } from 'src/domain/model/user.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        private readonly getAuthUserService: GetAuthUserService,
        configService: ConfigService
    ) {
        super({
            secretOrKey: configService.get('JWT_SECRET'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          });
    }

    async validate(payload: JwtPayloadModel): Promise<UserModel> {
        return await this.getAuthUserService.execute(payload)
    }
}
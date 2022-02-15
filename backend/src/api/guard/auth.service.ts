import { Injectable } from '@nestjs/common';
import { JwtPayloadModel } from 'src/domain/model/jwt-payload.model';
import { JwtService } from '@nestjs/jwt';
import { UserModel } from 'src/domain/model/user.model';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) { }

    createToken(user: UserModel): string {
        const { id, status, roles } = user
        const payload: JwtPayloadModel = { id: id, status: status, roles: roles }
        return this.jwtService.sign(payload)
    }
}

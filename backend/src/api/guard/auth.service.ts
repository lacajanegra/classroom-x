import { Injectable } from '@nestjs/common';
import { JwtPayloadDto } from 'src/api/model/jwt-payload.dto';
import { JwtService } from '@nestjs/jwt';
import { UserModel } from 'src/domain/model/user.model';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) { }

    createToken(user: UserModel): string {
        const { id, status, roles } = user
        const payload: JwtPayloadDto = { id: id, status: status, roles: roles }
        return this.jwtService.sign(payload)
    }
}

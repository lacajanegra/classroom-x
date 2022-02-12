import { Injectable } from '@nestjs/common';
import { JwtPayloadModel } from 'src/domain/model/jwt-payload.model';
import { JwtService } from '@nestjs/jwt';
import { RoleEnum } from '../../../domain/model/role.enum';
import { UserEntity } from 'src/data/entity/user.entity';

@Injectable()
export class AccessTokenService {
    constructor(private readonly jwtService: JwtService) { }

    createToken(entity: UserEntity): string {
        const { id, roles } = entity
        const payload: JwtPayloadModel = { id: id, roles : roles.map( role => { return role.name }) }
        return this.jwtService.sign(payload)
    }
}

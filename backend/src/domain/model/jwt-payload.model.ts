import { RoleEnum } from './role.enum';

export class JwtPayloadModel {
    id: string
    roles: RoleEnum[]
}
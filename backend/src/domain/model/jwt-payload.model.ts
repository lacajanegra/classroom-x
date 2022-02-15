import { RoleEnum } from './role.enum';
import { StatusEnum } from './status.enum';

export class JwtPayloadModel {
    id: string
    status: StatusEnum
    roles: RoleEnum[]
}
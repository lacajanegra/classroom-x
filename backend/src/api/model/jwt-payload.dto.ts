import { RoleEnum } from 'src/domain/model/role.enum';
import { StatusEnum } from 'src/domain/model/status.enum';

export class JwtPayloadDto {
    id: string
    status: StatusEnum
    roles: RoleEnum[]
}
import { RoleEnum } from 'src/domain/model/role.enum';
import { StatusEnum } from 'src/domain/model/status.enum';

export interface UserDto {
    name: string
    email: string
    status: StatusEnum
    roles: RoleEnum[]
}
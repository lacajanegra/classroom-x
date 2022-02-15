import { RoleEnum } from './role.enum';
import { StatusEnum } from './status.enum';

export interface UserResponseModel {
    name: string
    email: string
    status: StatusEnum
    roles: RoleEnum[]
}
import { RoleEnum } from './role.enum';
import { StatusEnum } from './status.enum';

export interface UserModel {
    id: string
    username: string
    name: string
    email: string
    hash: string
    status: StatusEnum
    roles: RoleEnum[]
}
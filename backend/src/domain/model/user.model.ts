import { RoleEnum } from './role.enum';

export interface UserModel {
    id: string
    username: string
    name: string
    email: string
    roles: RoleEnum[]
}
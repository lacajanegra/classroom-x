import { RoleEnum } from './role.enum';

export interface UserModel {
    id: string
    name: string
    email: string
    roles: RoleEnum[]
}
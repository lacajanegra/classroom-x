import { RoleEnum } from './role.enum';

export interface UserResponseModel {
    name: string
    email: string
    roles: RoleEnum[]
}
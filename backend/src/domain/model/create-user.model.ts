import { RoleEnum } from "./role.enum";

export interface CreateUserModel {
    username: string
    name: string
    email: string
    password: string
    role: RoleEnum
}

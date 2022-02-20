import { RoleEnum } from '../../domain/model/role.enum';
import { StatusEnum } from 'src/domain/model/status.enum';

export interface LoginResponseDto {
    name: string
    email: string
    status: StatusEnum
    roles: RoleEnum[]
    accessToken: string
}
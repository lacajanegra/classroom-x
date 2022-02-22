import { Injectable } from "@nestjs/common";
import { UserDto } from '../model/user.dto';
import { UserModel } from '../../domain/model/user.model';

@Injectable()
export class ApiUserMapper {

    fromModelToDto(user: UserModel): UserDto {
        const { id, name, email, status, roles } = user
        const dto: UserDto = {
            id: id,
            name: name,
            email: email,
            status: status,
            roles: roles
        }
        return dto
    }

}
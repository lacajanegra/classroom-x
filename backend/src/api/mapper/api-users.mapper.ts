import { Injectable } from "@nestjs/common";
import { UserDto } from '../model/user.dto';
import { UserModel } from '../../domain/model/user.model';
import { ApiUserMapper } from "./api-user.mapper";

@Injectable()
export class ApiUsersMapper {

    constructor(private readonly apiUserMapper: ApiUserMapper) { }

    fromModelToDto(users: UserModel[]): UserDto[] {
        return users.map((user) => this.apiUserMapper.fromModelToDto(user))
    }

}
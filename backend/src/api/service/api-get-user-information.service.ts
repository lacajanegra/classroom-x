import { ApiUserMapper } from "../mapper/api-user.mapper"
import { Injectable } from "@nestjs/common"
import { UserDto } from "../model/user.dto"
import { UserModel } from "src/domain/model/user.model"

@Injectable()
export class ApiGetUserInformationService {

    constructor(private readonly apiUserMapper: ApiUserMapper) { }

    execute(user: UserModel): UserDto {
        return this.apiUserMapper.fromModelToDto(user)
    }


}

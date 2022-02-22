import { Injectable } from "@nestjs/common"
import { UserDto } from "../model/user.dto"
import { ApiUsersMapper } from "../mapper/api-users.mapper"
import { GetTeachersService } from "src/domain/use-case/teacher/get-teachers/get-teachers.service"

@Injectable()
export class ApiGetTeachersService {

    constructor(
        private readonly getTeachersService: GetTeachersService,
        private readonly apiUsersMapper: ApiUsersMapper
    ) { }

    async execute(): Promise<UserDto[]> {
        return await this.getTeachersService.execute()
            .then((users) => this.apiUsersMapper.fromModelToDto(users))
    }

}

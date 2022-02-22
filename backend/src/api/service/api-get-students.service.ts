import { Injectable } from "@nestjs/common"
import { UserDto } from "../model/user.dto"
import { ApiUsersMapper } from "../mapper/api-users.mapper"
import { GetStudentsService } from "src/domain/use-case/student/get-students/get-students.service"

@Injectable()
export class ApiGetStudentsService {

    constructor(
        private readonly getStudentsService: GetStudentsService,
        private readonly apiUsersMapper: ApiUsersMapper
    ) { }

    async execute(): Promise<UserDto[]> {
        return await this.getStudentsService.execute()
            .then((users) => this.apiUsersMapper.fromModelToDto(users))
    }

}

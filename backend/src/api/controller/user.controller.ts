import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/api/decorator/get-user.decorator';
import { UserDto } from 'src/api/model/user.dto';
import { ApiGetUserInformationService } from 'src/api/service/api-get-user-information.service';
import { UserModel } from 'src/domain/model/user.model';

@Controller('user')
@UseGuards(AuthGuard())
export class UserController {

    constructor(private readonly apiGetUserInformationService: ApiGetUserInformationService) { }

    @Get()
    info(@GetUser() user: UserModel): UserDto {
        return this.apiGetUserInformationService.execute(user)
    }

}

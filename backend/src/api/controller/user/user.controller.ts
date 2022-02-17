import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/api/decorator/get-user.decorator';
import { ApiUserMapper } from 'src/api/mapper/api-user.mapper';
import { UserDto } from 'src/api/model/user.dto';
import { UserModel } from 'src/domain/model/user.model';

@Controller('user')
@UseGuards(AuthGuard())
export class UserController {

    constructor(private readonly apiUserMapper: ApiUserMapper) { }

    @Get()
    info(@GetUser() user: UserModel): UserDto {
        return this.apiUserMapper.fromModelToDto(user)
    }

}

import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/api/decorate/get-user.decorator';
import { UserResponseModel } from 'src/domain/model/user-response.model';
import { UserModel } from 'src/domain/model/user.model';

@Controller('user')
@UseGuards(AuthGuard())
export class UserController {

    @Get()
    info(@GetUser() user: UserModel): UserResponseModel {
        const { name, email, status, roles } = user
        const response: UserResponseModel = {
            name: name,
            email: email,
            status: status,
            roles: roles
        }
        return response
    }

}

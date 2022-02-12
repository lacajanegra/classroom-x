import { Body, Controller, Logger, Post, UseGuards } from '@nestjs/common';
import { SignInRequestModel } from 'src/domain/model/sign-in-request.model';
import { SignInService } from 'src/domain/use-case/sign-in/sign-in.service';
import { UserRequestModel } from 'src/domain/model/user-request.model';
import { SignUpService } from 'src/domain/use-case/sign-up/sign-up.service';
import { SignInResponseModel } from 'src/domain/model/sign-in-response.model';
import { RoleEnum } from "src/domain/model/role.enum"
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/api/decorate/get-user.decorator';
import { UserModel } from 'src/domain/model/user.model';
import { AuthService } from '../../guard/auth.service';

@Controller('auth')
export class AuthController {

    private logger = new Logger('AuthController')
    
    constructor(
        private readonly signUpService: SignUpService,
        private readonly signInService: SignInService,
        private readonly authService: AuthService
    ) { }

    @Post('signup/teacher')
    async signUpTeacher(@Body() request: UserRequestModel): Promise<void> {
        this.logger.log(`Register a teacher ${request.name}`)
        return await this.signUpService.execute(request, RoleEnum.TEACHER)
    }

    @Post('signup/student')
    async signUpStudent(@Body() request: UserRequestModel): Promise<void> {
        this.logger.log(`Register a student ${request.name}`)
        return await this.signUpService.execute(request, RoleEnum.STUDENT)
    }

    @Post('signin')
    async signIn(@Body() request: SignInRequestModel): Promise<SignInResponseModel> {
        this.logger.log(`Sign in the user ${request.username}`)
        const user = await this.signInService.execute(request)
        const token = this.authService.createToken(user)
        const response : SignInResponseModel = {
            accessToken: token
        }
        return response
    }

    @Post('signout')
    @UseGuards(AuthGuard())
    async signOut(@GetUser() user: UserModel) {
        this.logger.log(`Sign out the user ${user.username}`)
    }
}

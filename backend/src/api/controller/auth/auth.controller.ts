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
import { ResetPasswordRequestModel } from 'src/domain/model/reset-password-request.model';
import { ResetPasswordService } from 'src/domain/use-case/auth/reset-password/reset-password.service';

@Controller('auth')
export class AuthController {

    private logger = new Logger('AuthController')

    constructor(
        private readonly signUpService: SignUpService,
        private readonly signInService: SignInService,
        private readonly authService: AuthService,
        private readonly resetPasswordService: ResetPasswordService
    ) { }

    @Post('signup/teacher')
    async signUpTeacher(@Body() request: UserRequestModel): Promise<void> {
        this.logger.log(`Register a teacher ${request.username}`)
        return await this.signUpService.execute(request, RoleEnum.TEACHER)
    }

    @Post('signup/student')
    async signUpStudent(@Body() request: UserRequestModel): Promise<void> {
        this.logger.log(`Register a student ${request.username}`)
        return await this.signUpService.execute(request, RoleEnum.STUDENT)
    }

    @Post('signin')
    async signIn(@Body() request: SignInRequestModel): Promise<SignInResponseModel> {
        this.logger.log(`Sign in the user ${request.username}`)
        const user = await this.signInService.execute(request)
        const token = this.authService.createToken(user)
        const response: SignInResponseModel = {
            accessToken: token
        }
        return response
    }

    @Post('reset')
    @UseGuards(AuthGuard())
    async reset(@GetUser() user: UserModel, @Body() request: ResetPasswordRequestModel): Promise<void> {
        this.logger.log(`Reset passsword the user ${user.username}`)
        return await this.resetPasswordService.execute(request, user.id)
    }

    @Post('signout')
    @UseGuards(AuthGuard())
    async signOut(@GetUser() user: UserModel) {
        this.logger.log(`Sign out the user ${user.username}`)
    }
}

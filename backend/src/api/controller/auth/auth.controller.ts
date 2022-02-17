import { Body, Controller, Logger, Post, UseGuards } from '@nestjs/common';
import { SignInService } from 'src/domain/use-case/sign-in/sign-in.service';
import { CreateUserRequestDto } from 'src/api/model/create-user-request.dto';
import { SignUpService } from 'src/domain/use-case/sign-up/sign-up.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/api/decorator/get-user.decorator';
import { UserModel } from 'src/domain/model/user.model';
import { ResetPasswordService } from 'src/domain/use-case/auth/reset-password/reset-password.service';
import { JwtResponseDto } from '../../model/jwt-response.dto';
import { ResetPasswordRequestDto } from 'src/api/model/reset-password-request.dto';
import { LoginCredentialsRequestDto } from '../../model/login-credentials-request.dto';
import { ApiLoginMapper } from '../../mapper/api-login.mapper';
import { ApiTokenMapper } from 'src/api/mapper/api-token.mapper';
import { ApiResetPasswordMapper } from 'src/api/mapper/api-reset-password.mapper';
import { ApiCreateUserMapper } from '../../mapper/api-create-user.mapper';

@Controller('auth')
export class AuthController {

    private logger = new Logger('AuthController')

    constructor(
        private readonly signUpService: SignUpService,
        private readonly signInService: SignInService,
        private readonly resetPasswordService: ResetPasswordService,
        private readonly apiCreateUserMapper: ApiCreateUserMapper,
        private readonly apiLoginMapper: ApiLoginMapper,
        private readonly apiTokenMapper: ApiTokenMapper,
        private readonly apiResetPasswordMapper: ApiResetPasswordMapper

    ) { }

    @Post('signup/teacher')
    async signUpTeacher(@Body() request: CreateUserRequestDto): Promise<void> {
        this.logger.log(`Register a teacher ${request.username}`)
        const modelRequest = this.apiCreateUserMapper.fromDtoToTeacherModel(request)
        return await this.signUpService.execute(modelRequest)
    }

    @Post('signup/student')
    async signUpStudent(@Body() request: CreateUserRequestDto): Promise<void> {
        this.logger.log(`Register a student ${request.username}`)
        const modelRequest = this.apiCreateUserMapper.fromDtoToStudentModel(request)
        return await this.signUpService.execute(modelRequest)
    }

    @Post('signin')
    async signIn(@Body() request: LoginCredentialsRequestDto): Promise<JwtResponseDto> {
        this.logger.log(`Sign in the user ${request.username}`)
        const requestModel = this.apiLoginMapper.fromDtoToModel(request)
        const userModel = await this.signInService.execute(requestModel)
        return this.apiTokenMapper.fromModelToDto(userModel)
    }

    @Post('reset')
    @UseGuards(AuthGuard())
    async reset(@GetUser() user: UserModel, @Body() request: ResetPasswordRequestDto): Promise<void> {
        this.logger.log(`Reset passsword the user ${user.username}`)
        const requestModel = this.apiResetPasswordMapper.fromDtoToModel(request)
        return await this.resetPasswordService.execute(requestModel, user.id)
    }

    @Post('signout')
    @UseGuards(AuthGuard())
    async signOut(@GetUser() user: UserModel) {
        this.logger.log(`Sign out the user ${user.username}`)
    }
}

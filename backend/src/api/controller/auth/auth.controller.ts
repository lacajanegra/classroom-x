import { Body, Controller, Post } from '@nestjs/common';
import { SignInRequestModel } from 'src/domain/model/sign-in-request.model';
import { SignInService } from 'src/domain/use-case/sign-in/sign-in.service';
import { UserRequestModel } from 'src/domain/model/user-request.model';
import { SignUpService } from 'src/domain/use-case/sign-up/sign-up.service';
import { SignInResponseModel } from 'src/domain/model/sign-in-response.model';
import { RoleEnum } from "src/domain/model/role.enum"

@Controller('auth')
export class AuthController {

    constructor(
        private readonly signUpService: SignUpService,
        private readonly signInService: SignInService
    ) { }

    @Post('signup/teacher')
    signUpTeacher(@Body() request: UserRequestModel): Promise<void> {
        return this.signUpService.execute(request, RoleEnum.TEACHER)
    }

    @Post('signup/student')
    signUpStudent(@Body() request: UserRequestModel): Promise<void> {
        return this.signUpService.execute(request, RoleEnum.STUDENT)
    }

    @Post('signin')
    signIn(@Body() request: SignInRequestModel): Promise<SignInResponseModel> {
        return this.signInService.execute(request)
    }

    @Post('signout')
    signOut() {

    }
}

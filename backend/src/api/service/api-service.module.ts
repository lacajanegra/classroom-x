import { ApiMapperModule } from '../mapper/api-mapper.module';
import { ApiResetPasswordService } from './api-reset-password.service';
import { ApiSignInService } from './api-sign-in.service';
import { ApiSignUpService } from './api-sign-up.service';
import { DomainModule } from 'src/domain/domain.module';
import { GuardModule } from '../guard/guard.module';
import { Module } from '@nestjs/common';

@Module({
    imports:[
        DomainModule,
        GuardModule,
        ApiMapperModule    
    ],
    providers: [
        ApiSignInService,
        ApiSignUpService,
        ApiResetPasswordService
    ],
    exports: [
        ApiSignInService,
        ApiSignUpService,
        ApiResetPasswordService
    ]
})
export class ApiServiceModule { }
